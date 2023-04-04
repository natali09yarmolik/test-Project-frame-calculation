export const countPipeWidth = (widthConstruction: number, stepPipe: number, widthPipe: number) => {
    return Math.ceil((widthConstruction - (widthPipe / 1000)) / stepPipe)
}