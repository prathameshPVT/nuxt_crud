<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="usernames">Username:</label>
        <input
          type="text"
          class="form-control"
          id="usernames"
          v-model="username"
        />
      </div>
      <div class="form-group">
        <label for="pwd">Password:</label>
        <input
          type="password"
          class="form-control"
          id="pwd"
          v-model="password"
        />
      </div>
      <br>
        <button type="submit" class="btn btn-primary">Login</button>
      <br>
      <nuxt-link to="signup" @click.prevent="toggleShowLogin">
        <button type="submit" class="btn btn-primary">signup</button>
      </nuxt-link>
    </form>
  </div>
</template>

<script>

import axios from '@nuxtjs/axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submitForm() {
      console.log(878889, { username: this.username, password: this.password });
      let new_dict = { username: this.username, password: this.password };
      console.log(12, new_dict);

      try {
        const response = await this.$axios.post('http://127.0.0.1:8000/login', new_dict);
        console.log('4545', response.data);
        console.log('4545', response.data.success);
        if (response.data.success) {
        console.log("login successful")
        this.$notify({
          group: 'notifications',
          title: 'Success',
          text: 'Login successful',
          type: 'success'
        });
        } else {
          console.log("login unsuccessful")
          this.$notify({
            group: 'notifications',
            title: 'Error',
            text: 'Login unsuccessful',
            type: 'error'
          });
        }

      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: black;
}

form {
  width: 400px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
  background-color: white;
}
</style>
