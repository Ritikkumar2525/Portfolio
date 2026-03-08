/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#09090b", // zinc-950
        tertiary: "#18181b", // zinc-900
        bordercol: "#27272a", // zinc-800
        lighttext: "#fafafa", // zinc-50
        mutedtext: "#a1a1aa", // zinc-400
      },
      fontFamily: {
        sans: ['Geist', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(255, 255, 255, 0.05), transparent 60%)',
        'radial-glow-subtle': 'radial-gradient(ellipse at top, rgba(255,255,255,0.03) 0%, transparent 80%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
