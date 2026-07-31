/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Paleta profissional — ancorada em cores reais do edifício
        // (telhado turquesa, paredes claras, madeira das portas).
        // Mantive os MESMOS nomes de token do ficheiro original
        // (forest, gold, cream, clay, charcoal) para que nenhuma
        // className no resto do projecto precise de ser alterada.
        forest: {
          // Cor de assinatura — inspirada no telhado real do Tianjane Fingoe
          DEFAULT: '#2F6F5E',
          dark: '#1F4D41',
          light: '#6CA695',
        },
        gold: {
          // Dourado mais rico e confiante para CTAs — mais contraste
          // sobre fundos escuros do que o tom lavado anterior
          DEFAULT: '#C9A227',
          light: '#E4C765',
          dark: '#A6821E',
        },
        cream: {
          DEFAULT: '#F8F3E8',
          soft: '#FFFDF8',
        },
        clay: {
          // Neutro terroso para cartões, divisores e detalhes secundários
          DEFAULT: '#B08D6E',
          dark: '#8B6F54',
        },
        // Charcoal escuro com nota esverdeada — combina com o azul-petróleo
        // já usado na navbar, em vez de destoar dele
        charcoal: '#1C2A27',
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
        soft: '0 20px 60px -20px rgba(28, 42, 39, 0.35)',
        card: '0 12px 32px -12px rgba(28, 42, 39, 0.18)',
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