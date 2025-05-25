export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A4747",         // Deep teal
        secondary: "#14B8A6",       // Teal
        accent: "#F59E42",          // Orange
        background: "#F5F7FA",      // Light gray
        surface: "#FFFFFF",         // White
        textPrimary: "#0A0A0A",     // Black (for light backgrounds)
        textSecondary: "#1A202C",   // Dark gray (for contrast)
        textOnPrimary: "#FFFFFF",   // White (for dark backgrounds)
        textOnAccent: "#0A4747",    // Teal (for accent backgrounds)
        success: "#22C55E",
        error: "#EF4444",
      },
      backgroundImage: {
        'fintech-gradient': 'linear-gradient(135deg, #0A4747 0%, #14B8A6 50%, #F59E42 100%)',
        'fintech-gradient-light': 'linear-gradient(135deg, #F5F7FA 0%, #FFFFFF 100%)',
      },
    },
  },
  plugins: [],
};