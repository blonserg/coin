import Vue from "vue"
import Router from "vue-router"

import PortfelPage from "~/pages/portfel"
import ArticlePage from "~/pages/article"
import RecoveryPage from "~/pages/recovery"
import EventPage from "~/pages/event"

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
      },
      {
        path: "/article/:slug",
        component: ArticlePage
      },
      {
        path: "/recovery/:recoveryKey",
        component: RecoveryPage
      },
      {
        path: "/event/:slug",
        component: EventPage
      }
    ]
  })
}
