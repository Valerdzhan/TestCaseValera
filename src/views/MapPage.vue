<template>
	<div>Map</div>
	<AppYaMap
		:coordinate="coordinate"
		:marker-coordinate="markerCoordinate"
		:zoom="13"
	/>
</template>

<script lang="ts">
import AppYaMap from "@/components/AppYaMap.vue"
import { useYandexStore } from "@/store/yandexStore"
import { storeToRefs } from "pinia"
import { defineComponent } from "vue"

export default defineComponent({
	setup() {
		const storeYandex = useYandexStore()

		const { coordinate, markerCoordinate } = storeToRefs(storeYandex)

		return { coordinate, markerCoordinate }
	},
	components: { AppYaMap },
})
</script>

<style scoped></style>
