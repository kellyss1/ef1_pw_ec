<template>
  
  <JuegoView/>
</template>

<script>
import JuegoView from './views/JuegoView.vue';

export default {
  name: 'App',
  components: {
    JuegoView,
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
  margin-top: 60px;
}
</style>
