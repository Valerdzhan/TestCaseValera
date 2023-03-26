<template>
	<div class="mb-2">Вы на сайте уже {{ time }} секунд</div>
	<div class="flex flex-row space-x-2">
		<button
			@click="reset"
			class="px-6 py-1 border rounded-md border-gray-800"
		>
			Reset
		</button>
		<button
			@click="copyValue"
			class="px-6 py-1 border rounded-md border-gray-800"
		>
			Copy!
		</button>
	</div>
</template>

<script setup lang="ts">
import useTimer from "./hooks/timer"
import useClipboard from "./hooks/clipboard"

const { copy } = useClipboard()
const { time, reset } = useTimer()

const copyValue = () => {
	copy(time.value)
}
</script>

<style scoped></style>
