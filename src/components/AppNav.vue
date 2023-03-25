<template>
	<header class="shadow-md">
		<nav
			class="h-[50px] flex justify-between items-center px-6 py-2 bg-gray-800 text-white"
		>
			<div class="font-bold">Тестовое задание</div>
			<ul class="flex flex-row space-x-2">
				<li><RouterLink to="/" class="btn">Home</RouterLink></li>
				<li><RouterLink to="/map" class="btn">Map</RouterLink></li>
				<li>
					<RouterLink to="/timer-page" class="btn">Timer</RouterLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
	setup() {
		return {}
	},
})
</script>

<style scoped>
.router-link-exact-active {
	@apply bg-gray-900;
}
</style>
