import { z } from "zod";

// Shared schemas across backend and frontend
export const WaitlistSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export type WaitlistInput = z.infer<typeof WaitlistSchema>;

// API Envelope Types
export interface ApiResponse<T = undefined> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
    details?: any;
  };
}
