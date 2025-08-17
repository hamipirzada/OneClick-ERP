import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: 'var(--brand)',
        'brand-600': 'var(--brand-600)',
        ink: 'var(--ink)',
        muted: 'var(--muted)',
        bg: 'var(--bg)',
        card: 'var(--card)',
        border: 'var(--border)',
        success: 'var(--success)',
        info: 'var(--info)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['44px', { lineHeight: '52px', fontWeight: '600', letterSpacing: '-0.025em' }],
        'h2': ['32px', { lineHeight: '40px', fontWeight: '600', letterSpacing: '-0.02em' }],
        'h3': ['20px', { lineHeight: '28px', fontWeight: '600', letterSpacing: '-0.01em' }],
        'body': ['16px', { lineHeight: '26px' }],
      },
      maxWidth: {
        'container': '1280px',
      },
      borderRadius: {
        'card': '12px',
        'button': '10px',
      },
      boxShadow: {
        'card': '0 1px 2px rgba(16,24,40,.05), 0 12px 24px -8px rgba(16,24,40,.08)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config