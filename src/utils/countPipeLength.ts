export const countPipeLength = (lengthConstruction: number, stepPipe: number, widthPipe: number)=>{
return Math.ceil((lengthConstruction-(widthPipe/1000))/ (stepPipe+(widthPipe/1000)))
}