/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#060b16',        // app background
        surface: '#0b1220',      // cards
        surface2: '#111a2e',     // nested surfaces / hover
        line: '#1c2740',         // borders
        accent: {
          DEFAULT: '#6366f1',    // indigo
          soft: '#818cf8',
          deep: '#4f46e5',
        },
        cyanx: '#22d3ee',
        success: '#34d399',
        warn: '#fbbf24',
        danger: '#f87147',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,.03) inset, 0 8px 30px rgba(0,0,0,.25)',
        glow: '0 0 24px rgba(99,102,241,.35)',
        'glow-sm': '0 0 12px rgba(99,102,241,.25)',
      },
      keyframes: {
        'fade-in': { '0%': { opacity: '0', transform: 'translateY(6px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        'pulse-soft': { '0%, 100%': { opacity: '1' }, '50%': { opacity: '.45' } },
      },
      animation: {
        'fade-in': 'fade-in .35s ease-out both',
        'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
