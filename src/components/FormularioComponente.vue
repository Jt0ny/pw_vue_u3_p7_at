!<template>
  <div class="container">
    <h1>Formulario Persona</h1>
    <div class="formulario">
      <p type="Nombre:"><input type="text"  v-model="nombre"/></p>
      <p type="Apellido:"><input type="text" v-model="apellido"/></p>
      <p type="Fecha Nacimiento:"><input type="datetime-local" v-model="fechaNacimiento" /></p>
    </div>
    <button @click="buscar" >buscar</button>
    <button @click="guardar" >guardar</button>
  </div>
</template>

<script>
import {obtenerPorIdFachada,insertarFachada} from '@/client/PersonaCliente.js';
 
export default {
  data() {
    return {
      idPersona: null,
      nombre: null,
      apellido: null,
      fechaNacimiento: null
    };
  },
  mounted() {
    console.log("Antes de llamar al API");
    obtenerPorIdFachada(5);
  },
 
  methods: {
   async buscar() {
      const data=await obtenerPorIdFachada(this.idPersona);
      this.nombre=data.nombre;
      this.apellido=data.apellido;
      this.fechaNacimiento=data.fechaNacimiento;
    },
     async guardar(){
      const bodyPersona={
        nombre:this.nombre,
        apellido:this.apellido,
      }
      await insertarFachada(bodyPersona);
    }
  }
};
</script>

<style>
.container {
  display: grid;
  justify-content: center;
  align-items: center;
}

.formulario {
  display: grid;
  flex-direction: center;
  border: solid 1px black;
  padding: 10px;
  border-radius: 5px;
}

p::before {
  content: attr(type);
  width: 100px;
}
button {
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
}
h1 {
  text-align: center;
  
}
</style>