import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../layout'
import Home from '../views/Home.vue'
import Recommend from '../views/Recommend.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Layout,
    redirect:'/home',
    children: [
      {
        path: 'home',
        name: 'Home',
        component: Home
      },
      {
        path: 'recommend',
        name: 'Hecommend',
        component: Recommend
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
