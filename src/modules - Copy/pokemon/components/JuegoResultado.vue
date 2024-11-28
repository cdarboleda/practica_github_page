<template>
	<div v-if="!ganar" class="container1">
		<h1>Haz utilizado tus 5 intentos</h1>
		<h1>El juego ha terminado, intentalo nuevamente!</h1>
	</div>

	<div v-if="ganar" class="container2">
		<h1>Puntaje: <span>{{puntaje}}</span></h1>
		<img
			src="https://www.icegif.com/wp-content/uploads/2023/05/icegif-104.gif"
			alt="NO carga"
		/>
		<h1>Felicitaciones has ganado pe ctm</h1>
	</div>
</template>

<script>
	export default {

		props: {
			puntaje: {
				type: Number,
				required: true,
			},
            ganar : {
                type:Boolean,
                required:true,
            }
		}

	}
</script>

<style>
</style>