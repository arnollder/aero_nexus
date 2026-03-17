import MainLayout from '@/components/layouts/MainLayout.vue';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/MainView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('@/views/NewsPosts.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/news/:id',
      name: 'post',
      component: () => import('@/views/NewsPost.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/UserCart.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/weather',
      name: 'weather',
      component: () => import('@/views/WeatherStack.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('@/views/UsersView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/users/:id',
      name: 'user',
      component: () => import('@/views/UserView.vue'),
      meta: {
        layout: MainLayout,
      },
    },
    {
      path: '/auth',
      name: 'auth',
      component: () => import('@/views/UserAuth.vue'),
      meta: {
        layout: MainLayout,
      },
    },
  ],
});

const isAuth = true;

router.beforeEach((to) => {
  if (to.name === 'cart' && !isAuth) {
    alert('Авторизуйтесь!');
    return {
      name: 'home',
    };
  }
});

export default router;
