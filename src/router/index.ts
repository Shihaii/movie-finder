import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Details from '@/components/Details.vue'
import AddMovie from '@/components/AddMovie.vue'
import Results from '@/components/Results.vue'
import Home from '@/components/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/movie/:id',
      name: 'movie',
      component: Details
    },
    {
      path: '/addmovie',
      name: 'addmovie',
      component: AddMovie
    },
    {
      path: '/results/:title',
      name: 'results',
      component: Results
    }
  ]
})

export default router
