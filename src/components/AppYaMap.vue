<template>
	<div>
		<div id="yamaps" ref="yamaps"></div>
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
				coordinate: [66.084539, 76.680956],
				zoom: 12,
			}
			const { setYMap } = useYandex(options)

			await setYMap()
		}

		onMounted(init)

		return { yamaps }
	},
})
</script>

<style scoped></style>
