!<template>
  <h1>Adivina el Pokemon de la Imagen</h1>

  <PokemonImagen :pokemonId="25" :mostrarPokemon="false"/>
  <PokemonOpciones/>

</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "@/components/PokemonOpciones.vue";
export default {
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
};
</script>

<style>

</style>