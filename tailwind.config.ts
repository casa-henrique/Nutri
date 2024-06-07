import type { Config } from "tailwindcss";

import tailwindcssAnimate from "tailwindcss-animate";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "../../src/**/*.{ts,tsx}",
    "./node_modules/faccioli-ui/**/*.{ts,tsx,js,jsx}",
    "../../node_modules/faccioli-ui/**/*.{ts,tsx,js,jsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      width: {
        25: "25%",
        50: "50%",
        75: "75%",
        100: "100%",
      },
      height: {
        25: "25%",
        50: "50%",
        75: "75%",
        100: "100%",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },

        white: "#fff",
        black: "#000",

        gray50: "rgba(225, 225, 230, 0.20)",
        gray100: "#e1e1e6",
        gray200: "#A9a9b2",
        gray400: "#7c7c8a",
        gray600: "#323238",
        gray800: "#202024",

        green300: "#00B37E",
        green500: "#00875F",
        green700: "#015F43",
        green900: "#00291D",

        red300: "#FF0000",
        red500: "#C52300",
        red700: "#950000",
        red900: "#490000",

        orange200: "#E4B663",
        orange300: "#da9c28",
        orange400: "#FF7A00",
        orange800: "#A85100",

        blue100: "rgba(168, 219, 255, 0.30)",
        blue200: "#2279B6",
        blue400: "#0C4369",
        blue600: "#0A304A",
        blue800: "#07283E",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        Roboto: ["Roboto", "sans-serif"],
        RobotoMono: ["RobotoMono", "sans-serif"],
        Montserrat: ["Montserrat", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
      keyframes: {
        bounceSides: {
          "0%": {
            transform: "translateX(-25%)",
          },
          "100%": {
            transform: "translateX(-25%)",
          },
          "50%": {
            transform: "none",
          },
        },
        OpenSection: {
          "0%": { opacity: "0" },
          "100%": { opacity: "100" },
        },
        closeCookies: {
          "0%": { opacity: "100", height: "14%" },
          "100%": { opacity: "0", height: "0" },
        },
        bottomToTop: {
          "0%": { transform: "translateY(500px)" },
          "100%": { transform: "translateY(0px)" },
        },
        rightToLeft: {
          "0%": { transform: "translateX(500px)" },
          "100%": { transform: "translateX(0px)" },
        },
        rightToLeftInverse: {
          "0%": { transform: "translateX(-500px)", opacity: "0" },
          "100%": { transform: "translateX(0px)", opacity: "1" },
        },
        leftToRight: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-500px)" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        slideIn: {
          from: { transform: "translateY(-100%)" },
          to: { transform: "translateY(0)" },
        },
        slideOut: {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(-100%)" },
        },
      },
      animation: {
        bounceSide: "bounceSides 2s infinite",
        closeCookies: "closeCookies 300ms linear",
        showSection: "OpenSection 600ms ease-in-out",
        btt: "bottomToTop 500ms linear",
        rtl: "rightToLeft 500ms linear",
        ltr: "leftToRight 500ms linear",
        rtlinv: "rightToLeftInverse 700ms linear",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        slideIn: "slideIn 200ms ease-out",
        slideOut: "slideOut 200ms ease-out",
      },
    },
  },
  plugins: [
    tailwindcssAnimate,
    require("tailwind-scrollbar-hide"),
    require("daisyui"),
  ],
} satisfies Config;
export default config;
