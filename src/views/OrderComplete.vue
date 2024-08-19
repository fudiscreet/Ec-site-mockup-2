<template>
  <div class="order-complete">
    <h2>ご注文ありがとうございます！</h2>
    <p>注文が正常に完了しました。</p>
    <div class="order-details">
      <p>注文ID: {{ $route.params.orderId }}</p>
      <p>注文日時: {{ orderDate }}</p>
    </div>
    <div class="actions">
      <router-link to="/order-history" class="btn">注文を確認する</router-link>
      <router-link to="/products" class="btn">ショッピングを続ける</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OrderCompletePage',
  data() {
    return {
      orderDate: new Date().toLocaleString()
    }
  }
}
</script>