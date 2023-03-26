import { YandexType } from "@/types/yandexType"
import type { LngLat } from "@yandex/ymaps3-types"

export default function useYandex(options: YandexType) {
	const { el, coordinate, zoom, markerCoordinate } = options

	const initYandexMap = async () => {
		await ymaps3.ready
		const { YMapZoomControl, YMapGeolocationControl } = await ymaps3.import(
			"@yandex/ymaps3-controls@0.0.1"
		)
		const { YMapDefaultMarker } = await ymaps3.import(
			"@yandex/ymaps3-markers@0.0.1"
		)

		const map = new ymaps3.YMap(el as HTMLElement, {
			location: {
				center: coordinate as LngLat,
				zoom: zoom,
			},
		})

		map.addChild(new ymaps3.YMapDefaultSchemeLayer({}))
		map.addChild(new ymaps3.YMapDefaultFeaturesLayer({}))
		map.addChild(
			new ymaps3.YMapControls({ position: "right" })
				.addChild(new YMapZoomControl({}))
				.addChild(new YMapGeolocationControl({}))
		)
		map.addChild(
			new YMapDefaultMarker({
				coordinates: markerCoordinate as LngLat,
			})
		)
	}

	return { initYandexMap }
}
