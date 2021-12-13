import Vue from 'vue'
import VueRouter from 'vue-router'
import profile from '../views/profile.vue'
 import forget from '../views/forget.vue'
import Navbar from '../components/Navbar'
 import Register from '../views/Register.vue'
 import login from '../views/login.vue'
 import upload from '../views/upload.vue'
 import Home from '../views/Home.vue'
 import verification from '../views/verification.vue'
//  import glry from '../views/glry.vue'
 import Gallery from '../views/Gallery.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/verification',
    name: 'verification',
    component: verification
  },
   {
    path: '/Navbar',
    name: 'Navbar',
    component: Navbar
  },
  // {
  //   path: '/glry',
  //   name: 'glry',
  //   component: glry
  // },
  {
    path: '/gallery',
    name: 'Gallery',
    component: Gallery
  },
  {
    path: '/forget',
    name: 'forget',
    component: forget
  },
  {
    path: '/upload',
    name: 'upload',
    component: upload
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: login
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
