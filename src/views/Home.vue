<template>
  <div class="home">
    <h2>{{ siteName }}へようこそ</h2>
    <p>最高の商品をお届けします。</p>
    <router-link to="/products" class="btn">商品を見る</router-link>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      siteName: '{ECサイト名}'
    }
  }
}
</script>