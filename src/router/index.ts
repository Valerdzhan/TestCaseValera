import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "home",
		component: () =>
			import(/* webpackChunkName: "home" */ "@/views/HomePage.vue"),
	},
	{
		path: "/map",
		name: "map",
		// route level code-splitting
		// this generates a separate chunk (about.[hash].js) for this route
		// which is lazy-loaded when the route is visited.
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/MapPage.vue"),
	},
	{
		path: "/timer-page",
		name: "timer-page",
		component: () =>
			import(/* webpackChunkName: "about" */ "../views/TimerPage.vue"),
	},
]

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
})

export default router
