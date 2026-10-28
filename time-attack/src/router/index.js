import { createRouter, createWebHistory } from 'vue-router'
import GameBoard from '@/components/GameBoard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Board',
      component:  GameBoard,
    },
  ],
})

export default router
