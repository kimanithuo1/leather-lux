/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "app/**/*.{ts,tsx}", "components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: {
          DEFAULT: "rgb(var(--color-ivory) / <alpha-value>)",
          light: "rgb(var(--color-ivory-light) / <alpha-value>)",
          dark: "rgb(var(--color-ivory-dark) / <alpha-value>)",
        },
        espresso: {
          DEFAULT: "rgb(var(--color-espresso) / <alpha-value>)",
          light: "rgb(var(--color-espresso-light) / <alpha-value>)",
          dark: "rgb(var(--color-espresso-dark) / <alpha-value>)",
        },
        cognac: {
          DEFAULT: "rgb(var(--color-cognac) / <alpha-value>)",
          light: "rgb(var(--color-cognac-light) / <alpha-value>)",
          dark: "rgb(var(--color-cognac-dark) / <alpha-value>)",
        },
        matte: {
          DEFAULT: "rgb(var(--color-matte) / <alpha-value>)",
          light: "rgb(var(--color-matte-light) / <alpha-value>)",
          dark: "rgb(var(--color-matte-dark) / <alpha-value>)",
        },
        gold: {
          DEFAULT: "rgb(var(--color-gold) / <alpha-value>)",
          light: "rgb(var(--color-gold-light) / <alpha-value>)",
          dark: "rgb(var(--color-gold-dark) / <alpha-value>)",
        },
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
      },
      fontFamily: {
        sans: ["Playfair Display", "serif"],
        body: ["Lato", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

