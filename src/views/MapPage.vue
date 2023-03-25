<template>
	<div>Map</div>
	<AppYaMap />
</template>

<script lang="ts">
import AppYaMap from "@/components/AppYaMap.vue"
import { defineComponent } from "vue"

export default defineComponent({
	setup() {
		return {}
	},
	components: { AppYaMap },
})
</script>

<style scoped></style>
