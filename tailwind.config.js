module.exports = {
  content: [
    './src/**/*.{html,js,ts,jsx,tsx}',
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        basewhite: 'var(--basewhite)',
        'gray-25': 'var(--gray-25)',
        'gray-400': 'var(--gray-400)',
        'gray-500': 'var(--gray-500)',
        'gray-600': 'var(--gray-600)',
        'primary-200': 'var(--primary-200)',
        'primary-50': 'var(--primary-50)',
        'primary-600': 'var(--primary-600)',
        'primary-700': 'var(--primary-700)',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        'text-md-regular': 'var(--text-md-regular-font-family)',
        'text-md-semibold': 'var(--text-md-semibold-font-family)',
        'text-sm-regular': 'var(--text-sm-regular-font-family)',
        'text-sm-semibold': 'var(--text-sm-semibold-font-family)',
        'text-xs-medium': 'var(--text-xs-medium-font-family)',
        'kind-sans': ['KindSans', 'sans-serif'],
        sans: [
          'KindSans',
          'Recoleta',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        recoleta: ['Recoleta', 'serif'],
      },
      boxShadow: {
        'shadow-xs': 'var(--shadow-xs)',
        'shadows-shadow-xs': 'var(--shadows-shadow-xs)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
    container: { center: true, padding: '2rem', screens: { '2xl': '1400px' } },
  },
  plugins: [],
  darkMode: ['class'],
};
