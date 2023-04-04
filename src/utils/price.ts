export const price = (count: number, priceMaterial: number) => {
    return +(count * priceMaterial).toFixed(2)
}