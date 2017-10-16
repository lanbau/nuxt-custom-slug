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
        href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.min.css'
      }
    ]
  }
}
