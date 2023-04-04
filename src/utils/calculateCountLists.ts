export const calculateCountLists = (widthConstruction: number, lengthConstruction: number, widthList: number)=>{

    return Math.ceil(lengthConstruction/1)*Math.ceil(widthConstruction/widthList)
}