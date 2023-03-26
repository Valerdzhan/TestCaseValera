export type refType = HTMLElement | null

export type YandexCoordinate = [number, number]
export interface YandexType {
	el: refType
	coordinate: YandexCoordinate
	zoom: number
	markerCoordinate?: YandexCoordinate
}
