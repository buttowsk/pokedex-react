import ColorThief from "colorthief";


export const getDominantColor = (imageUrl) => {
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