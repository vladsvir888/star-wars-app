import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/AppHome.vue')
  },
  {
    path: '/people',
    name: 'People',
    component: () => import('@/views/AppPeople.vue')
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
  history: createWebHashHistory(),
  routes
})

export default router
