<template>
  <div>
    <div class="marcador">
      <span>Puntaje: {{ puntaje }}</span>
      <span>Intento: {{ intento }}</span>
    </div>

    <div class="imagenes">
      <img
        :src="pokemon1.imagen || 'https://dummyimage.com/250x250'"
        alt="img_pokemon1"
      />
      <img
        :src="pokemon2.imagen || 'https://dummyimage.com/250x250'"
        alt="img_pokemon2"
      />
      <img
        :src="pokemon3.imagen || 'https://dummyimage.com/250x250'"
        alt="img_pokemon3"
      />
    </div>
    <div class="nombres">
      <span>{{ pokemon1.nombre }}</span>
      <span>{{ pokemon2.nombre }}</span>
      <span>{{ pokemon3.nombre }}</span>
    </div>
    <br />
    <button @click="jugar">Jugar</button>
  </div>
</template>

<script>
import { consumirAPIFacade } from "@/clients/PokemonAPI";

export default {
  props: ["win"],
  data() {
    return {
      puntaje: null,
      intento: null,
      gana: null,
      pokemon1: {
        nombre: null,
        imagen: null,
      },
      pokemon2: {
        nombre: null,
        imagen: null,
      },
      pokemon3: {
        nombre: null,
        imagen: null,
      },
    };
  },
  methods: {
    async jugar() {
      //5 intentos
      //3 imagenes iguales = 5 puntos
      //2 imagenes = 2 puntos
      //ninguna 0

      const poke1 = await consumirAPIFacade();
      const poke2 = await consumirAPIFacade();
      const poke3 = await consumirAPIFacade();

      console.log("Pokemon 1:", poke1);
      console.log("Pokemon 2:", poke2);
      console.log("Pokemon 3:", poke3);

      this.pokemon1.nombre = poke1.nombre;
      this.pokemon1.imagen = poke1.respuesta;

      this.pokemon2.nombre = poke2.nombre;
      this.pokemon2.imagen = poke2.respuesta;

      this.pokemon3.nombre = poke3.nombre;
      this.pokemon3.imagen = poke3.respuesta;

      this.puntaje = this.puntaje || 0;
      this.intento = this.intento || 0;

      if (this.intento <= 4) {
        if (
          this.pokemon1.nombre === this.pokemon2.nombre &&
          this.pokemon1.nombre === this.pokemon3.nombre
        ) {
          this.puntaje += 5;
        } else if (
          this.pokemon1.nombre === this.pokemon2.nombre ||
          this.pokemon1.nombre === this.pokemon3.nombre ||
          this.pokemon2.nombre === this.pokemon3.nombre
        ) {
          this.puntaje += 2;
        } else {
          this.puntaje += 0;
        }
        this.intento += 1;
      } else {
        if (this.puntaje >= 10) {
          this.gana = true;
        } else {
          this.gana = false;
        }
      }
    },

    enviarWin() {
      this.$emit("win", this.gana);
    },
  },
};
</script>

<style>
img {
  width: 250px;
  height: 250px;
}
.marcador,
.imagenes,
.nombres {
  display: flex;
  justify-content: space-around;
}
</style>