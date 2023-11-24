<template>
    <footer>
        <p>{{ footerText }}</p>
    </footer>
</template>

<script>
export default ({
    data() {
        return {
            footerText: 'Group F © 2023 - All Rights Reserved'
        }
    }
})
</script>

<style scoped>
nav {
    background-color: #acc8e1;
    padding: 30px;
    font-size: x-large;
}
footer {
    background-color: #acc8e1;
    padding: 10px;
    font-size: small;
    font-family: baskerville;
}
</style>