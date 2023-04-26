import { createRouter, createWebHistory } from 'vue-router'

import Home from "../views/Home.vue";
import Dashboard from "../views/Dashboard/Dashboard.vue";
import Settings from "../views/Dashboard/Settings/Settings.vue";
import Params from "../views/Dashboard/Settings/Params.vue";
import Corrections from "../views/Dashboard/Settings/Corrections.vue"
import Fruits from "../views/Dashboard/Settings/Fruits.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,

  },
  {
    path: "/dashboard",
    name: "Dashboard",
    redirect: "/dashboard/settings",
    component: Dashboard,
    children: [
      {
        path: "/dashboard/settings",
        name: "Beállítások",
        redirect: "/dashboard/settings/params",
        component: Settings,
        children: [
          {
            path: "/dashboard/settings/params",
            name: "Paraméterek",
            component: Params,
          },
          {
            path: "/dashboard/settings/fruits",
            name: "Gyümölcsök",
            component: Fruits,
          },
          {
            path: "/dashboard/settings/corrections",
            name: "Korrekciók",
            component: Corrections,
          },
        ],
      },
    ],

    meta: {
      needsAuth: false
    }

  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.needsAuth) {
    next("/login")
  } else {
    next();
  }
});

export default router;
