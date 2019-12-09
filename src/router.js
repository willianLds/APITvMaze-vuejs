import Vue from 'vue'
import Router from 'vue-router'
import authRoutes from '@/modules/auth/router' // @ aponta para diretorio padrão do src

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    ...authRoutes,
    { path: '', redirect: '/series' }
  ]
})
