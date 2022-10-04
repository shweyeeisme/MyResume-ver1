import Vue from 'vue'
import VueRouter from 'vue-router'
import Projects from '@/components/Projects.vue'
import Home from '@/components/Home.vue'
import Others from '@/components/Others.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Projects',
    name: 'Projects',
    component: Projects
  },
  {
    path: '/Others',
    name: 'Others',
    component: Others
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
