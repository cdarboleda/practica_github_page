<template>
	<div class="contenedor-imagen">
		<div class="imagen" v-for="(pokemon, index) in arregloPokemons" :key="index">
			<img :src="pokemon.img" alt="No se pudo cargar :(" />
			<h2>{{ pokemon.name }}</h2>
		</div>
	</div>
</template>
  
  
  <script scoped>
	export default {

		props: {
			arregloPokemons: {
				type: Array,
				required: true,
			}
		}

	};
  </script>
  
  <style>
	.contenedor-imagen {
		display: flex;
		flex-direction: row;
		justify-items: center;
		width: 700px;
		height: 300px;
		padding: 10px;
		gap: 20px;
		border: solid black;
	}

	.imagen {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 300px;
		height: 290px;
		border: solid rgb(255, 0, 0);
	}

	img {
		width: 200px;
		height: 200px;
		border: solid black;
	}
</style>