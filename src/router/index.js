import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import episodes from '../views/Episodes.vue'
import locations from '../views/Locations.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: episodes
  },
  {
    path: '/locations',
    name: 'Locations',
    component: locations

  }
]

const router = new VueRouter({
  routes
})

export default router
