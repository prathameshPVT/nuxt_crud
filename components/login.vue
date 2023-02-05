<template>
  <div class="container">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="username">Username:</label>
        <input
          type="text"
          class="form-control"
          id="username"
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
      <nuxt-link to="/"><button type="submit" class="btn btn-primary">Login</button></nuxt-link>
      <br>
      <nuxt-link to="signup" @click.prevent="toggleShowLogin"><button type="submit" class="btn btn-primary">signup</button></nuxt-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    submitForm() {
      console.log(this.username, this.password);
      // Add your authentication logic here
    }
  }
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

