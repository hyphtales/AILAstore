/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Deep night blue background
        night: {
          50: '#1a1f3a',
          100: '#151a31',
          200: '#101529',
          300: '#0c1020',
          400: '#090d1a',
          500: '#070a16',
          600: '#050813',
          700: '#04060f',
          800: '#03040c',
          900: '#02030a',
        },
        // Electric blue-violet glow
        electric: {
          50: '#7c8aff',
          100: '#6a78f0',
          200: '#5a66e0',
          300: '#4a54d0',
          400: '#3d44b8',
          500: '#3338a0',
          600: '#2a2e88',
          700: '#222470',
          800: '#1a1c58',
          900: '#121440',
        },
        // Golden accents
        gold: {
          50: '#ffe9a8',
          100: '#ffd97a',
          200: '#ffc94c',
          300: '#f5b930',
          400: '#e0a820',
          500: '#c89518',
          600: '#a07812',
          700: '#785c0e',
          800: '#50400a',
          900: '#282405',
        },
        // Accent violet for glows
        violet: {
          50: '#c4b5fd',
          100: '#a78bfa',
          200: '#8b5cf6',
          300: '#7c3aed',
          400: '#6d28d9',
          500: '#5b21b6',
          600: '#4c1d95',
          700: '#3b1980',
          800: '#2e1565',
          900: '#1e1040',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'fade-in-delay-1': 'fadeInUp 0.7s ease-out 0.15s forwards',
        'fade-in-delay-2': 'fadeInUp 0.7s ease-out 0.3s forwards',
        'fade-in-delay-3': 'fadeInUp 0.7s ease-out 0.45s forwards',
        'fade-in-delay-4': 'fadeInUp 0.7s ease-out 0.6s forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'gradient-shift': 'gradientShift 8s ease infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};
