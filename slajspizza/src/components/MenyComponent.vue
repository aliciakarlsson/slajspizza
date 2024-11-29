<script setup>
import ProductsStats from './ProductsStats.vue'

import axios from 'axios'
import { ref, onMounted, toRaw, computed } from 'vue'

import Product from './Products.vue'

const data = ref([])
const types = ref(null)
const props = defineProps({
  items: {
    type: Array,
    default: () => [],
  },
})

const getItemsByType = (type) => {
  return data.value.items.filter((item) => item.type === type)
}

const fetchData = async () => {
  try {
    let response = await axios.get('https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu', {
      headers: { 'x-zocom': 'norrland' },
    })

    data.value = response.data

    const uniqueTypes = computed(() => {
      if (!data.value.items) return []
      return [...new Set(data.value.items.map((item) => item.type))]
    })
    types.value = uniqueTypes.value
  } catch (error) {
    console.error('Fel vid hämtning av data med Axios:', error)
  }
}

onMounted(fetchData)
</script>

<template>
  <div class="menu">
    <h2 class="menu-header">MENY</h2>
    <p class="menu-text">
      Här nedan finner du vår fantastiska meny. Meddela oss gärna om du har någon allergi så kan vi
      hjälpa dig på bästa sätt.
    </p>

    <ProductsStats />

    <div v-for="(type, index) in types" :key="index" class="category-wrapper">
      <Product :items="getItemsByType(type)" />
    </div>
  </div>
</template>

<style scoped>
* {
  font-family: 'Parkinsans';
}

.menu {
  position: relative;
}

.menu-header,
.menu-text {
  margin: 1.5rem;
  text-align: center;
}

.category-wrapper {
  position: relative;
  padding-top: 60px;
}
</style>
