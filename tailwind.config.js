/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep navy ink — the industrial base
        ink: {
          950: '#04101F',
          900: '#07182C',
          800: '#0A2540',
          700: '#103355',
          600: '#16456E',
          500: '#1C5689',
        },
        primary: {
          DEFAULT: '#0A2540',
          dark: '#061A30',
          light: '#16456E',
        },
        // Signature teal / steel-cyan accent
        accent: {
          DEFAULT: '#0E9384',
          dark: '#0B7468',
          bright: '#2BD4C0',
          light: '#7FE7DA',
        },
        steel: {
          50: '#F4F7FA',
          100: '#E6EDF4',
          200: '#CBD9E6',
          300: '#9DB4CB',
          400: '#6E8BAA',
        },
        secondary: '#FFFFFF',
      },
      fontFamily: {
        display: ['Sora', 'Plus Jakarta Sans', 'system-ui', 'sans-serif'],
        sans: ['Plus Jakarta Sans', 'Segoe UI', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(43,212,192,0.25), 0 18px 50px -12px rgba(14,147,132,0.45)',
        card: '0 20px 45px -20px rgba(7,24,44,0.35)',
        lift: '0 30px 60px -25px rgba(7,24,44,0.5)',
      },
      backgroundImage: {
        'grid-steel':
          'linear-gradient(rgba(16,69,110,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(16,69,110,0.06) 1px, transparent 1px)',
        'mesh-ink':
          'radial-gradient(60% 60% at 15% 10%, rgba(14,147,132,0.18) 0%, transparent 60%), radial-gradient(50% 50% at 90% 20%, rgba(43,212,192,0.12) 0%, transparent 55%), radial-gradient(70% 70% at 80% 100%, rgba(28,86,137,0.25) 0%, transparent 60%)',
      },
      keyframes: {
        'marquee-x': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'float-y': {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.95)', opacity: '0.7' },
          '70%': { transform: 'scale(1.3)', opacity: '0' },
          '100%': { opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        marquee: 'marquee-x 28s linear infinite',
        float: 'float-y 5s ease-in-out infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.4,0,0.6,1) infinite',
        shimmer: 'shimmer 2.5s linear infinite',
      },
    },
  },
  plugins: [],
};
