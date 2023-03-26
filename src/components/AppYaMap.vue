<template>
	<div>
		<div id="yamaps" ref="yamaps" style="width: 400xp; height: 400px"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
import useYandex from "./hooks/yandex"
import { refType, YandexType } from "@/types/yandexType"

export default defineComponent({
	setup() {
		const yamaps = ref<refType>(null)

		const init = async () => {
			const options: YandexType = {
				el: yamaps.value,
				coordinate: [76.67697540222169, 66.08869000789291],
				zoom: 13,
				markerCoordinate: [76.67697540222169, 66.08869000789291],
			}

			const { initYandexMap } = useYandex(options)

			await initYandexMap()
		}

		onMounted(init)

		return { yamaps }
	},
})
</script>

<style scoped></style>
