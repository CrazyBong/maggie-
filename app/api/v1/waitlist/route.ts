import { NextResponse } from "next/server";
import { WaitlistSchema } from "@/packages/shared-types";
import { logger } from "@/lib/logger";

// Simple in-memory rate limiting map for mockup purposes.
// In production, use Redis or database table.
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW_MS = 60000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // 5 req/min as per Rule 03

export async function POST(request: Request) {
  // Extract simple IP or fallback
  const ip = request.headers.get("x-forwarded-for") || "unknown";

  try {
    // 1. Rate Limiting (P0 Security)
    const now = Date.now();
    const rateLimitData = rateLimitMap.get(ip);

    if (rateLimitData) {
      if (now - rateLimitData.timestamp < RATE_LIMIT_WINDOW_MS) {
        if (rateLimitData.count >= MAX_REQUESTS_PER_WINDOW) {
          logger.warn({ ip }, "Rate limit exceeded");
          return NextResponse.json(
            { success: false, error: { code: "RATE_LIMIT_EXCEEDED", message: "Too many requests" } },
            { status: 429 }
          );
        }
        rateLimitData.count++;
      } else {
        rateLimitMap.set(ip, { count: 1, timestamp: now });
      }
    } else {
      rateLimitMap.set(ip, { count: 1, timestamp: now });
    }

    // 2. Body Validation (P0 Security)
    let body;
    try {
      body = await request.json();
    } catch {
      logger.warn({ ip }, "Invalid JSON body");
      return NextResponse.json(
        { success: false, error: { code: "INVALID_JSON", message: "Invalid JSON payload" } },
        { status: 400 }
      );
    }

    const validation = WaitlistSchema.safeParse(body);
    if (!validation.success) {
      logger.warn({ ip, errors: validation.error.format() }, "Validation failed");
      return NextResponse.json(
        { success: false, error: { code: "VALIDATION_FAILED", message: "Invalid payload format", details: validation.error.format() } },
        { status: 422 }
      );
    }

    const { email } = validation.data;

    // 3. Business Logic (Mock database insertion)
    // Here we would typically use a repository to insert into the database.
    logger.info({ ip, emailMasked: email.replace(/(?<=.).(?=.*@)/g, '*') }, "New waitlist signup");

    // Mock successful insertion delay
    await new Promise((resolve) => setTimeout(resolve, 500));

    // 4. Standard Response Envelope (P1 API Design)
    return NextResponse.json(
      { success: true, data: { message: "Successfully joined the waitlist" } },
      { status: 201 }
    );
  } catch (error) {
    logger.error({ ip, error }, "Unhandled error in waitlist route");
    return NextResponse.json(
      { success: false, error: { code: "INTERNAL_ERROR", message: "An unexpected error occurred" } },
      { status: 500 }
    );
  }
}
