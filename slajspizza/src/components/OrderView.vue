<script setup>
import { defineProps } from 'vue'
import { useOrder } from '../useOrder'
import '../assets/main.css'

const { order, addToOrder } = useOrder()
const props = defineProps({
  showOrderView: {
    type: Boolean,
    required: true,
  },
})

const calculateTotal = () => {
  return order.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
}

// const newOrder = {
//   orderNumber: nanoid(),
//   date: new Date().toISOString(),
//   items: order,
// }
// en påbörjad lösning för att spara i local storage
</script>

<template>
  <div class="order-view" v-if="showOrderView">
    <h1>Din beställning</h1>
    <p class="order-nr">Ordernummer: 14357</p>
    <ul class="product-list">
      <li v-for="item in order" :key="item.id" class="product-item">
        <span class="product-name">{{ item.name }}</span>
        <span class="product-details"> {{ item.quantity }} st × {{ item.price }} kr </span>
      </li>
    </ul>
    <p class="total">Här är totalsumman: {{ calculateTotal() }} kr</p>
    <button class="checkout-button">Gå till kassan</button>
  </div>
</template>

<style scoped>
.order-view {
  font-family: 'Parkinsans';
  background-color: rgb(255, 216, 216);
  padding: 2rem;
  border-radius: 0.5rem;
  margin: 1.5rem auto;
  max-width: 90%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.order-nr {
  font-size: 1.2rem;
  color: rgb(100, 50, 50);
  text-align: center;
}

.order-view h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
  color: rgb(120, 60, 60);
  text-align: center;
}

.product-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.product-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.product-item:last-child {
  border-bottom: none;
}

.product-name {
  font-weight: bold;
  color: rgb(80, 40, 40);
}

.product-details {
  font-size: 1rem;
  color: rgb(100, 50, 50);
}

.total {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: right;
  margin-top: 1rem;
  color: rgb(200, 60, 60);
}

.checkout-button {
  font-family: 'Parkinsans';
  display: block;
  margin: 1.5rem auto;
  padding: 0.8rem 2rem;
  background-color: rgb(200, 60, 60);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.checkout-button:hover {
  background-color: rgb(150, 40, 40);
}
</style>
