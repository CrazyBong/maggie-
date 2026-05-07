import { test, expect } from "@playwright/test";

test.describe("Landing Page", () => {
  test("should render the hero section", async ({ page }) => {
    await page.goto("/");
    
    // Check main heading
    await expect(page.locator("h1")).toContainText("Give your ideas a glow up.");
    
    // Check waitlist button in hero
    const joinButtons = page.locator("button:has-text('Join the Waitlist')");
    await expect(joinButtons.first()).toBeVisible();
  });

  test("should have functional smooth scrolling via lenis", async ({ page }) => {
    await page.goto("/");
    // Lenis creates html class lenis
    await expect(page.locator("html")).toHaveClass(/lenis/);
  });

  test("should allow waitlist signup", async ({ page }) => {
    // Intercept API call
    await page.route("/api/v1/waitlist", async (route) => {
      const json = { success: true, data: { message: "Successfully joined the waitlist" } };
      await route.fulfill({ json, status: 201 });
    });

    await page.goto("/");
    
    // Fill the waitlist form
    await page.fill("input[placeholder='your@email.com']", "playwright@example.com");
    await page.click("button:has-text('Join Waitlist')");
    
    // Check for success message
    await expect(page.locator("text=You're on the list! We'll be in touch.")).toBeVisible();
  });
});
