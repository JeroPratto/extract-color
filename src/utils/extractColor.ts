import Vibrant from 'node-vibrant'
import { Swatch } from 'node-vibrant/lib/color'

export default async function extractColor(file: File) {
	const imageUrl = URL.createObjectURL(file)
	const colors = await Vibrant.from(imageUrl).getPalette()
	const swatches = [
		colors.Vibrant,
		colors.Muted,
		colors.DarkVibrant,
		colors.DarkMuted,
		colors.LightVibrant,
		colors.LightMuted,
	]
	const colorsResult = swatches
		.filter((swatch: Swatch | undefined) => swatch && swatch.population > 0)
		.map((swatch: Swatch | undefined) => {
			return {
				rgbString: swatch!.rgb,
				hex: swatch!.hex,
				population: swatch!.population,
			}
		})
	return {
		src: imageUrl,
		colors: colorsResult,
	}
}
