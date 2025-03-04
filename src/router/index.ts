import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'store',
      component: () => import('@/pages/StorePage.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/pages/CartPage.vue'),
    },
  ],
})

export default router
