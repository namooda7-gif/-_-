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
          olive: "#4A5240",
          burgundy: "#5C1A2E",
          gold: "var(--accent-gold)",
          page: "var(--accent-page)",
        }
      },
    },
  },
  plugins: [],
};
export default config;
