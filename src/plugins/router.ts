// import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import Settings from "@/views/Settings.vue";
import About from "@/views/About.vue";

declare module "vue-router" {
  interface RouteMeta {
    /** Types for route metadata. */
    example?: boolean;
  }
}

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    component: Home,
    name: "Home",
  },
  {
    path: "/settings",
    component: Settings,
    name: "Settings",
  },
  {
    path: "/about",
    component: About,
    name: "About",
  },
  {
    path: "/:catchAll(.*)",
    redirect: { name: "Home" },
  },
];

// const router = createRouter({ history: createWebHashHistory(), routes });
const router = createRouter({ history: createWebHistory(), routes });

export default router;
