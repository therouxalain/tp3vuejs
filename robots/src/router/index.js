import { createRouter, createWebHistory } from 'vue-router'
import AjoutView from '../views/AjoutView.vue'
import Accueil from '../views/Accueil.vue'

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil
  },
  {
    path: '/ajout',
    name: 'ajout',
    component: AjoutView
  },
  {
    path: '/inventaire',
    name: 'inventaire',
    component: () => import(/* webpackChunkName: "products" */ '../views/ProductsView.vue')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import(/* webpackChunkName: "edit" */ '../views/EditView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
