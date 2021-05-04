import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Logo from '@/components/Logo'
import About from '@/components/About'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/logo',
      name: 'Logo',
      component: Logo
    },
    {
      path: '/about',
      name: 'About',
      component: About
    }
  ]
})
