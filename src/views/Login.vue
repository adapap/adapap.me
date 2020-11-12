<template lang="pug">
form#login
  input.text-input(type='text' autocomplete='username' placeholder='Username')
  input.text-input(type='password' autocomplete='password' placeholder='Password')
  .btn.login-btn(@click='login') Login
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({})
</script>
