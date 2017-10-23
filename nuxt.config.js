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
    '@nuxtjs/dotenv',
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    routes: function () {
      return axios.get(process.env.PRODUCTS_API)
      .then((res) => {
        return res.data.map((product) => {
          return '/products/' + product.slug
        })
      })
    }
  },
  generate: {
    routes: function () {
      // return axios.get(process.env.PRODUCTS_API)
      // .then((res) => {
      //   const data = JSON.parse(res.data).results
      //   return data.map((product) => {
      //     return '/products/' + product.slug
      //   })
      // })
      const products = axios.get(process.env.PRODUCTS_API)
        .then((res) => {
          const data = JSON.parse(res.data).results
          return data.map((product) => {
            return '/products/' + product.slug
          })
        })
      const articles = axios.get(process.env.PRODUCTS_API)
        .then((res) => {
          const data = JSON.parse(res.data).results
          return data.map((product) => {
            return '/articles/' + product.slug
          })
        })

      return Promise.all([products, articles]).then(values => {
        return values.join().split(',');
      })
    }
  }
}
