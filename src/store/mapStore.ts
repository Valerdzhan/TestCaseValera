import { ref } from "vue"
import { defineStore } from "pinia"

export const useMapStore = defineStore("maps", () => {
	const coordinates = ref([])

	return { coordinates }
})
