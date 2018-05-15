const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'src',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  buildDir: '../functions/nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    babel: {
      presets: ['env', 'stage-0'],
      plugins: [
        [
          'transform-runtime',
          {
            polyfill: true,
            regenerator: true,
          },
        ],
      ],
    },
    /*
    ** Run ESLint on save
    */
    extend(config, { dev, isClient }) {

      // 1.0.0-rc11のためisDevではなくdev
      // eslintが動かない?
      if (dev && isClient) {
        console.log('Call Eslint and Stylelint')
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/,
        // }),

        // eslintと競合している？
        // config.plugins.push(
        //   new StylelintPlugin({
        //     files: ['**/*.vue', '**/*.scss'],
        //   }),
        // );
      }
    },
  },
  modules: [['@nuxtjs/pwa', { icon: false }], 'bootstrap-vue/nuxt'],
  manifest: {
    name: 'project-name',
    lang: 'ja',
  },
  css: ['@/assets/scss/app.scss'],
};
