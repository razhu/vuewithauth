import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/admin/auth/Login'
import Home from '@/components/Home'
import Protected from '@/components/Protected'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login', 
      name: 'Login',
      component: Login
    },
    {
      path: '/protected', 
      name: 'Protected',
      component: Protected
    }
  ]
})
