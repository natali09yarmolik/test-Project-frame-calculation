import {countPipeWidth} from "./countPipeWidth";
import {countPipeLength} from "./countPipeLength";


export const calculateCountPipes = (widthConstruction: number, lengthConstruction: number, stepPipe: number, widthPipe: number)=>{
let countPipeW = countPipeWidth(widthConstruction, stepPipe, widthPipe)
let countPipeL = countPipeLength(lengthConstruction, stepPipe, widthPipe)
return Math.ceil((countPipeW+1)*lengthConstruction+(countPipeL+1)*widthConstruction)
}