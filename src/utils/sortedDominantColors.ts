import { Swatch } from 'node-vibrant/lib/color'

export default function sortedDominantColors(dominantColor: Swatch[]) {
	const sortedColors = dominantColor.sort((a: Swatch, b: Swatch) => {
		if (a.population > b.population) return -1
		if (a.population < b.population) return 1
		return 0
	})
	return sortedColors
}
