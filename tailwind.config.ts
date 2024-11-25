import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "whitesmoke": "#f3f3f3",
        "lime-green": "#d9fdd3",
        "black": "#1b1b1b",
        "active-item": "#e5e5e5",
        green : "#1a8353"
      },
    },
  },
  plugins: [require('tailwindcss-motion')],
} satisfies Config;
