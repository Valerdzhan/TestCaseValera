export type refType = HTMLElement | null
export interface YandexType {
	el: refType
	coordinate: Array<number>
	zoom: number
	markerCoordinate?: Array<number>
}
