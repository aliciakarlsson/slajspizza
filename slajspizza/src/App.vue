<script setup>
import { ref } from 'vue'
import Header from './components/Header.vue'
import TheBanner from './components/TheBanner.vue'
import Map from './components/Map.vue'
import MenyComponent from './components/MenyComponent.vue'
import OrderView from './components/OrderView.vue'
import Footer from './components/Footer.vue'

const showOrderView = ref(true)

const toggleOrderView = () => {
  showOrderView.value = !showOrderView.value
}
</script>

<template>
  <Header @toggleOrderView="toggleOrderView" />
  <TheBanner />
  <OrderView :showOrderView="showOrderView" />
  <MenyComponent />
  <Map />
  <Footer />
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
