<template>
	<div v-if="load" class="loading">
		<p>Loading...</p>
	</div>
	<div v-else>
		<div class="containerImage">
			<button @click="() => emit('clearImage')" class="btnClear">
				Other Image
			</button>
			<!-- muestra la imagen cargada -->
			<img :src="imageSrc" alt="Imagen" class="image" />
		</div>
		<div class="container">
			<div
				v-for="(color, index) in sortedDominant"
				:key="index"
				class="containerColor"
			>
				<div
					class="bgColor"
					:style="{
						backgroundColor: color.hex,
					}"
				></div>
				<p class="hex">{{ color.hex }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ColorModel } from '@/models/ColorModel'

const emit = defineEmits(['clearImage'])
const props = defineProps({
	imageSrc: { type: String, required: true },
	sortedDominant: { type: Array<ColorModel>, required: true },
})

let load = ref(true)
let aspectRatio = ref()
let witdh = ref()

const image = new Image()
image.src = props.imageSrc
image.onload = () => {
	witdh.value = image.width
	aspectRatio.value = image.width / image.height
	load.value = false
}
</script>

<style scoped>
.containerImage {
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	aspect-ratio: v-bind(aspectRatio);
	width: v-bind(witdh);
	max-width: 500px;
	margin: 0 auto;
}
.btnClear {
	cursor: pointer;
	position: absolute;
	top: -20px;
	left: 0;
	background-color: #000;
	color: #fff;
	padding: 10px;
	border: none;
	border-radius: 10px;
	box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.5);
}
.image {
	width: 100%;
	height: 100%;
}
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 1000px;
	padding: 20px 0 100px 0;
	margin: 0 auto;
}
.containerColor {
	width: 100%;
}
.bgColor {
	width: 100%;
	aspect-ratio: 1/0.6;
}
.hex {
	padding-top: 5px;
	text-transform: uppercase;
	color: #4b4b4b;
}
.loading {
	width: 100%;
}
.loading p {
	text-align: center;
}
@media screen and (max-width: 650px) {
	.container {
		flex-wrap: wrap;
	}
	.bgColor {
		aspect-ratio: 1/0.1;
	}
}
</style>
