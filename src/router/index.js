import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import search from '../views/Search.vue'
// import locations from '../views/Locations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/search/:filter',
    name: 'Search',
    component: search
  }
  // {
  //   path: '/search/:location',
  //   name: 'Search',
  //   component: search
  // }
]

const router = new VueRouter({
  routes
})

export default router
