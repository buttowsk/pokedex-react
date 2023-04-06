import { useEffect, useState } from 'react';
import ColorThief from 'colorthief';

export const useColors = () => {
	const [bgColor, setBgColor] = useState(null);

	const getDominantColor = (imageUrl) => {
		const img = new Image();
		img.crossOrigin = "Anonymous";
		img.src = imageUrl;
		return new Promise((resolve) => {
			img.onload = () => {
				const colorThief = new ColorThief();
				const color = colorThief.getColor(img);
				resolve(color);
			};
		});
	}

	const useGetBgColor = (imageUrl) => {
		useEffect(() => {
			getDominantColor(imageUrl)
				.then((color) => setBgColor(color))
				.catch((err) => console.error(err));
		}, [imageUrl]);

		const formattedColor = bgColor ? `rgb(${bgColor.join(', ')})` : '';

		return formattedColor;
	}

	const getTextColor = (r, g, b) => {
		// Calcula a luminosidade relativa da cor
		const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
		// Verifica se a luminosidade é menor que 0,5 (cor escura)
		if (luminance < 0.5) {
			return "#ECF2FF"
		} else {
			return "#2E3840"
		}
	}

	return { useGetBgColor, getTextColor };
}