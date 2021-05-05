import { createWebHistory, createRouter } from 'vue-router'
import Home from '@/components/Home'
import Blog from '@/components/Blog'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
