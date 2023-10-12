import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/AppHome.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('@/views/AppPeople.vue')
  },
  {
    path: '/people/:id',
    name: 'Person',
    component: () => import('@/views/AppPerson.vue')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('@/views/AppSearch.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/AppNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
