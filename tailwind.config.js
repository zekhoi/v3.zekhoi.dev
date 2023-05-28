/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  safelist: [
    "text-2xl",
    "text-3xl",
    {
      pattern:
        /(from|to|bg|border)-(primary|success|danger|warning|violet|indigo|purple)-(400|500|600)/,
      variants: ["lg", "hover", "focus", "lg:hover"],
    },
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: {
          50: "#F0F9FF",
          100: "#DBF1FF",
          200: "#B8E2FF",
          300: "#8AD0FF",
          400: "#52BAFF",
          500: "#0099FF",
          600: "#008AE6",
          700: "#007ACC",
          800: "#0065A8",
          900: "#00497A",
        },
        success: {
          50: "#EEFCF6",
          100: "#DCF9EE",
          200: "#B0F2D8",
          300: "#80EAC0",
          400: "#3FDF9F",
          500: "#22CC88",
          600: "#1FB87A",
          700: "#1BA26C",
          800: "#17875A",
          900: "#106040",
        },
        danger: {
          50: "#FFF5F8",
          100: "#FFE5EE",
          200: "#FFCCDD",
          300: "#FFA8C5",
          400: "#FF7AA7",
          500: "#FF0055",
          600: "#EB004E",
          700: "#CC0044",
          800: "#AD003A",
          900: "#750027",
        },
        warning: {
          50: "#FFF8EB",
          100: "#FFF3DB",
          200: "#FFE4AD",
          300: "#FFD480",
          400: "#FFC247",
          500: "#FFAA00",
          600: "#E69900",
          700: "#CC8800",
          800: "#A87000",
          900: "#7A5200",
        },
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.700"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.400"),
              },
              code: { color: theme("colors.blue.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
