<template lang="pug">
#header.flex.items-center.justify-between
  #logo.text-brand.p-4 ADAPAP.ME
  #links.flex.justify-end.items-center
    .link: span Resume
    .link: span Blog
    .link: span Portfolio
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Header',
})
</script>

<style lang="sass" scoped>
@import '../styles/base'
#header
  background: lighten($primary, 4%)
  height: 4rem
  width: 100%

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
