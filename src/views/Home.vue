<template lang="pug">
Header
p This will be the future of my website.
</template>

<script lang="ts">
import Header from '@components/Header.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    Header,
  },
})
</script>
