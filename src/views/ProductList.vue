<template>
  <div class="product-list">
    <h2>商品一覧</h2>
    <div v-for="product in products" :key="product.id" class="product-item">
      <h3>{{ product.name }}</h3>
      <p>¥{{ product.price }}</p>
      <button @click="addToCart(product)">カートに追加</button>
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