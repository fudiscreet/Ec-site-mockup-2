<template>
    <div class="home">
      <h1>{{ siteName }}</h1>
      <p>{{ siteMessage }}</p>
      <router-link to="/products" class="btn">商品を見る</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomePage',
    data() {
      return {
        siteName: '{ECサイト名}',
        siteMessage: 'ようこそ！最高の商品をお届けします。'
      }
    }
  }
  </script>