const autoprefixer = require('autoprefixer');
const postcssSass = require('@csstools/postcss-sass');
const cssnano = require('cssnano');

const isProduction = process.env.NODE_ENV === 'production';

const purgeCSS = require('@fullhuman/postcss-purgecss')({
  content: [
    './src/**/*.js',
    './public/index.html'
  ],
  css: ['./src/**/*.css', './src/**/*.scss']
});

module.exports = {
  plugins: [
    autoprefixer,
    postcssSass,
    isProduction ? cssnano({
      preset: 'default'
    }) : null,
    isProduction ? purgeCSS : null
  ]
};
