<template>
  <div class="header">
    <div>
      <div>
        Giriş yapıldı mı :
        <span v-if="loggedIn">Evet</span>
        <span v-else>Hayır</span>
      </div>
      <button class="btn btn-secondary" @click="signOut">Çıkış Yap</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      loggedIn: false,
    };
  },
  created() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.loggedIn = true;
      } else {
        this.loggedIn = false;
      }
    });
  },
  methods: {
    async signOut() {
      try {
        const data = await firebase.auth().signOut();
        console.log(data);
        this.$router.replace({ name: "Login" });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.header {
  display: flex;
  justify-content: flex-end;
}
</style>