<script setup>
defineEmits(['toggleOrderView'])
</script>

<template>
  <div class="header-container">
    <div class="header">
      <h1>Pizza Slice</h1>

      <h3>Din favorit restaurang</h3>
    </div>
    <div class="shopping-cart" @click="$emit('toggleOrderView')">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path
          d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"
        />
      </svg>
      
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
.header {
  color: black;
  text-align: center;
  margin: auto;
  background-color: white;
  padding: 1em;
  border-radius: 50px;
  border: dotted 2px red;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.shopping-cart {
  width: 3em;
  color: black;
  background-color: white;
  padding: 1em;
  margin-top: auto;
  border-radius: 50px;
  border: dotted 2px red;
}
.header-container {
  background-image: url(https://img.freepik.com/free-vector/abstract-background-with-red-white-squares_1048-2587.jpg);
  background-size: auto;
  padding: 2em;
  display: flex;
  justify-content: space-between;
  border-bottom: solid rgb(218, 13, 13) 2px;
}

</style>
