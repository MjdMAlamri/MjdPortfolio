export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#000",         // Main background (almost black)
        card: "#181818",       // Card background
        cardFace: "#222222",   // Slightly lighter for depth
        text: "#e5e5e5",       // Main text color
        muted: "#a3a3a3",      // Muted text (grayish)
        accent: "#9ca3af",     // Accent gray (used for hover/links)
        good: "#22c55e",       // Keep green for success
        bad: "#ef4444",        // Keep red for errors
      },
      dropShadow: { sticker: "0 6px 0 rgba(0,0,0,0.25)" },
    },
  },
  plugins: [],
};
