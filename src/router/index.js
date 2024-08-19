import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import ProductDetail from '../views/ProductDetail.vue'
import ShoppingCart from '../views/Cart.vue'
import CheckoutPage from '../views/Checkout.vue'
import OrderComplete from '../views/OrderComplete.vue'
import OrderHistory from '../views/OrderHistory.vue'

const routes = [
  { path: '/', name: 'HomePage', component: HomePage },
  { path: '/products', name: 'ProductList', component: ProductList },
  { path: '/product/:id', name: 'ProductDetail', component: ProductDetail },
  { path: '/cart', name: 'ShoppingCart', component: ShoppingCart },
  { path: '/checkout', name: 'CheckoutPage', component: CheckoutPage },
  { path: '/order-complete', name: 'OrderComplete', component: OrderComplete },
  { path: '/order-history', name: 'OrderHistory', component: OrderHistory },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router