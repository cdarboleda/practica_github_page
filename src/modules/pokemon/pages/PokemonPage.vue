<template>
	<div class="contenedor" >
		<div v-if="!mostrar">
			<div class="texto">
				<span>Puntaje: {{ puntaje }}</span>
				<span>Intentos: {{ intentos }}</span>
			</div>

			<PokemonImagen v-bind:arregloPokemons="arregloPokemons" />
			<button @:click="casino">JUGAR</button>
		</div>

		<div v-if="mostrar">
			<JuegoResultado :puntaje="puntaje" :ganar="ganar" />
			<button @:click="reiniciar">Reiniciar</button>
		</div>
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
				name: defaultName,
				id: 0,
				img: defaultImg,
			};

			return {
				puntaje: 0,
				intentos: 0,
				defaultImg: defaultImg,
				defaultName: defaultName,
				defaultPokemon: defaultPokemon,

				ganar: false,
				mostrar: false,

				arregloPokemons: [defaultPokemon, defaultPokemon, defaultPokemon]
			};
		},

		methods: {
			async casino() {

				this.arregloPokemons = await getPokemonFacade();
				this.puntajeLogica(this.arregloIdPokemons())
				this.control()
			},

			arregloIdPokemons() {
				const arregloIds = []
				this.arregloPokemons.forEach(pokemon => {
					arregloIds.push(pokemon.id)
				})

				return arregloIds;
			},


			puntajeLogica([id1, id2, id3] = []) {

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
					this.mostrar = true;
				}
			},

			reiniciar() {
				this.puntaje = 0,
				this.intentos = 0
				this.ganar = false
				this.mostrar = false

				this.arregloPokemons = [this.defaultPokemon, this.defaultPokemon, this.defaultPokemon]

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
		gap: 200px;
	}
</style>