<!-- ./pages/post/_id/index.vue -->
<template>
  <div class="main-content">
    <div class="container">
      <h2 class="title is-2">{{ product.slug }}</h2>
      <h2 class="title is-2">{{ product.name }}</h2>
      <h2 class="title is-2">{{ product.price }}</h2>
      <h2 class="title is-2">{{ product.sku }}</h2>
    </div>
  </div>
</template>

<script>
  // import posts saved JSON data
  // import posts from '~/posts.json'

  import axios from 'axios'
  export default {
    validate ({ params }) {
      // return /^\d+$/.test(params.id)
      return true
    },
    async asyncData ({ params }, callback) {
      const { data } = await axios.get("http://localhost:4000/" + params.slug)
      // const { data } = await axios.get(`http://localhost:4000/${+params.slug}`)
      const product = JSON.parse(data).results[0]
      console.log(product)
      if (product) {
        callback(null, { product })
      } else {
        callback({ statusCode: 404, message: 'Post not found' })
      }
    }
  }
</script>
