import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: () => import('../views/Home.vue'),
      children: [
        { path: '/Page1', component: () => import('../components/Page1.vue') },
        { path: '/page2', component: () => import('../components/Page2.vue') }
      ]
    }
  ]
});
export default router;
