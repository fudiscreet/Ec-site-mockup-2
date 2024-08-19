<template>
    <div class="order-history">
      <h2>注文履歴</h2>
      <div v-if="orders.length === 0">
        <p>注文履歴がありません。</p>
      </div>
      <div v-else>
        <div v-for="order in orders" :key="order.id" class="order-item">
          <h3>注文 #{{ order.id }}</h3>
          <p>注文日時: {{ new Date(parseInt(order.id.split('-')[1])).toLocaleString() }}</p>
          <p>合計: ¥{{ order.total }}</p>
          <ul>
            <li v-for="item in order.items" :key="item.id">
              {{ item.name }} × {{ item.quantity }}
            </li>
          </ul>
          <p>配送先: {{ order.address }}</p>
          <p>支払い方法: {{ order.paymentMethod }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapState } from 'vuex'
  
  export default {
    name: 'OrderHistory',
    computed: {
      ...mapState(['orders'])
    }
  }
  </script>