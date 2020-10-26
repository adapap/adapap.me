<template lang="pug">
Header
.text-primary Insert content here
</template>

<script>
import Header from '@/components/Header.vue'

import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
})
</script>

<style lang="sass">
@tailwind base
@tailwind components
@tailwind utilities

@import './styles/base.sass'
#app
  background: $primary
  min-height: 100vh
  width: 100%
</style>
