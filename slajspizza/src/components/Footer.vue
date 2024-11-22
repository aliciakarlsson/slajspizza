<script setup>
import "../assets/main.css";
</script>

<template>
<footer>
    <p><i>🌟 Veckans erbjudande: 2 pizzor + 2 drycker för halva priset! 🌟</i></p>
    <p class="cool marginTop" >📍 Slice Pizza, Västra Varvsgatan 31, 972 36 Luleå | 📞 073-515 99 24 | ✉️ köppizza@slicepizza.se</p>
    <p class="cool"><b>© 2024 Slice Pizza. Alla rättigheter förbehållna.</b></p>
</footer>
</template>

<style scoped>
footer {
    font-family: "Parkinsans";
    background-color: rgb(173, 3, 3);
    color: rgb(221, 218, 218);
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    height: 8rem;
    border-top: 2px solid rgb(104, 2, 2);
}

a {
    background-color: white;
    color: rgb(21, 143, 21);
    text-decoration: none;
    padding: 0.4rem;
    border-radius: 15px;
    border: 2px dotted green;
}

p {
    margin: 0.1rem;
    font-size: 1.2rem;
}

.cool{
    font-size: .75rem;
}

.marginTop {
    margin-top: 1rem;
}
</style>