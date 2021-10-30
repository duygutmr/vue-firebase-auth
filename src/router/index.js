import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '@/views/Login'
import Register from '@/views/Register'

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  // const requiresAuth = to.matched.some(record = meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if(to.meta.requiresAuth && !isAuthenticated) {
    next("Login")
  }  else {
    next()
  }
})

export default router
