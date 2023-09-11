<template>
	<div>
		<InputImage v-on:imageUpload="handleImageUpload" v-if="!imageSrc" />
		<div v-else class="containerOtherAndView">
			<ViewDominantColors
				:sortedDominant="sortedDominant"
				:imageSrc="imageSrc"
				v-on:clearImage="handleClearImage"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { Ref, computed, ref } from 'vue'
import InputImage from './InputImage.vue'
import ViewDominantColors from './ViewDominantColors.vue'
import { ColorModel } from '@/models/ColorModel'
import sortedDominantColors from '@/utils/sortedDominantColors'
import extractColor from '@/utils/extractColor'

let imageSrc: Ref<string> = ref('')
let dominantColors: Ref = ref<Array<ColorModel> | null>(null)

const handleClearImage = () => {
	imageSrc.value = ''
}

const sortedDominant = computed(() => {
	return sortedDominantColors(dominantColors.value)
})
const handleImageUpload = async (file: File) => {
	if (file) {
		const { src, colors } = await extractColor(file)
		imageSrc.value = src
		dominantColors.value = colors
	}
}
</script>

<style scoped>
.containerOtherAndView {
	margin-top: 50px;
	display: flex;
	justify-content: center;
	flex-direction: column;
}
.otherImage {
	color: #084cdf;
	width: 200px;
	max-width: 100%;
	margin: 0 auto 30px auto;
}
</style>
