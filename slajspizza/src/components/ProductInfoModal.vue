<!-- <script setup>



/**
 * Funktion: openDialog
 * - Använder .showModal() för att öppna dialogen.
 * - Kontroll om dialogen redan är öppen förhindrar fel.
 */
const openDialog = () => {
  if (dialogRef.value && !dialogRef.value.open) {
    dialogRef.value.showModal();
  }
};

/**
 * Funktion: closeDialog
 * - Använder .close() för att stänga dialogen.
 * - Skickar en eventuppdatering till föräldern för att ändra `isOpen`.
 */
const closeDialog = () => {
  if (dialogRef.value && dialogRef.value.open) {
    dialogRef.value.close();
    emit("update:isOpen", false); // Uppdaterar förälderns boolean
  }
};

/**
 * Watch: övervakar props.isOpen
 * - Om `isOpen` ändras, öppnas eller stängs dialogen.
 */
watch(
  () => props.isOpen,
  (newVal) => {
    if (newVal) {
      openDialog();
    } else {
      closeDialog();
    }
  }
);

/**
 * Livscykelhändelse: onMounted
 * - Lägger till en event-lyssnare för "cancel".
 * - Stäng dialogen om användaren trycker på Escape eller klickar utanför.
 */
onMounted(() => {
  if (dialogRef.value) {
    dialogRef.value.addEventListener("cancel", () => {
      emit("update:isOpen", false); // Informera föräldern om att dialogen stängs
    });
  }
});

</script> -->

<script setup>
import { ref, onMounted } from "vue";

const props = defineProps(['activeProduct'])

console.log("aktiv produkt är:", props.activeProduct)
// denna konstanten håller referens till dialogrutan så jag nu kan toggla den med showModalfmetoderna som tillhör.
const dialogRef = ref(null);
// console.log(dialogRef.value)

//när domen finns....
onMounted(() => {
  console.log(dialogRef.value)

  dialogRef.value.showModal();

  // dialogRef.value.addEventListener("cancel", () => {
  //   emit("update:isOpen", false); // Informera föräldern om att dialogen stängs
  // });

})

</script>


<template>
  <!-- Dialog-elementet som styrs av en boolean -->
  <dialog ref="dialogRef" class="product-dialog">
    <h2>PRODUKTEN</h2>
    <p>INFO</p>
    <!-- Stäng-knapp som anropar en funktion för att stänga dialogen -->
    <button @click="closeDialog">Stäng</button>
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
}
</style>
