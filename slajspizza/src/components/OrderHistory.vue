<script setup>
import { ref, onMounted, onUpdated } from 'vue'

const orderHistory = ref([])

const getOrderHistory = () => {
  const storedOrders = localStorage.getItem('orderHistory')
  if (storedOrders) {
    orderHistory.value = JSON.parse(storedOrders)
  }
}

//Reorder
const reorderItems = (order) => {
  console.log(order)
  //Väntar på funktion lol
}

//Låtsasbeställning
const placeOrder = () => {
  const newOrder = {
    orderNumber: 32649,
    date: new Date().toISOString(),
    items: [
      { name: 'Hamburgare', price: 85 },
      { name: 'Pommes frites', price: 25 },
      { name: 'Läsk', price: 20 },
    ],
  }

  // Lägg till den nya ordern i orderHistory
  orderHistory.value.push(newOrder)

  // Uppdatera localStorage
  //localStorage.setItem('orderHistory', JSON.stringify(orderHistory.value));

  //   console.log('Ny order placerad:', newOrder)
}

onUpdated(() => {
  getOrderHistory()
})
</script>

<template>
  <div class="container">
    <h3>Orderhistorik</h3>
    <ul class="order-card" v-if="orderHistory.length">
      <li class="order-grejs" v-for="(order, index) in orderHistory" :key="index">
        <div class="headline">
          <p>Ordernummer: {{ order.orderNumber }}</p>
          <p>Datum: {{ new Date(order.date).toLocaleDateString() }}</p>
        </div>
        <ul class="info-holder">
          <li class="name-price" v-for="(item, itemIndex) in order.items" :key="itemIndex">
            <p>{{ item.name }}</p>
            <p>{{ item.price }} kr</p>
          </li>
        </ul>
        <button @click="reorderItems(order)">Beställ igen</button>
      </li>
    </ul>
    <p class="no-order" v-else>Ingen orderhistorik</p>
  </div>
</template>

<style scoped>
* {
  font-family: Parkinsans;
  margin: 0;
  padding: 0;
}

h3 {
  font-size: 2rem;
  color: #b03a2e;
  text-align: center;
  margin-top: 3rem;
}

.no-order {
  text-align: center;
}

.container {
  display: flex;
  flex-flow: column nowrap;
  gap: 2rem;
  margin: 2rem;
}

.order-card {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
  gap: 1rem;
}

.order-grejs {
  display: flex;
  flex-flow: column nowrap;
  gap: 1rem;
  padding: 0.5rem;
  border: 2px solid rgb(255, 216, 216);
  border-radius: 20px;
}

.headline {
  text-align: center;
  font-weight: 600;
  background-color: rgb(255, 216, 216);
  padding: 1rem 0.5rem;
  border-radius: 20px;
}

p {
  display: inline;
  margin: 0.5rem;
}

.name-price {
  list-style: none;
}

button {
  padding: 8px 20px;
  background-color: #b03a2e;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  border: none;
  width: 8rem;
  align-self: center;
}

button:hover {
  background-color: #7d2a20;
}

.info-holder {
  display: flex;
  flex-flow: column nowrap;
}
</style>
