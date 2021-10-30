import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyCRsU2W3SdT6yslZszFN3EFd9LyAXukxLc",
  authDomain: "auth-project-b61ba.firebaseapp.com",
  projectId: "auth-project-b61ba",
  storageBucket: "auth-project-b61ba.appspot.com",
  messagingSenderId: "409054814264",
  appId: "1:409054814264:web:962a814438ca3d059646cd"
};

firebase.initializeApp(firebaseConfig);



const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
