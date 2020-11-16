<template lang="pug">
.text-primary This is a post!
.text-secondary Post ID: {{ post.id }}
</template>

<script lang="ts">
import { BlogPost, useBlogPosts } from '@/composables/BlogPosts'

import { defineComponent, onBeforeMount, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
export default defineComponent({
  name: 'BlogPostReader',
  setup() {
    const post = ref(<BlogPost>{})
    const route = useRoute()
    const router = useRouter()
    const { loadPost } = useBlogPosts()

    onBeforeMount(async () => {
      const id = route.params.id as string
      const res = await loadPost(id)
      if (!res) {
        router.replace('/blog')
      } else {
        post.value = res
      }
    })

    return {
      post,
    }
  },
})
</script>
