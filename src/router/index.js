import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/homepage',
    name: 'HomePage',
    component: () => import('../views/HomePage')
  },
  {
    path: '/',
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
  {
    path: '/itempage2',
    name: 'ItemPage2',
    component: () => import('../views/ItemPage2')
  },
  {
    path: '/TextEditor',
    name: 'TextEditor',
    component: () => import('../views/TextEditor')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../examples/vseditor/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
