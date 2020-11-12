<template lang="pug">
.text-primary Post ID: {{ post.id }}
</template>

<script lang="ts">
import { BlogPost } from '@/scripts/blog/Blog.ts'

import { defineComponent, PropType } from 'vue'
export default defineComponent({
  props: {
    post: Object as PropType<BlogPost>,
  },
  setup(props) {
    return {
      props,
    }
  },
})
</script>
