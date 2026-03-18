import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--bg-primary)",
        foreground: "var(--text-primary)",
        accent: {
          pink: "var(--accent-pink)",
          olive: "#4A5240",
          burgundy: "#5C1A2E",
          gold: "#B8860B",
        }
      },
    },
  },
  plugins: [],
};
export default config;
