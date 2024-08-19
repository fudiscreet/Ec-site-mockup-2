import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { id: 1, name: '商品1', price: 2200, description: '商品1の説明', image: 'https://via.placeholder.com/150' },
      { id: 2, name: '商品2', price: 3300, description: '商品2の説明', image: 'https://via.placeholder.com/150' },
      { id: 3, name: '商品3', price: 4400, description: '商品3の説明', image: 'https://via.placeholder.com/150' },
    ],
    cart: [],
    orders: []
  },
  mutations: {
    addToCart(state, product) {
      const existingProduct = state.cart.find(item => item.id === product.id)
      if (existingProduct) {
        existingProduct.quantity++
      } else {
        state.cart.push({ ...product, quantity: 1 })
      }
    },
    removeFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    clearCart(state) {
      state.cart = []
    },
    addOrder(state, order) {
      state.orders.push(order)
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product)
    },
    removeFromCart({ commit }, productId) {
      commit('removeFromCart', productId)
    },
    clearCart({ commit }) {
      commit('clearCart')
    },
    placeOrder({ commit, state }, orderDetails) {
      const order = {
        id: 'ORD-' + Date.now(),
        items: [...state.cart],
        total: state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
        ...orderDetails
      }
      commit('addOrder', order)
      commit('clearCart')
      return order
    }
  },
  getters: {
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + item.price * item.quantity, 0)
    }
  }
})