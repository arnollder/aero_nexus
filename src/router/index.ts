import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainView.vue'),
    },
    {
      path: '/posts',
      name: 'posts',
      component: () => import('@/components/NewsPosts.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/components/UserCart.vue'),
    },
  ],
});

export default router;
