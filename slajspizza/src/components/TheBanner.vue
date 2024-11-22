<script setup>
</script>

<template>
<section class="banner">
    <p class="orderInfo">Beställ online eller ring oss på nummer <span class="nr joy">073-515 99 24</span></p>
    <p class="info">I varje beställning ingår ✨<span class="joy"> matglädje </span>✨. Studentrabatt finns.</p>
</section>
</template>

<style>
.banner {
    font-family: "Parkinsans";
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 1rem;
}

.info{
    background-color: rgb(233, 232, 232);
    padding: 1rem 1rem;
    border-radius: 10px;
    font-style: italic;
}

.nr{
    font-weight: 700;
    font-size: 1.25rem;
}

.joy{
    background: linear-gradient(to right, #e90909, #316310); 
  -webkit-background-clip: text; 
  -webkit-text-fill-color: transparent; 
  font-weight: 600;
}


</style>