import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/auth/signUp'
import Signin from '@/components/auth/signIn'
import Homepage from '@/components/homePage'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homepage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/signin',
      name: 'Signin',
      component: Signin
    }
  ],
  mode: 'history'
})
