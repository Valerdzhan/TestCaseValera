import { YandexType } from "@/types/yandexType"
import type { LngLat } from "@yandex/ymaps3-types"
import { onMounted } from "vue"

export default function useYandex(options: YandexType) {
	const { el, coordinate, zoom } = options

	const init = async () =>
		new Promise((resolve) => {
			if (typeof ymaps3 !== "undefined") {
				return ymaps3.ready.then(() => resolve(ymaps3))
			}

			const script = document.createElement("script")
			script.src = `https://api-maps.yandex.ru/3.0/?apikey=${process.env.VUE_APP_YANDEX_KEY}&lang=ru_RU`
			script.onload = resolve

			el?.appendChild(script)
		}).then(() => {
			setYMap()
		})

	const setYMap = () => {
		const ydiv: HTMLElement = document.createElement("div")
		ydiv.style.width = "400px"
		ydiv.style.height = "400px"

		el?.appendChild(ydiv)

		new ymaps3.YMap(ydiv, {
			location: {
				center: coordinate as LngLat,
				zoom: zoom,
			},
		})
	}

	init()

	return {}
}
