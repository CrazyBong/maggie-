import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { WaitlistCTA } from "@/components/sections/WaitlistCTA";
import { describe, it, expect, vi, beforeEach } from "vitest";

// Mock fetch
global.fetch = vi.fn();

describe("WaitlistCTA", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders the waitlist form", () => {
    render(<WaitlistCTA />);
    expect(screen.getByPlaceholderText("your@email.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /join waitlist/i })).toBeInTheDocument();
  });

  it("shows validation error on invalid email", async () => {
    render(<WaitlistCTA />);
    const input = screen.getByPlaceholderText("your@email.com");
    const button = screen.getByRole("button", { name: /join waitlist/i });

    fireEvent.change(input, { target: { value: "invalid-email" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText("Invalid email address")).toBeInTheDocument();
    });
    expect(global.fetch).not.toHaveBeenCalled();
  });

  it("submits the form successfully and shows success message", async () => {
    (global.fetch as any).mockResolvedValueOnce({
      json: async () => ({ success: true }),
    });

    render(<WaitlistCTA />);
    const input = screen.getByPlaceholderText("your@email.com");
    const button = screen.getByRole("button", { name: /join waitlist/i });

    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(button);

    await waitFor(() => {
      expect(screen.getByText(/you're on the list/i)).toBeInTheDocument();
    });

    expect(global.fetch).toHaveBeenCalledWith("/api/v1/waitlist", expect.objectContaining({
      method: "POST",
      body: JSON.stringify({ email: "test@example.com" }),
    }));
  });
});
