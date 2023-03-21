

  export default [{
    path: '/app',
    component: () => import('../layout/defaultLayout.vue'),
    children: [
        {
            path: 'home',
            name: "Home",
            component: () => import('../pages/app/home.vue')
        },
        {
            path: 'submit-issue',
            name: "Submit Issue",
            component: () => import('../pages/app/issue.vue')
        },
        {
            path: 'my-ticket',
            name: "My Ticket",
            component: () => import('../pages/app/ticket.vue')
        },
        {
            path: 'contact',
            name: "Contact us",
            component: () => import('../pages/app/contact.vue')
        },
    ]
  }]
