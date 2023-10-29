import { createRouter, createWebHistory } from 'vue-router'
import AppHome from '@/views/AppHome.vue'
import AppBaseLayoutVue from '@/layout/AppBaseLayout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: AppHome
  },
  {
    path: '/people',
    name: 'People',
    meta: {
      layout: AppBaseLayoutVue
    },
    component: () => import('@/views/AppPeople.vue')
  },
  {
    path: '/people/:id',
    name: 'Person',
    meta: {
      layout: AppBaseLayoutVue
    },
    component: () => import('@/views/AppPerson.vue')
  },
  {
    path: '/search',
    name: 'Search',
    meta: {
      layout: AppBaseLayoutVue
    },
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
