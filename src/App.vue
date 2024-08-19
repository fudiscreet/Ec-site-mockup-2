<template>
  <div id="app">
    <header>
      <h1>{{ siteName }}</h1>
      <nav>
        <router-link to="/">ホーム</router-link> |
        <router-link to="/products">商品一覧</router-link> |
        <router-link to="/order-history">注文履歴</router-link> |
        <router-link to="/cart">カート ({{ cartItemCount }})</router-link>
      </nav>
    </header>
    <p>現在のルート: {{ $route.path }}</p>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      siteName: '{ECサイト名}'
    }
  },
  computed: {
    ...mapState(['cart']),
    cartItemCount() {
      return this.cart.length
    }
  }
}
</script>