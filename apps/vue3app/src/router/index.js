import { createRouter, createWebHistory } from 'vue-router';
/* eslint-disable */
import DetailT from "../pages/DetailT.vue"

const routes = [
  {
    path: "/detail",
    name: 'detail1',
    component: DetailT
  },
  {
    path: '/app2/detail1',
    name: 'detail',
    component: DetailT
  },
];

const router = createRouter({
  history: createWebHistory(window.__POWERED_BY_QIANKUN__ ? '/app2/' : '/'),
  routes
})

export default router;