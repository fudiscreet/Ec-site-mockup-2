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
    <router-view/>
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
      return this.cart.reduce((total, item) => total + item.quantity, 0)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>