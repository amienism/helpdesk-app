export default [
    {
        path: '/admin/dashboard',
        component: () => import('../layout/defaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'Dashboard',
                component: () => import('../pages/admin/dashboard.vue')
            },
        ]
    },
    {
        path: '/admin/tickets',
        component: () => import('../layout/defaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'Tickets',
                component: () => import('../pages/admin/ticket/tickets.vue')
            },
        ]
    },
    {
        path: '/admin/master-data',
        component: () => import('../layout/defaultLayout.vue'),
        children: [
            {
                path: 'master',
                name: 'Master Data',
                component: () => import('../pages/admin/master/master_data.vue')
            },
            {
                path: 'issue-type',
                name: 'Issue Type',
                component: () => import('../pages/admin/master/issue_type.vue')
            },
            {
                path: 'issue-priority',
                name: 'Issue Priority',
                component: () => import('../pages/admin/master/issue_priority.vue')
            },
            {
                path: 'ticket-status',
                name: 'Ticket Status',
                component: () => import('../pages/admin/master/ticket_status.vue')
            },
        ]
    },
    {
        path: '/admin/user-management',
        component: () => import('../layout/defaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'User Management',
                component: () => import('../pages/admin/user/user.vue')
            },
        ]
    },
    {
        path: '/admin/reports',
        component: () => import('../layout/defaultLayout.vue'),
        children: [
            {
                path: '',
                name: 'Reports',
                component: () => import('../pages/admin/report/reports.vue')
            },
        ]
    },
]