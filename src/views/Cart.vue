<template>
  <div class="cart">
    <h2>カート</h2>
    <div v-if="cart.length === 0">
      <p>カートは空です。</p>
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.id">
        <p>{{ item.name }} - ¥{{ item.price }}</p>
      </div>
      <p>合計: ¥{{ cartTotal }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  name: 'CartPage',
  computed: {
    ...mapState(['cart']),
    ...mapGetters(['cartTotal'])
  }
}
</script>