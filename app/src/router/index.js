import { createRouter, createWebHistory } from 'vue-router'
import appRouter from './app'
import authRouter from './auth'

const routes = [
  ...appRouter,
  ...authRouter
]


const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
})

export default router;