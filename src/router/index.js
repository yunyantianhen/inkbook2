import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../views/HomePage')
  },
  {
    path: '/register',
    name: 'RegisterPage',
    component: () => import('../views/Register')
  },
  {
    path: '/logonpage',
    name: 'LogonPage',
    component: () => import('../views/LogonPage')
  },
  {
    path: '/teampage',
    name: 'TeamPage',
    component: () => import('../views/TeamPage')
  },
  {
    path: '/itempage',
    name: 'ItemPage',
    component: () => import('../views/ItemPage')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
