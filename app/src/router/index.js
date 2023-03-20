import { createRouter, createWebHistory } from 'vue-router'
import authRouter from './auth'

const routes = [
  {
    path: '/app',
    component: () => import('../layout/defaultLayout.vue'),
    children: [
        {
            path: 'home',
            component: () => import('../pages/app/home.vue')
        }
    ]
  },
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