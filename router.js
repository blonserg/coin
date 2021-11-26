import Vue from "vue"
import Router from "vue-router"

import PortfelPage from "~/pages/portfel"

Vue.use(Router)

export function createRouter (ssrContext, createDefaultRouter, routerOptions, config) {
  const options = routerOptions || createDefaultRouter(ssrContext, config).options;

  return new Router({
    ...options,
    routes: [
      ...options.routes,
      {
        path: "/portfel/:slug",
        component: PortfelPage
      }
    ]
  })
}
