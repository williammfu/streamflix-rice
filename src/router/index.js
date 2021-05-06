import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/Home'
import Details from '@/components/Details'
import NotFound from '@/components/NotFound'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:id',
    name: 'MovieDetails',
    component: Details,
  },
  {
    path: '/:catchAll(.*)',
    name: 'Not Found',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
