import { ColorModel } from '@/models/ColorModel'

export default function sortedDominantColors(dominantColor: ColorModel[]) {
	console.log(dominantColor)
	const sortedColors = dominantColor.sort((a: ColorModel, b: ColorModel) => {
		if (a.population > b.population) return -1
		if (a.population < b.population) return 1
		return 0
	})
	return sortedColors
}
