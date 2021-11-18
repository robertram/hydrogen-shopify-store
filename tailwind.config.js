module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  variants: {
    extend: {},
  },
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            hr: {
              borderColor: theme('colors.gray.200'),
              borderTopWidth: '1px',
              marginTop: '2rem',
              marginBottom: '2rem',
            },
            'ol > li::before': {
              color: theme('colors.gray.900'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.900'),
            },
          },
        },
      }),
      backgroundImage: {
        'hero-background': "url('/computer.jpg')",
        'hero-background2': "url('/computer2.jpg')",
      },
      colors: {
        mine: {
          DEFAULT: '#252424',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
