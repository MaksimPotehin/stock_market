import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home.vue'
import SignIn from '@/components/auth/SignIn'
import SignUp from '@/components/auth/SignUp'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stocks',
    name: 'Stocks',
    component: () => import('../pages/Stocks.vue')
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: () => import('../pages/Portfolio.vue')
  },
  {
    path: '/auth/',
    name: 'Auth',
    component: () => import('../pages/Auth.vue'),
    children: [
      {
        path: 'signIn',
        component: SignIn
      },
      {
        path: 'signUp',
        component: SignUp
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
