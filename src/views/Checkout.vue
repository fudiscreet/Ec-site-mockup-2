<template>
  <div class="checkout">
    <h2>チェックアウト</h2>
    <form @submit.prevent="placeOrder">
      <div>
        <label for="name">氏名:</label>
        <input id="name" v-model="orderDetails.name" required>
      </div>
      <div>
        <label for="email">メールアドレス:</label>
        <input id="email" v-model="orderDetails.email" type="email" required>
      </div>
      <div>
        <label for="address">住所:</label>
        <input id="address" v-model="orderDetails.address" required>
      </div>
      <div>
        <label for="payment">支払い方法:</label>
        <select id="payment" v-model="orderDetails.paymentMethod" required>
          <option value="credit_card">クレジットカード</option>
          <option value="bank_transfer">銀行振込</option>
        </select>
      </div>
      <button type="submit">注文を確定する</button>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'CheckoutPage',
  data() {
    return {
      orderDetails: {
        name: '',
        email: '',
        address: '',
        paymentMethod: ''
      }
    }
  },
  methods: {
    ...mapActions(['placeOrder']),
    async submitOrder() {
      try {
        const order = await this.placeOrder(this.orderDetails)
        this.$router.push({ name: 'OrderComplete', params: { orderId: order.id } })
      } catch (error) {
        console.error('注文処理中にエラーが発生しました:', error)
      }
    }
  }
}
</script>