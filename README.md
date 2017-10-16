# Custom Routes with Nuxt.js

Routing that uses Slug instead of the default id in nuxt examples.

- To access url.com/blog/slug
  - create a folder blog
  - ```nest a "_slug" folder```
  - add a index.vue to render individual blog posts

- To access url.com/blog
  - add index.vue on the same level as ```_slug```

## Process Env modules
- You need to rerun ```npm run dev``` whenever you add a new env variable.
