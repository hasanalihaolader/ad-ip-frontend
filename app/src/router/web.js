import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'
import AdminTemplate from '../views/Admin'
import Dashboard from '../views/Admin/Dashboard'
import Ip from '../views/Admin/Ip'
import PageNotFound from '../views/404'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    alias: '/login',
    meta: {page_title: 'Login | IP Solution'},
  },
  {
    path: '/dashboard',
    component: AdminTemplate,
    children:[
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard,
        meta: {page_title: 'Dashboard | IP Solution', require_auth: true},
      },
      {
        path: 'ip',
        name: 'Ip',
        component: Ip,
        meta: {page_title: 'Dashboard | IP Solution', require_auth: true},
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: PageNotFound,
    meta: {page_title: '404 | IP Solution', require_auth: false},
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
