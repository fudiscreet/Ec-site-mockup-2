<template>
    <div class="order-complete">
      <h1>ご注文ありがとうございます！</h1>
      <p>注文が正常に完了しました。</p>
      <div class="order-details">
        <p>注文ID: {{ orderId }}</p>
        <p>注文日時: {{ orderDate }}</p>
      </div>
      <div class="actions">
        <button @click="checkOrder">注文を確認する</button>
        <button @click="continueShopping">ショッピングを続ける</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrderComplete',
    data() {
      return {
        orderId: 'ORD-xxxxxxxxxxxx',
        orderDate: new Date().toLocaleString()
      }
    },
    methods: {
      checkOrder() {
        this.$router.push({ name: 'OrderHistory' })
      },
      continueShopping() {
        this.$router.push({ name: 'ProductList' })
      }
    }
  }
  </script>
  
  <style scoped>
  .order-complete {
    text-align: center;
    padding: 20px;
  }
  .order-details {
    margin: 20px 0;
    padding: 10px;
    border: 1px solid #ccc;
    display: inline-block;
  }
  .actions {
    margin-top: 20px;
  }
  button {
    margin: 0 10px;
    padding: 10px 20px;
  }
  </style>