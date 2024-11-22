<script setup>

import axios from 'axios';
import { ref, onMounted, toRaw, computed } from 'vue';

import Product from './Products.vue'


const data = ref([]);
const types = ref(null)
const props = defineProps(['foo'])

console.log(props.foo)

const getItemsByType = (type) => {
  return data.value.items.filter(item => item.type === type)
}

const fetchData = async () => {
  try {
    let response = await axios.get('https://6ldruff9ul.execute-api.eu-north-1.amazonaws.com/menu',
      {
        headers: { 'x-zocom': 'norrland' }
      }
    );

    data.value = response.data

    console.log("Data hämtad:", toRaw(data.value.items));

    const uniqueTypes = computed(() => {
      if (!data.value.items) return []
      return [...new Set(data.value.items.map(item => item.type))]
    })
    types.value = uniqueTypes.value

    console.log("Unika typer:", toRaw(uniqueTypes.value));

  } catch (error) {
    console.error("Fel vid hämtning av data med Axios:", error);
  }


}

onMounted(fetchData);




</script>

<template>

  <div>
    <h2>MENY</h2>
    <i>Vänligen välj och va mellan allt gott vi har att erbjuda. vänligen vänligast! </i>



    <div v-for="(type, index) in types" :key="index" class="category-wrapper">

      <Product :items="getItemsByType(type)" />

    </div>




  </div>
</template>

<style scoped>
.category-wrapper {
  position: relative;
  padding-top: 60px;
  /* Justera detta värde baserat på din titels höjd */
}
</style>
