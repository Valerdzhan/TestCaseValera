import { YandexType } from "@/types/yandexType"
import type { LngLat } from "@yandex/ymaps3-types"

export default function useYandex(options: YandexType) {
	const { el, coordinate, zoom } = options

	// const init = async () =>
	// 	new Promise((resolve) => {
	// 		if (typeof ymaps3 !== "undefined") {
	// 			return ymaps3.ready.then(() => resolve(ymaps3))
	// 		}

	// 		const script = document.createElement("script")
	// 		script.src = `https://api-maps.yandex.ru/3.0/?apikey=${process.env.VUE_APP_YANDEX_KEY}&lang=ru_RU`
	// 		script.onload = () => resolve

	// 		document.body.appendChild(script)
	// 	})

	const setYMap = async () => {
		// await init()

		const ydiv: HTMLElement = document.createElement("div")
		ydiv.style.width = "400px"
		ydiv.style.height = "400px"

		el?.appendChild(ydiv)

		const map = new ymaps3.YMap(
			document.getElementById("root") as HTMLElement,
			{
				location: {
					center: [35, 55] as LngLat,
					zoom: 12,
				},
			}
		)
	}

	return { setYMap }
}
