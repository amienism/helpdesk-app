export default [{
    path: '/auth',
    component: () => import('../layout/blankLayout.vue'),
    children: [{
        path: 'login',
        component: () => import('../pages/auth/login.vue')
    }]
}]