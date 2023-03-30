import {getDominantColor} from "../getDominantColor/index.js";
import {useEffect, useState} from "react";

export const useGetBgColor = (imageUrl) => {
    const [bgColor, setBgColor] = useState(null);

    useEffect(() => {
        getDominantColor(imageUrl)
            .then((color) => setBgColor(color))
            .catch((err) => console.error(err));
    }, [imageUrl]);

    const formattedColor = bgColor ? `rgb(${bgColor.join(', ')})` : '';

    return formattedColor;
}