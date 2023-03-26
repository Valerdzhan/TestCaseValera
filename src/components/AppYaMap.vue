<template>
	<div>
		<div ref="yamaps"></div>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue"
import useYandex from "./hooks/yandex"
import { refType, YandexType } from "@/types/yandexType"

export default defineComponent({
	setup() {
		const yamaps = ref<refType>(null)

		const initMap = () => {
			const options: YandexType = {
				el: yamaps.value,
				coordinate: [66.084539, 76.680956],
				zoom: 12,
			}
			useYandex(options)
		}

		onMounted(initMap)

		return { yamaps }
	},
})
</script>

<style scoped></style>
