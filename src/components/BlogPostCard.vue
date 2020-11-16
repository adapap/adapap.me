<template lang="pug">
.blog-post-card(@click='loadPost')
  .blog-post-meta.p-2.flex.items-center
    //- img.blog-post-avatar(:src='avatar' width='48px' height='48px')
    .blog-post-desc
      .blog-post-title.text-primary.truncate {{ post.title }}
      .blog-post-created.text-secondary {{ post.author }} · {{ formatPostCreated(post) }}
  img(v-if='post.image' :src='post.image')
  .blog-post-image-default(v-else)
  .blog-post-footer.flex.justify-between.items-center.p-2
    .blog-post-tags.flex.flex-wrap
      .blog-post-tag.mx-1.p-1.text-primary(v-for='tag in post.tags') {{ tag }}
    .blog-post-likes.flex.items-center
      i.material-icons favorite
      .text-secondary.ml-1 {{ post.likes }}
</template>

<script lang="ts">
import { BlogPost, useBlogPosts } from '@/composables/BlogPosts'

import { defineComponent, PropType, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'BlogPostCard',
  props: {
    post: {
      type: Object as PropType<BlogPost>,
      required: true,
    },
  },
  setup(props) {
    const { formatPostCreated } = useBlogPosts()
    const router = useRouter()
    // const avatar = ref('/default/avatar.jpg')

    return {
      // avatar,
      formatPostCreated,
      router,
    }
  },
  computed: {
    slug(): string {
      return `/blog/post/${this.post.id}`
    },
  },
  methods: {
    loadPost(): void {
      this.router.push(this.slug)
    },
  },
})
</script>

<style lang="sass" scoped>
@import '../styles/ui.sass'

.blog-post-card
  background: $primary-light
  border-radius: 2px
  cursor: pointer
  margin-bottom: 1rem
  margin-right: 0.5rem
  max-width: 480px
  min-width: 320px
  overflow: hidden
  text-decoration: none
  transition: 0.2s ease-in-out
  width: 25vw

  &:hover
    background: darken($primary-light, 4%)

  .blog-post-avatar
    border-radius: 50%
    height: 48px
    width: 48px

  .blog-post-image-default
    background: rgb(94, 0, 138)
    background: linear-gradient(24deg, rgba(94, 0, 138, 1) 0%, rgba(118, 6, 187, 1) 32%, rgba(197, 64, 236, 1) 100%)
    height: 240px
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
