export default function useClipboard() {
	const copy = (value: any) => {
		const boolValue = !!value

		if (!boolValue) {
			console.log("Value is not found")
			return
		}

		const currentValue = JSON.stringify(value)
		navigator.clipboard.writeText(currentValue)
	}

	return { copy }
}
