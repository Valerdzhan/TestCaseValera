<template>
	<div class="px-4 py-2 border">
		<label class="text-sm text-gray-500 font-light">{{ label }}</label>
		<div class="whitespace-pre">
			{{ text }}
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	props: {
		label: {
			type: String,
			required: true,
			default: "label",
		},
		text: {
			type: String,
			required: true,
			default: "text",
		},
	},
	setup() {
		return {}
	},
})
</script>

<style scoped></style>
