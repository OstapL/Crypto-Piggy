import Vue from 'vue'
import Router from 'vue-router'
import Signup from '@/components/auth/singUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/'
    },
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    }
  ],
  mode: 'history'
})
