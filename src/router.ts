import { createRouter, createWebHistory } from 'vue-router'

import Blog from '@/views/Blog.vue'
import BlogEditor from '@/views/BlogEditor.vue'
import BlogProfile from '@/views/BlogProfile.vue'
import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'

const blogRoutes = [
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
    component: BlogProfile,
    name: 'blog-profile',
    path: '/profile',
  },
]

const routes = [
  ...blogRoutes,
  {
    component: Home,
    name: 'home',
    path: '/',
  },
  {
    component: Login,
    name: 'login',
    path: '/login',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})

export default router
