<template lang="pug">
Header
router-view
</template>

<script>
import { defineAsyncComponent, defineComponent } from 'vue'

const AsyncHeader = defineAsyncComponent(() =>
  import('@/components/Header.vue')
)

export default defineComponent({
  name: 'App',
  components: {
    Header: AsyncHeader,
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
