import { createWebHistory, createRouter } from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Blog from '@/components/Blog'

const routes = [
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
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
