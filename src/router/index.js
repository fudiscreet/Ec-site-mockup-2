import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import Cart from '../views/Cart.vue'
import OrderHistory from '../views/OrderHistory.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/products', name: 'ProductList', component: ProductList },
  { path: '/cart', name: 'Cart', component: Cart },
  { path: '/order-history', name: 'OrderHistory', component: OrderHistory },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router