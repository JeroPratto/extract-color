<script setup lang="ts">
import LogicalContainer from './components/LogicalContainer.vue'
</script>

<template>
	<h1 class="title">Extract Color</h1>
	<p class="description">Get palette from your photos</p>
	<LogicalContainer />
</template>

<style scoped>
.title {
	margin: 20px 0 10px 0;
	font-size: 3em;
	text-align: center;
}
.description {
	color: #7d7c83;
	font-size: 1.5em;
	text-align: center;
	margin-bottom: 20px;
}
</style>
