import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/home.vue'
import Plans from '@/components/plans.vue'
import Benefits from '@/components/benefits.vue'

Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/plans/comparasion',
    name: 'Plans',
    component: Plans
  },
  {
    path: '/plans/:id/benefits',
    name: 'Benefits',
    component: Benefits
  },
  {
    path: '*',
    name: 'error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
