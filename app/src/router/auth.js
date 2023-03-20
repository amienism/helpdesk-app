export default [{
    path: '/auth',
    component: () => import('../layout/authLayout.vue'),
    children: [{
        path: 'login',
        component: () => import('../pages/auth/login.vue')
    },
    {
        path: 'register',
        component: () => import('../pages/auth/register.vue')
    }

]
}]