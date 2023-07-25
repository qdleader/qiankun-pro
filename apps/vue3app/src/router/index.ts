import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Detail from "../pages/detail.vue"

const routes: RouteRecordRaw[] = [
  {
    path: "/detail",
    component: Detail
  }
];

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/app2/' : '/'),
  routes
})

export default router;