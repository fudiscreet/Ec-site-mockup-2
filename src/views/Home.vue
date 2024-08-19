<template>
  <div class="home">
    <h2>ホームページ</h2>
    <p>ようこそ、{{ siteName }}へ！</p>
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