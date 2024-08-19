<template>
    <div class="cart">
      <h2>ショッピングカート</h2>
      <div v-if="cart.length === 0">
        <p>カートは空です。</p>
      </div>
      <div v-else>
        <div v-for="item in cart" :key="item.id" class="cart-item">
          <img :src="item.image" :alt="item.name">
          <h3>{{ item.name }}</h3>
          <p>¥{{ item.price }} × {{ item.quantity }}</p>
          <button @click="removeFromCart(item.id)">削除</button>
        </div>
        <p>合計: ¥{{ cartTotal }}</p>
        <router-link to="/checkout" class="btn">レジに進む</router-link>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  
  export default {
    name: 'ShoppingCart',
    computed: {
      ...mapState(['cart']),
      ...mapGetters(['cartTotal'])
    },
    methods: {
      ...mapActions(['removeFromCart'])
    }
  }
  </script>