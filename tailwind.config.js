/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
  fontFamily: {
  sans: ['Poppins', 'sans-serif'],
  heading: ['Playfair Display', 'serif'],
  script: ['Great Vibes', 'cursive'],
  wedding: ['Allura', 'cursive'],
  save: ['Alex Brush', 'cursive'],
  luxury: ['Cinzel', 'serif'],
},
      colors: {
        primary: '#B7DCEB',
        primaryDark: '#7FBFE0',
        primaryDeep: '#4E9FC4',
        primarySoft: '#EAF7FB',
        ribbon: '#8CCDE9',
        ribbonDark: '#6DB6D8',
        ivory: '#FAF9F5',
        cream: '#FFFDF8',
        gold: '#D8C9A4',
        goldDark: '#BCA977',
        textDark: '#2F3437',
        navyGray: '#1F3742',
        mutedText: '#6B7280',
        borderSoft: '#DDEAF0',
        successSoft: '#E7F6ED',
        successText: '#17694A',
        warningSoft: '#FFF3E1',
        warningText: '#9A5F16',
      },
      boxShadow: {
        soft: '0 20px 70px rgba(31, 55, 66, 0.10)',
        card: '0 12px 40px rgba(31, 55, 66, 0.08)',
        glow: '0 16px 55px rgba(127, 191, 224, 0.35)',
      },
      backgroundImage: {
        'soft-radial': 'radial-gradient(circle at top left, rgba(183,220,235,0.45), transparent 35%), radial-gradient(circle at bottom right, rgba(216,201,164,0.25), transparent 40%)',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        arrow: {
          '0%, 100%': { transform: 'translateY(0)', opacity: '0.55' },
          '50%': { transform: 'translateY(8px)', opacity: '1' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        floaty: 'floaty 5s ease-in-out infinite',
        arrow: 'arrow 1.7s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [],
};
