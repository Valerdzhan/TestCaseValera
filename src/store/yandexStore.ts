import { YandexCoordinate } from "@/types/yandexType"
import { defineStore } from "pinia"

export const useYandexStore = defineStore("yandex", {
	state: () => {
		return {
			coordinate: [
				76.67697540222169, 66.08869000789291,
			] as YandexCoordinate,
			markerCoordinate: [
				76.67697540222169, 66.08869000789291,
			] as YandexCoordinate,
		}
	},
})
