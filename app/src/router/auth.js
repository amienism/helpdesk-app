export default [
  {
    path: "/auth",
    component: () => import("../layout/authLayout.vue"),
    children: [
      {
        path: "login",
        component: () => import("../pages/auth/login.vue"),
      },
      {
        path: "register",
        component: () => import("../pages/auth/register.vue"),
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("../layout/blankLayout.vue"),
    children: [
        {
            path: 'verification/:token',
            component: () => import("../pages/auth/verification.vue"),
        }
    ]
  },
];
