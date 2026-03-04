import MainLayout from '@/components/layouts/MainLayout.vue';
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
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/posts/:id',
      name: 'post',
      component: () => import('@/components/NewsPost.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/components/UserCart.vue'),
      meta: {
        layout: MainLayout,
      },
    },
  ],
});

export default router;
