<template>
    <div class="product-list">
      <h2>商品一覧</h2>
      <div class="products">
        <div v-for="product in products" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>¥{{ product.price }}</p>
          <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">詳細を見る</router-link>
          <button @click="addToCart(product)">カートに追加</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    name: 'ProductList',
    computed: {
      ...mapState(['products'])
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  }
  </script>