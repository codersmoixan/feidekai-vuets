import { createRouter, createWebHistory } from "vue-router";

export const routesOptions = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/HomePage/index"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("@/views/HomePage/index"),
  },
  {
    path: "/account",
    name: "account",
    component: () => import("@/views/Account"),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routesOptions,
});

export default router;
