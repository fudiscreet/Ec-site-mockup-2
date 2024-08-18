<template>
    <div class="order-history">
      <h1>注文履歴</h1>
      <div v-for="order in orders" :key="order.id" class="order-item">
        <h2>注文 #{{ order.id }}</h2>
        <div class="order-details">
          <div class="order-summary">
            <p><strong>注文内容:</strong></p>
            <p v-for="item in order.items" :key="item.id">
              {{ item.name }} × {{ item.quantity }} : ¥{{ item.price * item.quantity }}
            </p>
            <p><strong>小計:</strong> ¥{{ order.subtotal }}</p>
            <p><strong>送料:</strong> ¥{{ order.shipping }}</p>
            <p><strong>合計:</strong> ¥{{ order.total }}</p>
          </div>
          <div class="shipping-info">
            <p><strong>配送情報:</strong></p>
            <p>配送先: {{ order.shippingAddress }}</p>
            <p>配送予定日: {{ order.estimatedDeliveryDate }}</p>
          </div>
          <div class="payment-info">
            <p><strong>支払い情報:</strong></p>
            <p>支払い方法: {{ order.paymentMethod }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'OrderHistory',
    data() {
      return {
        orders: [
          {
            id: 'ORD-xxxxxxxxxxxx',
            items: [{ id: 1, name: '商品名', quantity: 1, price: 2299 }],
            subtotal: 2299,
            shipping: 500,
            total: 2799,
            shippingAddress: '〒xxx-xxxx 東京都...',
            estimatedDeliveryDate: 'yyyy年mm月dd日',
            paymentMethod: '銀行振込'
          }
          // 他の注文履歴を追加
        ]
      }
    }
  }
  </script>
  
  <style scoped>
  .order-history {
    padding: 20px;
  }
  .order-item {
    border: 1px solid #ccc;
    margin-bottom: 20px;
    padding: 20px;
  }
  .order-details {
    display: flex;
    justify-content: space-between;
  }
  .order-summary, .shipping-info, .payment-info {
    flex: 1;
  }
  </style>