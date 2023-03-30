export const getColor = (r, g, b) => {
    // Calcula a luminosidade relativa da cor
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    // Verifica se a luminosidade é menor que 0,5 (cor escura)
    if (luminance < 0.5) {
        return "#ECF2FF"
    } else {
        return "#2E3840"
    }
}