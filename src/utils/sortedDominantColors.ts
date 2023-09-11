export default function sortedDominantColors(dominantColor: any) {
	const sortedColors = dominantColor.sort((a: any, b: any) => {
		if (a.population > b.population) return -1
		if (a.population < b.population) return 1
		return 0
	})
	return sortedColors
}
