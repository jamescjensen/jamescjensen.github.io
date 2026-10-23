/**
 * router/index.ts
 *
 * Manual routes for ./src/pages/*.vue
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'
import Index from '@/pages/index.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Index,
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/pages/ErrorNotFound.vue'),
    },
  ],
})

export default router
