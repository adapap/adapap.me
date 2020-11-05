<template lang="pug">
.blog-post-card(@click='loadPost')
  .blog-post-meta.p-2
    .blog-post-title.text-primary.truncate {{ post.title }}
    .blog-post-created.text-secondary {{ post.author }} · {{ formatPostCreated(post) }}
  img(v-if='post.image' :src='post.image')
  .blog-post-image-default(v-else)
  .blog-post-footer.flex.justify-between.items-center.p-2
    .blog-post-tags.flex.flex-wrap
      .blog-post-tag.mx-1.p-1.text-primary(v-for='tag in post.tags') {{ tag }}
    .blog-post-likes.flex
      i.material-icons favorite
      .text-secondary.ml-1 {{ post.likes }}
</template>

<script lang="ts">
import { useBlogPosts } from '@/composables/useBlogPosts'
import { BlogPost } from '@/scripts/BlogPost'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BlogPostCard',
  props: {
    post: {
      type: Object as () => BlogPost,
      required: true,
    },
  },
  setup() {
    const { formatPostCreated } = useBlogPosts()
    return {
      formatPostCreated,
    }
  },
  computed: {
    slug(): string {
      return `/blog/post/${this.post.postId}`
    },
  },
  methods: {
    loadPost(): void {
      this.$router.push(this.slug)
    },
  },
})
</script>

<style lang="sass" scoped>
@import '../styles/base.sass'

.blog-post-card
  background: $primary-light
  border-radius: 2px
  cursor: pointer
  margin-bottom: 1rem
  margin-right: 0.5rem
  text-decoration: none
  transition: 0.2s ease-in-out
  width: 480px

  &:hover
    background: darken($primary-light, 4%)

  .blog-post-image-default
    background: rgb(94, 0, 138)
    background: linear-gradient(24deg, rgba(94, 0, 138, 1) 0%, rgba(118, 6, 187, 1) 32%, rgba(197, 64, 236, 1) 100%)
    height: 320px
    width: 480px

  .blog-post-likes
    color: white

    i
      font-size: 20px

  .blog-post-tag
    align-items: center
    background: lighten($primary-light, 5%)
    border-radius: 0.125rem
    display: flex
    font-size: 0.85rem
    height: 1.5rem
    padding: 0.25rem
    text-transform: uppercase

  .blog-post-title
    font-size: 1.25rem
</style>
