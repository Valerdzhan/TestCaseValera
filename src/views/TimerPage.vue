<template>
	<div>Время нахождения на сайте</div>
	<AppTimer />
</template>

<script lang="ts">
import AppTimer from "@/components/AppTimer.vue"
import { defineComponent } from "vue"

export default defineComponent({
	components: { AppTimer },
})
</script>

<style scoped></style>
