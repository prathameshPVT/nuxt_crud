<template>
  <div style="background-color: black; height: 100vh; display: flex; align-items: center; justify-content: center;">
    <form style="background-color: white; padding: 20px;">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username"/>

      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password"/>

      <label for="mobile">Mobile Number:</label>
      <input type="text" id="mobile" v-model="mobile"/>

      <button type="submit" class="btn btn-primary">signup</button>
      <br>
      <nuxt-link to="/"><button type="submit" class="btn btn-primary">Login</button></nuxt-link>

    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      mobile: '',
      gender: ''
    }
  },
  methods: {
    submitForm() {
      console.log(this.username, this.password, this.mobile, this.gender)
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

label, input[type="text"], input[type="password"] {
  margin: 10px 0;
  width: 200px;
}

input[type="radio"] {
  margin-right: 10px;
}
</style>
