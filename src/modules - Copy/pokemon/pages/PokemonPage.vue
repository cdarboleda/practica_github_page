<template>
	<div class="contenedor" v-if="!mostrar">
		<div class="texto">
			Puntaje: <span>{{ puntaje }}</span> Intentos: <span>{{ intentos }}</span>
		</div>
		<PokemonImagen
			:imagenes="imagenes"
			:nombres="nombres"
			:pokPrueba="pokPrueba"
		/>
		<button @:click="showImages">JUGAR</button>
	</div>

	<div v-if="mostrar" class="resultado">
		<JuegoResultado :puntaje="puntaje" :ganar="ganar" />
		<button @:click="reiniciar">Reiniciar</button>
	</div>
</template>
  
  <script>

	import PokemonImagen from '../components/PokemonImagen.vue'
	import getPokemonFacade from '../helpers/clientePokemonAPI.js'
	import JuegoResultado from '../components/JuegoResultado.vue'

	export default {
		components: {
			PokemonImagen,
			JuegoResultado,
		},

		data() {
			const defaultImg = 'https://static.vecteezy.com/system/resources/previews/001/209/957/original/square-png.png';
			const defaultName = 'xxxxxxx';
			const defaultPokemon = {
				name: 'xxxxxx',
                id: 0,
				img: 'https://static.vecteezy.com/system/resources/previews/001/209/957/original/square-png.png',
			};

			return {
				puntaje: 0,
				intentos: 0,
				defaultImg: defaultImg,
				defaultName: defaultName,
                defaultPokemon : defaultPokemon,
                
				ganar: false,
				mostrar: false,
				imagenes: [defaultImg, defaultImg, defaultImg],
				nombres: [defaultName, defaultName, defaultName],

				pokPrueba: [defaultPokemon, defaultPokemon, defaultPokemon]
			};
		},

		methods: {
			// async showImages() {


			// 	const pokemons = await getPokemonFacade();
			// 	this.nombres[0] = pokemons[0].name
			// 	this.nombres[1] = pokemons[1].name
			// 	this.nombres[2] = pokemons[2].name

			// 	this.imagenes[0] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemons[0].id}.svg`
			// 	this.imagenes[1] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemons[1].id}.svg`
			// 	this.imagenes[2] = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemons[2].id}.svg`

			// 	this.casino(pokemons[0].id, pokemons[1].id, pokemons[2].id)
			// 	this.control()
			// },

			async showImages() {


				const pokemons = await getPokemonFacade();
                this.pokPrueba = pokemons;

				this.casino(this.pokPrueba[0].id, this.pokPrueba[1].id, this.pokPrueba[2].id)
				this.control()
			},


			casino(id1, id2, id3) {

				if (id1 == id2 && id2 == id3) {
					this.puntaje += 5;
				}
				if (id1 == id2 || id1 == id3 || id2 == id3) {
					this.puntaje += 2;
				}
				this.intentos++;
			},

			control() {
				if (this.intentos <= 5) {
					if (this.puntaje >= 5) {
						this.ganar = true;
						this.mostrar = true;
					}
				} else {
					this.ganar = false;
					this.mostrar = true;
				}
			},

			reiniciar() {
				this.puntaje = 0,
				this.intentos = 0
				this.ganar = false
				this.mostrar = false

				this.imagenes[0] = this.defaultImg
				this.imagenes[1] = this.defaultImg
				this.imagenes[2] = this.defaultImg

				this.nombres[0] = this.defaultName
				this.nombres[1] = this.defaultName
				this.nombres[2] = this.defaultName

                this.pokPrueba = [this.defaultPokemon, this.defaultPokemon, this.defaultPokemon]

			}


		},
	}
  </script>
  
  <style scoped>
	.contenedor {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.texto {
		display: flex;
		justify-content: center;
		gap: 10px;
	}
</style>