import { useEffect, useState } from 'react';
import ColorThief from 'colorthief';

export const useColors = () => {
  const [bgColor, setBgColor] = useState(null);

  const getDominantColor = (imageUrl) => {
    const img = new Image();
    img.crossOrigin = 'Anonymous';
    img.src = imageUrl;
    return new Promise((resolve) => {
      img.onload = () => {
        const colorThief = new ColorThief();
        const color = colorThief.getColor(img);
        resolve(color);
      };
    });
  };

  const useGetBgColor = (imageUrl) => {
    useEffect(() => {
      getDominantColor(imageUrl)
        .then((color) => setBgColor(color))
        .catch((err) => console.error(err));
    }, [imageUrl]);

    return bgColor ? `rgb(${ bgColor.join(', ') })` : '';
  };

  const getTextColor = (background) => {
    const [r, g, b] = background.replace(/[^\d,]/g, '').split(',');

    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;

    const luminance = 0.2126 * normalizedR + 0.7152 * normalizedG + 0.0722 * normalizedB;

    if (luminance < 0.8) {
      return '#ECF2FF';
    } else {
      return '#262A56';
    }
  };

  return { useGetBgColor, getTextColor };
};