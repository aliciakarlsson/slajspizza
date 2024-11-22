<script setup>
import Header from './components/Header.vue'
import TheBanner from './components/TheBanner.vue'
import Map from "./components/Map.vue"
import MenyComponent from './components/MenyComponent.vue';
import Footer from "./components/Footer.vue"
</script>

<template>
  <Header />
  <TheBanner />
  <MenyComponent />
  <Map />
  <Footer/>
</template>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
