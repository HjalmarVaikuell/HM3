<template>
  <HeaderComponent/>
  <router-view/>
  <FooterCompo/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import FooterCompo from './components/FooterComponent.vue'
export default {
  components:{
    HeaderComponent,
    FooterCompo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

