<template>
  <div class="pokemon-container">
    <img  v-show="!mostrarPokemon" :src="imagenFuente" alt="No se pudo cargar" class="ocultar" />
    <img v-show="mostrarPokemon" :src="imagenFuente" alt="No se pudo cargar" />
  </div>
</template>

<script>
export default {
  props: {
    pokemonId: {
      type: Number,
      required: true,
    },
    mostrarPokemon: {
      type: Boolean,
      required: true,
    },
  },
  computed: {
    imagenFuente() {//es una propiedad y no metodo
      /*return (
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/" +
        this.pokemonId +
        ".svg"
      );*/
      return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${this.pokemonId}.svg`; 
    },
  },
};
</script>

<style>
.ocultar {
  filter: brightness(0); /*Configuramos el brillo*/
}
img {
  height: 200px;
  position: absolute; /*Configurar la posición*/
  right: 38%;
}
.pokemon-container {
  height: 200px;
}
</style>