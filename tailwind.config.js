/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        lab: {
          bg: 'rgb(var(--color-lab-bg) / <alpha-value>)',
          subtle: 'rgb(var(--color-lab-subtle) / <alpha-value>)',
          panel: 'rgb(var(--color-lab-panel) / <alpha-value>)',
          'panel-hover': 'rgb(var(--color-lab-panel-hover) / <alpha-value>)',
          border: 'rgb(var(--color-lab-border) / var(--color-lab-border-opacity, 0.1))',
          'border-highlight': 'rgb(var(--color-lab-border) / var(--color-lab-border-highlight-opacity, 0.2))',
          'border-cyan': 'rgb(var(--color-lab-border-cyan) / 0.3)',
          cyan: 'rgb(var(--color-lab-cyan) / <alpha-value>)',
          indigo: '#6366F1',
          emerald: '#10B981',
          amber: '#F59E0B',
          rose: '#F43F5E',
          'text-primary': 'rgb(var(--color-lab-text-primary) / <alpha-value>)',
          'text-secondary': 'rgb(var(--color-lab-text-secondary) / <alpha-value>)',
          'text-muted': 'rgb(var(--color-lab-text-muted) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'Monaco', 'Consolas', 'monospace'],
      },
      borderRadius: {
        'lab': '10px',
        'lab-sm': '6px',
        'lab-lg': '16px',
      },
      boxShadow: {
        'lab-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 1px 1px rgba(255, 255, 255, 0.05)',
        'lab-glow-cyan': '0 0 25px -5px rgba(56, 189, 248, 0.15)',
        'lab-glow-indigo': '0 0 25px -5px rgba(99, 102, 241, 0.15)',
        'lab-glow-emerald': '0 0 25px -5px rgba(16, 185, 129, 0.15)',
      },
      backgroundImage: {
        'grid-pattern': "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite alternate',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
        glowPulse: {
          '0%': { opacity: 0.3, transform: 'scale(1)' },
          '100%': { opacity: 0.7, transform: 'scale(1.05)' },
        },
      },
    },
  },
  plugins: [],
}
