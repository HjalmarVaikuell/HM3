<template>
    <nav>
        <router-link to="/">Main</router-link>
        <router-link :to="{ name: 'SignUp'}">Sign-up</router-link>
    </nav>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style scoped>
nav {
    background-color: #495867;
    padding: 30px;
    font-size: x-large;
}

nav a {
    font-family: baskerville, serif;
    padding: 10px;
    margin: 5px;
    font-weight: bold;
    text-decoration: none;
    color: #acc8e1;
}

nav a:hover {
    background-color: #4e5e6d;
    border-radius: 5%;
}

nav a.router-link-exact-active {
    color: #F9C784;
}
</style>