import { createRouter, createWebHistory } from 'vue-router'

import Blog from '@/views/Blog.vue'
import BlogEditor from '@/views/BlogEditor.vue'
import Home from '@/views/Home.vue'

const routes = [
  {
    component: Blog,
    name: 'blog',
    path: '/blog',
  },
  {
    component: BlogEditor,
    name: 'blog-editor',
    path: '/blog/editor',
  },
  {
    component: Home,
    name: 'home',
    path: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
