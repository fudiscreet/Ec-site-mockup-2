<template>
    <div v-if="product" class="product-detail">
      <img :src="product.image" :alt="product.name">
      <h2>{{ product.name }}</h2>
      <p>¥{{ product.price }}</p>
      <p>{{ product.description }}</p>
      <button @click="addToCart(product)">カートに追加</button>
    </div>
  </template>
  
  <script>
  import { mapState, mapActions } from 'vuex'
  
  export default {
    name: 'ProductDetail',
    computed: {
      ...mapState(['products']),
      product() {
        return this.products.find(p => p.id === parseInt(this.$route.params.id))
      }
    },
    methods: {
      ...mapActions(['addToCart'])
    }
  }
  </script>