<template>
  <div class="container">
    <div v-if="error" class="error">
      {{ error.message }}
    </div>
    <form @submit.prevent="submit">
      Register
      <div class="email">
        <input
          type="email"
          v-model="email"
          placeholder="Email"
          class="form-control"
        />
      </div>
      <div class="password mt-3">
        <input
          type="password"
          v-model="password"
          placeholder="password"
          class="form-control"
        />
      </div>
      <button class="btn btn-primary mt-3" type="submit">Register</button>
    </form>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export default {
  data() {
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
      
    async submit() {
      try {
        const user = firebase
          .auth()
          .createUserWithEmailAndPassword(this.email, this.password);
          console.log(user);
          this.$router.replace({name: "Home"})

      } catch (err) {
          console.log(err);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 600px;
}
</style>