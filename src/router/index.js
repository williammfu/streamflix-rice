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

router.beforeEach((to, from, next) => {
  let price = localStorage.getItem('credit')
  let movies = JSON.parse(localStorage.getItem('movies'))
  if(!price) {
    localStorage.setItem('credit', 100000)
  }
  if(movies == null) {
    localStorage.setItem('movies', JSON.stringify([]))
  }
  next()
})

export default router
