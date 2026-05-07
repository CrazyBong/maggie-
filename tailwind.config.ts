import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          cream: "var(--bg-cream)",
          white: "var(--bg-white)",
          dark: "var(--bg-dark)",
        },
        accent: {
          green: "var(--accent-green)",
          pink: "var(--accent-pink)",
          yellow: "var(--accent-yellow)",
          purple: "var(--accent-purple)",
          blue: "var(--accent-blue)",
        },
        text: {
          primary: "var(--text-primary)",
          muted: "var(--text-muted)",
        },
        border: "var(--border)",
      },
      fontFamily: {
        display: ["var(--font-dm-serif)"],
        grotesk: ["var(--font-space-grotesk)"],
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
        xl: "var(--shadow-xl)",
      },
    },
  },
  plugins: [],
};
export default config;
