<template>
	<div>
		<div id="yamaps" ref="yamaps" :style="style"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, PropType, computed } from "vue"
import useYandex from "./hooks/yandex"
import { refType, YandexType, YandexCoordinate } from "@/types/yandexType"

export default defineComponent({
	props: {
		coordinate: {
			type: Object as PropType<YandexCoordinate>,
			required: true,
		},
		markerCoordinate: {
			type: Object as PropType<YandexCoordinate>,
			required: true,
		},
		zoom: {
			type: Number,
			default: 10,
		},
		width: {
			type: Number,
			default: 400,
		},
		height: {
			type: Number,
			default: 600,
		},
	},
	setup(props) {
		const { coordinate, markerCoordinate, zoom, width, height } =
			ref(props).value
		const yamaps = ref<refType>(null)

		const style = computed(() => {
			return {
				width: `${width}px`,
				height: `${height}px`,
			}
		})

		const init = async () => {
			const options: YandexType = {
				el: yamaps.value,
				coordinate: coordinate,
				zoom: zoom,
				markerCoordinate: markerCoordinate,
			}

			const { initYandexMap } = useYandex(options)

			await initYandexMap()
		}

		onMounted(init)

		return { yamaps, style }
	},
})
</script>

<style scoped></style>
