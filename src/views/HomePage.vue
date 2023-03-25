<template>
	<h1 class="flex justify-center text-bold">{{ title }}</h1>
	<div>
		<TextField label="FIO" text="test" />
	</div>
</template>

<script lang="ts">
import TextField from "@/components/ui/TextField.vue"
import { defineComponent } from "vue"

export default defineComponent({
	name: "HomePage",
	setup() {
		const title = "Немного обо мне"
		return { title }
	},
	components: { TextField },
})
</script>

<style scoped></style>
