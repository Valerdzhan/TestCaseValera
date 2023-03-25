import { useTimerStore } from "@/store/timerStore"
import { storeToRefs } from "pinia"

export default function useTimer() {
	const storeTimer = useTimerStore()

	const { time } = storeToRefs(storeTimer)

	const { reset } = storeTimer

	return { time, reset }
}
