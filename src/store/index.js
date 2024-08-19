import { createStore } from 'vuex'

export default createStore({
  state: {
    products: [
      { id: 1, name: '商品1', price: 1000 },
      { id: 2, name: '商品2', price: 2000 },
      { id: 3, name: '商品3', price: 3000 },
    ],
    cart: []
  },
  mutations: {
    addToCart(state, product) {
      state.cart.push(product)
    }
  },
  actions: {
    addToCart({ commit }, product) {
      commit('addToCart', product)
    }
  },
  getters: {
    cartTotal: state => {
      return state.cart.reduce((total, item) => total + item.price, 0)
    }
  }
})