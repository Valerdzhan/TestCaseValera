<template>
	<div class="mb-2">Вы на сайте уже {{ time }} секунд</div>
	<button @click="reset" class="px-6 py-1 border rounded-md border-gray-800">
		Reset
	</button>
</template>

<script setup lang="ts">
import useTimer from "./hooks/timer"

const { time, reset } = useTimer()
</script>

<style scoped></style>
