import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UzbekistanView from '@/views/UzbekistanView.vue'
import News from '../views/News.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/UzbekistanView',
      name: 'UzbekistanView',
      component: UzbekistanView
    },
    {
      path: 'News',
      name: 'News',
      component: News
    },
   
  ]
})

export default router
