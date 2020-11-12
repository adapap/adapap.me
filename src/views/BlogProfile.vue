<template lang="pug">
#profile
  .text-3xl.text-primary Profile
  label.input-label(for='username') Username
  input.text-input(v-model='username' type='text')
  label.input-label(for='avatar') Avatar
  .text-secondary To Do: Avatar File Upload
  .btn.mt-2.btn-save(@click='updateProfile(profile)') Save
</template>

<script lang="ts">
import { useUserAuth } from '@/composables/UserAuth'

import { computed, defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Profile',
  setup() {
    const router = useRouter()
    const { isLoggedIn, updateProfile, user } = useUserAuth()

    const username = ref('')
    const avatar = ref('')

    const profile = computed(() => {
      return {
        displayName: username.value,
        photoURL: avatar.value,
      }
    })

    onMounted(() => {
      if (!isLoggedIn) {
        router.push('/login')
      }
      username.value = user.value?.displayName || ''
    })

    return {
      avatar,
      profile,
      updateProfile,
      username,
    }
  },
})
</script>

<style lang="sass">
#profile
  margin: 2rem auto
  width: 25%

  .btn-save
    width: 25%
</style>
