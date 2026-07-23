/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Verde elegante — cor primária, presença institucional e natureza
        forest: {
          DEFAULT: '#1E3D2F',
          dark: '#12261C',
          light: '#2E5643',
        },
        // Dourado suave — acento premium
        gold: {
          DEFAULT: '#C9A66B',
          light: '#E8D5A8',
          dark: '#A6813F',
        },
        // Branco quente — fundo de respiro
        cream: {
          DEFAULT: '#FAF6EE',
          soft: '#F3ECDD',
        },
        // Tons terrosos — acento secundário, calor humano
        clay: {
          DEFAULT: '#A9714B',
          dark: '#7C5033',
        },
        // Texto
        charcoal: '#211D17',
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Work Sans"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")",
      },
      boxShadow: {
        soft: '0 20px 60px -20px rgba(18, 38, 28, 0.35)',
        card: '0 12px 32px -12px rgba(33, 29, 23, 0.18)',
      },
      maxWidth: {
        content: '1240px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
