const defaultTheme = require('tailwindcss/defaultTheme')
// const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss/types').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
    './assets/**/*.scss',
    './assets/**/*.css',
  ],

  theme: {
    extend: {
      colors: {
        title: {
          50: '#d1d5db',
          100: '#9ca3af',
          200: '#6b7280',
          300: '#707a8a',
          400: '#4b5563',
          500: '#374151',
          600: '#181a20',
          700: '#1f2937',
          800: '#111827',
          900: '#000',
        },
        primary: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#ffd12f',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
      },
      fontFamily: {
        sans: ['"Inter var"', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
