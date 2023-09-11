import Vibrant from 'node-vibrant/dist/vibrant.js'

export default async function extractColor(file: File) {
	const imageUrl = URL.createObjectURL(file)
	const vibrant = new Vibrant(imageUrl, {
		colorCount: 200,
	})
	const palette = await vibrant.getPalette()
	const swatches = [
		palette.Vibrant,
		palette.Muted,
		palette.DarkVibrant,
		palette.DarkMuted,
		palette.LightVibrant,
		palette.LightMuted,
	]
	const colors = swatches
		.filter((swatch) => swatch)
		.map((swatch) => {
			return {
				rgbString: swatch!.rgb,
				hex: swatch!.hex,
				population: swatch!.population,
			}
		})
	return {
		src: imageUrl,
		colors: colors,
	}
}
