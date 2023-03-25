import { createApp } from "vue"
import App from "./App.vue"
import router from "./router"
import { createPinia } from "pinia"
import "@/assets/css/tailwind.css"
import testPlugin from "./plugins/testPlugin"

const pinia = createPinia()
const app = createApp(App)
app.use(router)
app.use(pinia)
app.use(testPlugin)

app.mount("#app")
