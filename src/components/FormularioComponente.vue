!<template>
  <div class="container">
    <h1>Formulario Persona</h1>

    <div class="formulario">
      <p type="ID:"><input type="text" v-model="datos.id" /></p>
      <p type="Nombre:"><input type="text" v-model="datos.nombre" /></p>
      <p type="Apellido:"><input type="text" v-model="datos.apellido" /></p>
      <p type="Fecha Nacimiento:">
        <input type="text" v-model="datos.fechaNacimiento" />
      </p>
      <button v-on:click="buscar">buscar</button>
      <button v-on:click="guardar">guardar</button>
      <button class="actualizar" v-on:click="actualizar">Actualizar</button>
      <button class="actualizar-parcial" v-on:click="actualizarParcial">Actualizar Parcial</button>
      <button class="eliminar" v-on:click="eliminar">Eliminar</button>
    </div>
  </div>
</template>

<script>
import {
  obtenerPorIdFachada,
  insertarFachada,
  actualizarFachada,
  actualizarParcialFachada,
  eliminarFachada
} from "@/client/PersonaCliente";

export default {
  data() {
    return {
      
      datos: {
        id: "",
        nombre: "",
        apellido: "",
        fechaNacimiento: "",
      },
    };
  },
  mounted() {
    console.log("Antes de llamar al API");
    obtenerPorIdFachada(5);
  },

  methods: {
    async buscar() {
      console.log("buscar");
      
     
      const data = await obtenerPorIdFachada(this.datos.id);
      this.datos.nombre = data.nombre;
      this.datos.apellido = data.apellido;
      this.datos.fechaNacimiento = data.fechaNacimiento;
    },
    async guardar() {
      console.log("Guardar");
      const bodyPersona = {
        nombre: this.datos.nombre,
        apellido: this.datos.apellido,
        fechaNacimiento: this.datos.fechaNacimiento,
      };
      await insertarFachada(bodyPersona);
    },
     async actualizar() {
      console.log("Actualizar");
      const bodyPersona = {
        id: this.datos.id,
        nombre: this.datos.nombre,
        apellido: this.datos.apellido,
        fechaNacimiento: this.datos.fechaNacimiento,
      };
      await actualizarFachada(this.datos.id, bodyPersona);
    },
    async actualizarParcial() {
      console.log("ActualizarParcial");
      const bodyPersona = {
        nombre: this.datos.nombre,
        apellido: this.datos.apellido,
        fechaNacimiento: this.datos.fechaNacimiento,
      };
      await actualizarParcialFachada(this.datos.id, bodyPersona);
    },
    async eliminar() {
      console.log("Eliminar ");
      await eliminarFachada(this.datos.id);
    },
  },
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