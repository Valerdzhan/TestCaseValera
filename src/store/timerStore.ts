import { ref } from "vue"
import { defineStore } from "pinia"

export const useTimerStore = defineStore("timer", () => {
	const lsKey = "times"
	const time = ref(0)
	const isLocalStoreError = ref(false)

	const startTimer = () => {
		checkLocalStore()
		getLocalTime()
		setInterval(() => {
			time.value++
			setLocalTime()
		}, 1000)
	}

	const checkLocalStore = () => {
		try {
			if (window.localStorage === undefined) {
				isLocalStoreError.value = true
			}
		} catch (e) {
			isLocalStoreError.value = true
		}
	}

	const reset = () => {
		console.log("reset")
		time.value = 0
		if (!isLocalStoreError.value) {
			window.localStorage.removeItem(lsKey)
		}
	}

	const getLocalTime = () => {
		if (isLocalStoreError.value) return

		const localTime = JSON.parse(window.localStorage.getItem(lsKey) ?? "0")
		console.log(localTime)
		console.log(time.value)
		time.value = localTime
	}

	const setLocalTime = () => {
		if (!isLocalStoreError.value) {
			console.log(JSON.stringify(time.value))
			console.log(time.value)
			window.localStorage.setItem(lsKey, JSON.stringify(time.value))
		}
	}

	return { time, startTimer, reset }
})
