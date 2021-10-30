<template>
 <div class="container">
    <h3>Login</h3>
  <form @submit.prevent="pressed">
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
      <button class="btn btn-primary mt-3" type="submit">Login</button>
    </form>
    <div class="error" v-if="error">{{error.message}}</div>
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
      error: ""
    };
  },
  methods: {
    pressed() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(data => {
          console.log(data);
          this.$router.replace({ name: "Home" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>


<style scoped>
.container {
  max-width: 600px;
}
</style>