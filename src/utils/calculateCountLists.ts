export const calculateCountLists = (widthConstruction: number, lengthConstruction: number, widthList: number)=>{

    return Math.ceil(lengthConstruction)*Math.ceil(widthConstruction/widthList)
}