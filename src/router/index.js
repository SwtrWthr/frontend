import Vue from 'vue'
import VueRouter from 'vue-router'
import VueMeta from 'vue-meta'
import Home from '../components/Home'
import Site2 from '../components/Site2'
import Sec from '../components/Sec'
Vue.use(VueMeta)
Vue.use(VueRouter)
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/second',
      name: 'second',
      component: Site2
    },
    {
      path: '/is',
      name: 'security',
      component: Sec
    }
  ]
})
