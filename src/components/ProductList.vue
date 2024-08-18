<template>
    <div class="product-list">
      <h2>商品一覧</h2>
      <input v-model="searchQuery" placeholder="商品を検索">
      <div class="product-grid">
        <div v-for="product in filteredProducts" :key="product.id" class="product-item">
          <img :src="product.image" :alt="product.name">
          <h3>{{ product.name }}</h3>
          <p>¥{{ product.price }}</p>
          <p>{{ product.description }}</p>
          <button @click="addToCart(product)">カートに追加</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProductList',
    data() {
      return {
        searchQuery: '',
        products: [
          { id: 1, name: '商品1', price: 2200, description: '商品1の説明', image: 'path/to/image1.jpg' },
          { id: 2, name: '商品2', price: 3300, description: '商品2の説明', image: 'path/to/image2.jpg' },
          // 他の商品も追加
        ]
      }
    },
    computed: {
      filteredProducts() {
        return this.products.filter(product =>
          product.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }
    },
    methods: {
      addToCart(product) {
        // カートに商品を追加する処理
        console.log(`${product.name}をカートに追加しました`)
      }
    }
  }
  </script>