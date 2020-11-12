<template lang="pug">
.content.flex.justify-center.items-center
  form#login
    .text-3xl.text-center.text-primary.mb-2 Login
    //- label.input-label(for='#email') Email
    input.text-input(v-model='email' type='email' autocomplete='email' id='email' placeholder='Email')
    //- label.input-label(for='#password') Password
    input.text-input(v-model='password' type='password' autocomplete='password' placeholder='Password')
    .btn.login-btn.mt-6(@click='login(email, password)') Login
</template>

<script lang="ts">
import { useUserAuth } from '@/composables/UserAuth'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    const email = ref('')
    const password = ref('')
    const { login } = useUserAuth()
    return {
      email,
      login,
      password,
    }
  },
})
</script>

<style lang="sass">
@import '../styles/ui.sass'
.content
  min-height: calc(100vh - 4rem)

#login
  border: 1px solid $primary-light
  border-radius: 5px
  margin: auto
  padding: 2rem 10rem
  width: 35%

  .login-btn
    margin: 1rem auto
    max-width: 50%
</style>
