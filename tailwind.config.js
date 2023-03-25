const { createGlobPatternsForDependencies } = require('@nrwl/angular/tailwind');
const { join } = require('path');

module.exports = {
  content: [
    join(__dirname, 'src/**/!(*.stories|*.spec).{ts,html,css,scss}'),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  important: true,
  theme: {
    extend: {
      opacity: {
        '32': '.32',
      },
      colors:{
        secondary:{
          50: '#fbfdff',
          100: '#f6fbff',
          200: '#f0f8ff',
          300: '#e9f5fe',
          400: '#e5f2fe',
          500: '#e0f0fe',
          600: '#dceefe',
          700: '#d8ecfe',
          800: '#d3e9fe',
          900: '#cbe5fd'
          },
        primary: {
          50: '#e5e9ee',
          100: '#bfc8d4',
          200: '#95a3b8',
          300: '#6a7e9b',
          400: '#4a6385',
          500: '#2a4770',
          600: '#254068',
          700: '#1f375d',
          800: '#192f53',
          900: '#0f2041'
        },
        accent: {
          50: '#e2e6eb',
          100: '#b6c0cd',
          200: '#8696ac',
          300: '#566b8b',
          400: '#314c72',
          500: '#0d2c59',
          600: '#0b2751',
          700: '#092148',
          800: '#071b3e',
          900: '#03102e',
        },
        indigo: {
          50: '#e7ecf2',
          100: '#c3cfdf',
          200: '#9cafca',
          300: '#748eb5',
          400: '#5676a5',
          500: '#385e95',
          600: '#32568d',
          700: '#2b4c82',
          800: '#244278',
          900: '#173167',
        },
        'light-primary': '#6F90CB',
        'grey': '#eeeff3',

      }
    },
  },
  plugins: [],
};
