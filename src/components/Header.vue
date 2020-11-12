<template lang="pug">
#header.flex.items-center.justify-between
  .flex.items-center
    router-link#logo.text-brand.p-4(to='/') ADAPAP.ME
    i.material-icons.text-primary.logout-btn(v-if='user' @click='logout') verified_user
  #links.flex.justify-self-end.items-center
    router-link.link(to='/resume'): span Resume
    router-link.link(to='/blog'): span Blog
    router-link.link(to='/portfolio'): span Portfolio
</template>

<script lang="ts">
import { useUserAuth } from '@/composables/UserAuth'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
  setup() {
    const { user, logout } = useUserAuth()
    return { user, logout }
  },
})
</script>

<style lang="sass" scoped>
@import '../styles/ui'

#header
  background: lighten($primary, 4%)
  height: 4rem
  width: 100%

  .logout-btn
    color: white
    cursor: pointer
    @extend .transition-fast
    &:hover
      color: lighten($error, 5%)

#links
  height: 100%

  .link
    align-items: center
    cursor: pointer
    display: flex
    font-size: 18px
    height: 100%
    margin: auto 0.75rem
    text-transform: uppercase
    transition: 0.1s ease-in-out
    @extend .text-primary
    &:hover
      font-size: 20px
      opacity: 1

#logo
  font-size: 32px
  letter-spacing: 12px
</style>
