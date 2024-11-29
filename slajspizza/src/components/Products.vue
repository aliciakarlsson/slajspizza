<script setup>
import '../assets/main.css'
import { ref } from 'vue'
import { useOrder } from '../useOrder'
const { order, addToOrder } = useOrder()

const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const products = ref(props.items)
</script>

<template>
  <div class="category">
    <h2 class="title sticky-title">{{ products[0].type.toUpperCase() }}</h2>
    <ul class="product-list">
      <li v-for="product in products" :key="product.id" class="product-item">
        <div class="product-details">
          <h3>{{ product.name }}</h3>
          <p class="description">{{ product.description }}</p>
          <div class="price">
            <p>Price:</p>
            <p class="price-number">{{ product.price }}kr</p>
          </div>
          <div class="button">
            <button class="add-button" @click="addToOrder(product)">+</button>
          </div>
        </div>
        <img class="product-image" :src="product.imgUrl" :alt="product.name" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.menu {
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
  color: #333;
}

.title {
  padding-left: 0.5rem;
  background-color: rgb(255, 216, 216);
  padding: 1rem;
  border-radius: 0.5rem;
}

.sticky-title {
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: rgb(255, 216, 216);
  padding: 1rem;
  border-radius: 0.5rem;
  margin-bottom: 20px;
}

.category {
  font-family: 'Parkinsans';
  padding: 1rem;
}

h1 {
  text-align: center;
  font-size: 36px;
  margin-bottom: 20px;
}

h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #b03a2e;
}

.product-list {
  list-style-type: none;
  padding: 0;
}

.product-item {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  background-color: #f4f4f4;
  border-radius: 8px;
  align-items: center;
}

.product-details {
  flex: 1;
  padding-right: 20px;
}

.product-details h3 {
  font-size: 24px;
  margin-bottom: 5px;
  color: #b03a2e;
}

.description {
  font-size: 16px;
  margin-bottom: 10px;
}

.price {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.price-number {
  font-size: 20px;
  color: #b03a2e;
}

.button a {
  padding: 8px 20px;
  background-color: #b03a2e;
  color: white;
  text-decoration: none;
  border-radius: 4px;
}

.product-image {
  width: 150px;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.add-button {
  display: block;
  padding: 1rem;
  background-color: rgb(200, 60, 60);
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.add-button:hover {
  background-color: rgb(150, 40, 40);
}
</style>
