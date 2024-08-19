<template>
  <div class="home">
    <h1>{{ siteName }}へようこそ</h1>
    <p>最高の商品をお届けします。</p>
    <router-link to="/products" class="btn">商品を見る</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      siteName: '{ECサイト名}'
    }
  }
}
</script>