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
    path: '/TextCenter',
    name: 'TextCenter',
    component: () => import('../views/TextCenter')
  },
  {
    path: '/design',
    name: 'design',
    component: () => import('../examples/vseditor/index')
  },
      {
    path: '/newpage',
    name: 'NewPage',
    component: () => import('../views/NewPage')
  },
  {
    path: '/personpage',
    name: 'PersonPage',
    component: () => import('../views/PersonPage')
  },
  {
    path: '/homepage2',
    name: 'HomePage2',
    component: () => import('../views/HomePage2')
  },
  {
    path: '/teamwork',
    name: 'TeamWork',
    component: () => import('../views/TeamWork')
  },
  {
    path: '/itemwork',
    name: 'ItemWork',
    component: () => import('../views/ItemWork')
  },
  {
    path: '/created',
    name: 'Created',
    component: () => import('../views/Created')
  },
  {
    path: '/participated',
    name: 'Participated',
    component: () => import('../views/Participated')
  },
  {
    path: '/recycle',
    name: 'Recycle',
    component: () => import('../views/Recycle')
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
