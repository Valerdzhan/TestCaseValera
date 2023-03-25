<template>
	<div>
		<AppNav />
		<div class="container mx-auto my-4">
			<RouterView />
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import AppNav from "./components/AppNav.vue"
import { useTimerStore } from "./store/timerStore"

export default defineComponent({
	components: { AppNav },
	setup() {
		const timerStore = useTimerStore()
		timerStore.startTimer()
		return {}
	},
})
</script>

<style scoped></style>
