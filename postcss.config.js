const autoprefixer = require('autoprefixer');
const postcssSass = require('@csstools/postcss-sass');
const cssnano = require('cssnano');
const tailwindcss = require('tailwindcss');

const isProduction = process.env.NODE_ENV === 'production';

const purgeCSS = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.js',
    './public/index.html'
  ],
  css: ['./src/**/*.css', './src/**/*.scss']
});

module.exports = {
  parser: "postcss-scss",
  plugins: [
    tailwindcss,
    autoprefixer,
    postcssSass,
    isProduction ? cssnano({
      preset: 'default'
    }) : null,
    isProduction ? purgeCSS : null
  ]
};
