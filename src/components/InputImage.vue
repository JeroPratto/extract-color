<template>
	<label
		for="images"
		class="drop-container"
		ref="dropContainer"
		id="dropcontainer"
		@dragover="handleDragOver"
		@dragend="handleDragend"
		@dragleave="handleDragLeave"
		@drop="handleDrop"
	>
		<p class="drop-title">Extracts the color palette of an image</p>
		<div class="containerImage">
			<img src="/uploadIcon.svg" alt="arrastra y solta el archivo" />
		</div>
		<p>Drag and drop the file</p>
		<p>or <i class="selectFile">Select a file</i> on your computer</p>
		<input
			type="file"
			accept="image/*"
			id="images"
			required
			ref="fileInput"
			name="fileInput"
			@change="handlechange"
			class="inputFile"
		/>
	</label>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const emits = defineEmits(['imageUpload'])
const fileInput = ref()
const dropContainer = ref()

const handlechange = (event: Event) => {
	const target = event.target as HTMLInputElement
	const file = target.files?.[0]
	emits('imageUpload', file)
}

const handleDragOver = (event: DragEvent) => {
	event.preventDefault()
	dropContainer.value.classList.add('drag-active')
}

const handleDragend = () => dropContainer.value.classList.add('drag-active')

const handleDragLeave = () =>
	dropContainer.value.classList.remove('drag-active')

const handleDrop = (event: DragEvent) => {
	event.preventDefault()
	dropContainer.value.classList.remove('drag-active')
	const file = event.dataTransfer!.files[0]
	emits('imageUpload', file)
}
</script>

<style scoped>
.drop-container {
	position: relative;
	display: flex;
	gap: 10px;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30em;
	max-width: 95%;
	margin: 1em auto;
	padding: 20px;
	border-radius: 10px;
	border: 2px dashed #aaa;
	color: #444;
	cursor: pointer;
	transition:
		background 0.2s ease-in-out,
		border 0.2s ease-in-out;
}

.drop-container:hover,
.drop-container.drag-active {
	background: #eee;
	border-color: #111;
}

.drop-container:hover .drop-title,
.drop-container.drag-active .drop-title {
	color: #222;
}

.drop-title {
	color: #444;
	font-size: 20px;
	font-weight: bold;
	text-align: center;
	transition: color 0.2s ease-in-out;
}

.selectFile {
	color: #084cdf;
}

.inputFile {
	display: none;
}

.containerImage {
	height: 100px;
	width: 100%;
}
.containerImage img {
	height: 100%;
	width: 100%;
}
@media screen and (max-width: 700px) {
}
</style>
