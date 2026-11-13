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
        bg: {
          main: "#F4F1EA",       // Soft Cashmere / Warm Beige
          deep: "#ECE7DE",
          surface: "#EDE8DF",
          surfaceLight: "#FBF9F6",
          card: "#FFFFFF",
          cardHover: "#FAF8F5",
        },
        text: {
          primary: "#1C1917",    // Dark warm charcoal
          secondary: "#57534E",  // Warm stone brown
          muted: "#8C827A",      // Soft warm sand
          inverse: "#F4F1EA",    // Warm cream
        },
        border: {
          subtle: "rgba(41, 37, 36, 0.09)",
          medium: "rgba(41, 37, 36, 0.18)",
          dark: "#1C1917",
        },
        accent: {
          gold: "#C58A18",
          goldLight: "#E0A632",
          goldSoft: "rgba(197, 138, 24, 0.12)",
          goldGlow: "rgba(197, 138, 24, 0.25)",
          olive: "#336B42",
          oliveBg: "#EBF4ED",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "-apple-system", "sans-serif"],
        heading: ["var(--font-heading)", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 4px 20px rgba(44, 38, 34, 0.04)",
        card: "0 10px 30px rgba(44, 38, 34, 0.06)",
        cardHover: "0 20px 45px rgba(44, 38, 34, 0.12)",
        modal: "0 30px 80px rgba(28, 25, 23, 0.22)",
      },
      letterSpacing: {
        widest: "0.15em",
        extraWide: "0.22em",
      },
    },
  },
  plugins: [],
};

export default config;
