<template>
    <!-- <div class="contenedor-imagen">
      <div class="imagen">
        <img :src="imagenes[0]" alt="No se puede cargar la imagen" />
        <h2>{{nombres[0]}}</h2>
      </div>
      <div class="imagen">
        <img :src="imagenes[1]" alt="No se puede cargar la imagen" />
        <h2>{{nombres[1]}}</h2>
      </div>
      <div class="imagen">
        <img :src="imagenes[2]" alt="No se puede cargar la imagen" />
        <h2>{{nombres[2]}}</h2>
      </div>
    </div> -->

        <div class="contenedor-imagen">
      <div class="imagen" v-for = "(pokemon, index) in pokPrueba" :key="index">
        <img  :src="pokemon.img" alt="No se pudo cargar :(">
        <h2>{{pokemon.name}}</h2>
<!--         
        <img :src="pokPrueba[0].img" alt="No se puede cargar la imagen" />
        <h2>{{pokPrueba[0].name}}</h2>
      </div>
      <div class="imagen">
        <img :src="pokPrueba[1].img" alt="No se puede cargar la imagen" />
        <h2>{{pokPrueba[1].name}}</h2>
      </div>
      <div class="imagen">
        <img :src="pokPrueba[2].img" alt="No se puede cargar la imagen" />
        <h2>{{pokPrueba[2].name}}</h2> -->
      </div>
    </div>
  </template>
  
  
  <script scoped>
  //https://static.vecteezy.com/system/resources/previews/001/209/957/original/square-png.png
  export default {

    props:{
        imagenes:{
            type: Array,
            required: true,
        },
        nombres:{
            type:Array,
            required:true,
        },

        pokPrueba:{
          type: Array
        }
    }
  
  };
  </script>
  
  <style>
  .contenedor-imagen{
  display: flex;
  flex-direction: row;
  justify-items: center;
  width: 700px;
  height: 300px;
  padding: 10px;
  gap: 20px;
  border: solid black;
  }
  
  .imagen{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 300px;
    height: 290px;
    border: solid black;
  }
  
  img{
    width: 200px;
    height: 200px;
    border: solid black;
  }
  </style>