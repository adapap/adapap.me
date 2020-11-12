<template lang="pug">
.blog-header.flex.justify-center.py-4
  .text-primary.text-5xl Blog
.blog-manager.flex
  .blog-content.flex.flex-col
    .blog-posts-title.text-primary.text-2xl Latest Posts
    .blog-posts.flex.flex-wrap
      .blog-post(v-for='post in posts')
        BlogPostCard(:post='post')
  .blog-options.flex.flex-col
    router-link.blog-post-new.btn(v-if='user' to='/blog/editor') Create Post
    router-link.blog-profile.btn(v-if='user' to='/profile') Profile
</template>

<script lang="ts">
import BlogPostCard from '@/components/BlogPostCard.vue'
import { useBlogPosts } from '@/composables/BlogPosts'
import { useUserAuth } from '@/composables/UserAuth'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Blog',
  components: {
    BlogPostCard,
  },
  setup() {
    const { user } = useUserAuth()
    return {
      ...useBlogPosts(),
      user,
    }
  },
})
</script>

<style lang="sass" scoped>
.blog-content
  margin-left: 5vw
  width: 80vw

.blog-options
  margin: 0 auto
  width: auto

  .btn
    margin: 0.25rem 0

  .blog-posts
    flex-wrap: wrap
</style>
