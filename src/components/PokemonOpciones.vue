<template>
  <div class="opciones-contenedor">
    <ul>
      <li @click="seleccionado" v-for="pokemon in pokemons" :key="pokemon.id">
        {{ pokemon.nombre }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {
    seleccionado() {
      console.log("Hizo click");
    },
  },
};

</script>

<style>
ul {
  list-style: none; /*Quitar los puntos de la lista*/
}
li{
  background-color: white;
  width: 250px;
  border:  1px solid;
  border-radius: 5px;
  margin-top: 10px;
  cursor: pointer;
}
li:hover{
  background-color: rgb(0, 0, 0,0.05);
}
.opciones-contenedor {
  display: flex;
  justify-content: center;  
}
</style>