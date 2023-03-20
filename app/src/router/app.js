

  export default [{
    path: '/app',
    component: () => import('../layout/defaultLayout.vue'),
    children: [
        {
            path: 'home',
            component: () => import('../pages/app/home.vue')
        },
        {
            path: 'submit-issue',
            component: () => import('../pages/app/issue.vue')
        },
    ]
  }]
