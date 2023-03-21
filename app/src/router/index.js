import { createRouter, createWebHistory } from 'vue-router'
import appRouter from './app'
import authRouter from './auth'
import adminRouter from './admin'

const routes = [
  {
    path: '/',
    redirect: '/auth/login'
  },
  ...appRouter,
  ...authRouter,
  ...adminRouter
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