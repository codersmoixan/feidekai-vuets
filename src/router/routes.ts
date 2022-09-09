import { routesOptions } from "@/router/index";
import type { ObjectType } from "@/utils/theme/utils/types";
import type { RouteRecordRaw } from "vue-router";

function generateRoutes(options: RouteRecordRaw[]) {
  const routes: ObjectType = {};

  for (const key of options) {
    routes[key.name as any] = key.path;
  }

  return routes;
}

export default generateRoutes(routesOptions);
