import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductList from '../views/ProductList.vue'
import Cart from '../views/Cart.vue'
import OrderHistory from '../views/OrderHistory.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: Home,
    meta: { title: 'ホーム' }
  },
  { 
    path: '/products', 
    name: 'ProductList', 
    component: ProductList,
    meta: { title: '商品一覧' }
  },
  { 
    path: '/cart', 
    name: 'Cart', 
    component: Cart,
    meta: { title: 'カート' }
  },
  { 
    path: '/order-history', 
    name: 'OrderHistory', 
    component: OrderHistory,
    meta: { title: '注文履歴' }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(`Navigating to: ${to.meta.title}`)
  next()
})

export default router