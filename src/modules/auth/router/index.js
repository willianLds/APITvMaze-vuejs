const series = () => import('./../views/Series.vue')
const epsodios = () => import('./../views/Epsodios.vue')

export default [
  { path: '/series', component: series },
  { path: '/epsodios/:id', component: epsodios }
]
