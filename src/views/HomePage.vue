<template>
	<h1 class="flex justify-center text-bold">{{ title }}</h1>
	<div>
		<TextField
			v-for="item in aboutMe"
			:key="item.label"
			:label="item.label"
			:text="item.value"
		/>
	</div>
</template>

<script lang="ts">
import TextField from "@/components/ui/TextField.vue"
import { defineComponent } from "vue"
interface AboutInfo {
	label: string
	value: string
}
export default defineComponent({
	name: "HomePage",
	setup() {
		const title = "Немного обо мне"
		const aboutMe: AboutInfo[] = [
			{
				label: "Фамилия Имя Отчество",
				value: "Иванов Валерий Олегович",
			},
			{
				label: "Возраст",
				value: "32 года",
			},
			{
				label: "Город",
				value: "Новый Уренгой",
			},
			{
				label: "Должность",
				value: "Ведущий инженер-программист",
			},
			{
				label: "О себе",
				value: "",
			},
			/*
			Разработал 
				Быстро учусь
			*/
		]
		return { title, aboutMe }
	},
	components: { TextField },
})
</script>

<style scoped></style>
