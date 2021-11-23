import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Root from '../views/Root.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Root',
    component: Root
  },
]

const router = new VueRouter({
  scrollBehavior: function(to) {
    if(to.hash) {
      return {selector: to.hash}
    }else {
      return {x : 0, y: 0}
    }
  },
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
