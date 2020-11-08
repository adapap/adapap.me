<template lang="pug">
.blog-header.flex.justify-center.py-4
  .text-primary.text-5xl Blog
.blog-manager.flex
  .blog-content.flex.flex-col
    .blog-posts-title.text-primary.text-2xl Latest Posts
    .blog-posts.flex.flex-wrap
      .blog-post(v-for='post in posts')
        BlogPostCard(:post='post')
  .blog-options
    router-link.blog-post-new.btn(to='/blog/editor') New Post
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
@import '../styles/ui.sass'

.blog-content
  margin-left: 5vw
  width: 80vw

.blog-options
  margin: 0 auto
  width: auto

  .blog-posts
    flex-wrap: wrap
</style>
