import Vue from 'vue'
import Router from 'vue-router'
import AuthRequired from './utils/AuthRequired'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: () => import(/* webpackChunkName: "app" */ './views/app'),
    redirect: 'app/pages/product/data-list',
    beforeEnter: AuthRequired,
    children: [
      {
        path: 'app/pages',
        component: () => import(/* webpackChunkName: "pages" */ './views/app/pages'),
        redirect: '/app/pages/product',
        children: [
          {
            path: 'product',
            component: () => import(/* webpackChunkName : "product" */ './views/app/pages/product'),
            redirect: '/app/pages/product/data-list',
            children: [
              { path: 'data-list', component: () => import(/* webpackChunkName: "product" */ './views/app/pages/product/DataList') }
            ]
          }
        ]
      },
      {
        path: 'app/menu',
        component: () => import(/* webpackChunkName: "menu" */ './views/app/menu'),
        redirect: '/app/menu/types',
        children: [
          {
            path: 'types',
            component: () => import(/* webpackChunkName : "menu-types" */ './views/app/menu/Types'),
          },
          {
            path: 'levels',
            component: () => import(/* webpackChunkName : "menu-levels" */ './views/app/menu/levels'),
            redirect: '/app/menu/levels/third-level-1',
            children: [
              { path: 'third-level-1', component: () => import(/* webpackChunkName: "menu-levels" */ './views/app/menu/levels/Third-level-1') },
              { path: 'third-level-2', component: () => import(/* webpackChunkName: "menu-levels" */ './views/app/menu/levels/Third-level-2') },
              { path: 'third-level-3', component: () => import(/* webpackChunkName: "menu-levels" */ './views/app/menu/levels/Third-level-3') },
            ]
          },
        ]
      }
    ]
  },
  { path: '/error', component: () => import(/* webpackChunkName: "error" */ './views/Error') },
  {
    path: '/user',
    component: () => import(/* webpackChunkName: "user" */ './views/user'),
    redirect: '/user/login',
    children: [
      { path: 'login', component: () => import(/* webpackChunkName: "user" */ './views/user/Login') },
      { path: 'register', component: () => import(/* webpackChunkName: "user" */ './views/user/Register') },
      { path: 'forgot-password', component: () => import(/* webpackChunkName: "user" */ './views/user/ForgotPassword') }
    ]
  },
  { path: '*', component: () => import(/* webpackChunkName: "error" */ './views/Error') }
]

const router = new Router({
  linkActiveClass: 'active',
  routes,
  mode: 'history'
})

export default router
