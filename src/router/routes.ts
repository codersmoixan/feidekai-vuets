import { routesOptions } from "@/router/index";
import type { RouteRecordRaw } from "vue-router";

type RoutesKey = "home" | "blog" | "cart" | "catalog" | "account" | string;

function generateRoutes(options: RouteRecordRaw[]) {
  const routes: Record<RoutesKey, string> = {};

  for (const key of options) {
    routes[key.name as RoutesKey] = key.path;
  }

  return routes;
}

export default generateRoutes(routesOptions);
