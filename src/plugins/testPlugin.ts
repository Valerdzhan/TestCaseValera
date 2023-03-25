import { defineComponent, h } from "vue"

export default {
	install: (app: any) => {
		app.component("AppTest", TestComponent)
	},
}

const TestComponent = defineComponent({
	name: "AppTest",
	setup() {
		return () => h("div", { class: "test" }, ["test"])
	},
})
