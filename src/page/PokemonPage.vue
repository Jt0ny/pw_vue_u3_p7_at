!<template>
  <div v-if="pokemonObjeto != null">
    <h1>Adivina el Pokemon de la Imagen</h1>
    <PokemonImagen
      :pokemonId="pokemonObjeto.id"
      :mostrarPokemon="pokemonShow"
    />
    <PokemonOpciones :pokemons="pokemonArr" />
  </div>
</template>

<script>
import PokemonImagen from "../components/PokemonImagen.vue";
import PokemonOpciones from "@/components/PokemonOpciones.vue";
import {
  consultarPokemonsFachada,
  obtenerAleatorioFachada,
} from "../client/PokemonCliente.js";

export default {
  data() {
    return {
      pokemonArr: [],
      pokemonObjeto: null,
      pokemonShow: false,
    };
  },
  components: {
    PokemonImagen,
    PokemonOpciones,
  },
  mounted() {
    console.log("Se monto en la pagina el componente PokemonPage.vue");
    this.cargarJuego();
  },
  methods: {
    async cargarJuego() {
      const arregloPokemons = await consultarPokemonsFachada();
      console.log(arregloPokemons);
      this.pokemonArr = arregloPokemons;

      const valorAleatorio = obtenerAleatorioFachada(0, this.pokemonArr.length);
      console.log("Este es el aleatorio: " + valorAleatorio); //Imprime el valor aleatorio
      const pokemonCorrecto = this.pokemonArr[valorAleatorio];
      this.pokemonObjeto = pokemonCorrecto;
    },
  },
};
</script>

<style>
h1 {
  text-align: center;
  color: #333;
}
</style>