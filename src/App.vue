<template>
  <div id="app">
    <nav>
      <router-link to="/">{{ siteName }}</router-link>
      <router-link to="/products">商品一覧</router-link>
      <router-link to="/order-history">注文履歴</router-link>
      <router-link to="/cart">
        <img src="@/assets/cart-icon.svg" alt="カート" />
      </router-link>
    </nav>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      siteName: '{ECサイト名}'
    }
  }
}
</script>