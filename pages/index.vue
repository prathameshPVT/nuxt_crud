<template>
  <div>
    <Login />
    <Signup />
  </div>
</template>

<script>

import Login from '../components/login.vue'
import Signup from '@/components/Signup.vue'

export default {
  components: {
    Login,
    Signup
  }
}
</script>
