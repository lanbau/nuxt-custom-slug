const axios = require('axios')
require('dotenv').config() // Required if you want to use process.env in this file

module.exports = {
  build: {
    vendor: ['axios']
  },
  head: {
    titleTemplate: '%s | Awesome JS SSR Blog',
    // ...
    link: [
      // ...
      {
        rel: 'stylesheet',
        href: process.env.CSS_API
      }
    ]
  },
  modules: [
    // Simple usage
    '@nuxtjs/dotenv'
  ],
  generate: {
    routes: function () {
      return axios.get(process.env.POSTS_API)
      .then((res) => {
        return res.data.map((post) => {
          return '/blog/' + post.slug
        })
      })
    }
  }
}
