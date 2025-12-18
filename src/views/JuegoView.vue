<template>
  
  <div>
    <JuegoPokemon @puntaje-actualizado="actualizarPuntaje"/>
    <!-- aparece si tu puntaje es mayor a 10 -->
    <MensajeWin v-if="puntaje > 10" />
    <!-- aparece si tu puntaje es menor o igual a 10 -->
    <MensajeLose v-else />
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
  data() {
    return {
      puntaje: 0,
      intento: 0,
    };
  },
  methods: {
    actualizarPuntaje({ nuevoPuntaje, nuevoIntento }) {
      this.puntaje = nuevoPuntaje;
      this.intento = nuevoIntento;
    },
  },
  watch: {
    puntaje(newPuntaje) {
      if (newPuntaje > 10) {
        // Trigger any additional logic for winning
        console.log("You win!");
      }
    },
  },
};
</script>

<style>

</style>