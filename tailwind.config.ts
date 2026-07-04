import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F5F0E8",
        ink: "#0A0A0A",
        muted: "#6B6B6B",
      },
      fontFamily: {
        sans: ["var(--font-space)", "system-ui", "sans-serif"],
      },
      animation: {
        marquee: "marquee 22s linear infinite",
        "marquee-reverse": "marquee-reverse 22s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to:   { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to:   { transform: "translateX(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
