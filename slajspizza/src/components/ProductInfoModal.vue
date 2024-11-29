<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(['activeProduct'])
const emit = defineEmits(['close'])

console.log("aktiv produkt är:", props.activeProduct)
// denna konstanten håller referens till dialogrutan så jag nu kan toggla den med showModalfmetoderna som tillhör.
const dialogRef = ref(null);
// console.log(dialogRef.value)

const closeModal = () => {
  console.log("closemodal kör")
  emit('close')
}

//när domen finns....
onMounted(() => {
  console.log(dialogRef.value)

  //öppnar modalen direkt
  dialogRef.value.showModal();



  //lyssnar på native Stängning med escape
  dialogRef.value.addEventListener("cancel", () => {
    closeModal()
    console.log("native stängning av modal med cancel")
  });

})

</script>


<template>
  <!-- Dialog-elementet som styrs av en boolean -->
  <dialog ref="dialogRef" class="product-dialog">

    <article>
      <h1>{{ activeProduct.name }}</h1>
      <p>{{ activeProduct.description }}</p>
      toppings
      <p>{{ activeProduct.toppings.join(", ") }}</p>
    </article>

    <br>
    Saker att ha:
    detaljerad produktinfo: <br>

    ingreddienslista: <br>
    Allergener: <br>

    FIXA STÄNGFUNKTION heheheh escape funkar
    <!-- Stäng-knapp som anropar en funktion för att stänga dialogen -->
    <button @click="closeModal()">Stäng</button>
  </dialog>
</template>

<style scoped>
.product-dialog {
  z-index: 999999999;
  width: 90%;
  max-width: 400px;
  border: none;
  border-radius: 8px;
  background: #f9f9f9;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
</style>
