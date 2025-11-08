/** Shared design tokens for web and mobile */
const tokens = {
  color: {
    background: "#000000",
    foreground: "#ededed",
    surface: "rgba(255,255,255,0.03)",
    borderSubtle: "rgba(255,255,255,0.10)",
    textPrimary: "#ffffff",
    textSecondary: "rgba(255,255,255,0.70)",
    accent: {
      primary: "#6366F1", // indigo-500
      secondary: "#A855F7", // purple-500
    },
  },
  radius: {
    md: 12,
    lg: 16,
    xl: 20,
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
  },
  shadow: {
    vignette: "inset 0 0 200px rgba(0,0,0,0.6)",
  },
  typography: {
    fontSansVar: "var(--font-geist-sans)",
    fontMonoVar: "var(--font-geist-mono)",
    scale: {
      h1: 60,
      h2: 36,
      h3: 24,
      body: 16,
      small: 14,
    },
  },
};

module.exports = { tokens };


