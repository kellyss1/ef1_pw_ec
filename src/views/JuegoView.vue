<template>
  
  <div>
    <JuegoPokemon />
    <!-- aparece si tu puntaje es mayor a 10 -->
    <MensajeWin />
    <!-- aparece si tu puntaje es menor o igual a 10 -->
    <MensajeLose/>
  </div>
</template>

<script>
import JuegoPokemon from '@/components/JuegoPokemon.vue';
import MensajeLose from '@/components/MensajeLose.vue';
import MensajeWin from '@/components/MensajeWin.vue';

export default {
  components: {
    JuegoPokemon,
    MensajeWin,
    MensajeLose,
  },

};
</script>

<style>

</style>