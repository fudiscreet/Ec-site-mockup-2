import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ProductList from '@/components/ProductList.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import ShoppingCart from '@/components/ShoppingCart.vue'
import Checkout from '@/components/Checkout.vue'

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/products', name: 'ProductList', component: ProductList },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail },
  { path: '/cart', name: 'ShoppingCart', component: ShoppingCart },
  { path: '/checkout', name: 'Checkout', component: Checkout },
  { path: '/order-complete', name: 'OrderComplete', component: OrderComplete },
  { path: '/order-history', name: 'OrderHistory', component: OrderHistory },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router