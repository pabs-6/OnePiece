/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'op-red': '#C0392B',
        'op-gold': '#F39C12',
        'op-dark': '#0D1319',
        'op-darker': '#050508',
        'op-navy': '#0D1B2A',
        'op-blue': '#1A3A5C',
        'op-accent': '#E74C3C',
        'op-yellow': '#FFD700',
        'op-cream': '#FFF8E7',
      },
      fontFamily: {
        'pirate': ['Cinzel Decorative', 'serif'],
        'body': ['Rajdhani', 'sans-serif'],
        'mono': ['Share Tech Mono', 'monospace'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'wave': 'wave 3s linear infinite',
        'fadeInUp': 'fadeInUp 0.8s ease forwards',
        'slideInLeft': 'slideInLeft 0.8s ease forwards',
        'slideInRight': 'slideInRight 0.8s ease forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { textShadow: '0 0 10px #F39C12, 0 0 20px #F39C12, 0 0 30px #F39C12' },
          'to': { textShadow: '0 0 20px #C0392B, 0 0 40px #C0392B, 0 0 60px #C0392B' },
        },
        wave: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeInUp: {
          'from': { opacity: '0', transform: 'translateY(60px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          'from': { opacity: '0', transform: 'translateX(-80px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          'from': { opacity: '0', transform: 'translateX(80px)' },
          'to': { opacity: '1', transform: 'translateX(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #F39C12, #FFD700, #F39C12)',
        'red-gradient': 'linear-gradient(135deg, #C0392B, #E74C3C, #C0392B)',
        'ocean-gradient': 'linear-gradient(180deg, #0D1B2A 0%, #1A3A5C 50%, #0D1B2A 100%)',
        'dark-gradient': 'linear-gradient(135deg, #0A0A0F 0%, #1a1a2e 100%)',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(243, 156, 18, 0.5)',
        'red': '0 0 20px rgba(192, 57, 43, 0.5)',
        'glow': '0 0 40px rgba(243, 156, 18, 0.3)',
        'card': '0 25px 50px -12px rgba(0, 0, 0, 0.8)',
      },
    },
  },
  plugins: [],
}
