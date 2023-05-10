export const calculateCellsSize = (size: number, widthPipe: number, countCells:number)=>{
return +(((size - widthPipe/1000) / countCells) - widthPipe/1000).toFixed(3)
}