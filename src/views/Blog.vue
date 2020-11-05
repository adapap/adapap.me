<template lang="pug">
.blog-header.flex.justify-center.py-4
  .text-primary.text-5xl Blog
.blog-content.flex.flex-col
  .blog-posts-title.text-primary.text-2xl Latest Posts
  .blog-posts.flex
    .blog-post(v-for='post in posts')
      BlogPostCard(:post='post')
</template>

<script lang="ts">
import BlogPostCard from '@/components/BlogPostCard.vue'
import { useBlogPosts } from '@/composables/useBlogPosts'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Blog',
  components: {
    BlogPostCard,
  },
  setup() {
    return {
      ...useBlogPosts(),
    }
  },
})
</script>

<style lang="sass" scoped>
.blog-content
  margin: auto
  width: 80%

  .blog-posts
    flex-wrap: wrap
</style>
