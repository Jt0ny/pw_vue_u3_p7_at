<template>
  <div class="opciones-contenedor">
    <ul>
      <li>Opcion 1</li>
      <li>Opcion 2</li>
      <li>Opcion 3</li>
      <li>Opcion 4</li>
    </ul>
  </div>
</template>

<script>
export default {};
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