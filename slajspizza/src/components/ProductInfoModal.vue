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
      <div class="modal-header">
        <h1>{{ activeProduct.id }}. {{ activeProduct.name }}</h1>
        <!-- Stäng-knapp som anropar en funktion för att stänga dialogen -->
        <button class="cross" @click=" closeModal()">x</button>
      </div>

      <div class="modal-body">
        <p><b>Beskrivning:</b> {{ activeProduct.description }}</p>
        <p><b>Toppings:</b> {{ activeProduct.toppings.join(", ") }}</p>
      </div>

      <mark>ALLERGENER FINNS! OBS VAR UPPMÄRKSAM PÅ VAD SOM DÖDAR DIG</mark>

    </article>

    <!-- <br>
    Saker att ha:
    detaljerad produktinfo: <br>

    ingreddienslista: <br>
    Allergener: <br> -->



  </dialog>
</template>

<style scoped>
* {
  font-family: Parkinsans;
}

.product-dialog {
  z-index: 999999999;
  width: 90%;
  max-width: 800px;
  border: none;
  border-radius: 1rem;
  background: #f9f9f9;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;

  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.modal-header {
  /* background-color: green; */
  display: flex;
  justify-content: space-between;
  margin-left: 1rem;
  align-items: center;
}

.cross {
  font-size: 2rem;
  background: none;
  color: #b03a2e;
  border: none;

  padding: 0rem 1rem;

  &:hover {
    background-color: #b03b2e4d
  }
}
</style>
