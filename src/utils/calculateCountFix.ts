import config from './../data/config.json'
import {square} from "./square";

export const calculateCountFix = (widthConstruction: number, lengthConstruction: number, materialList: string) => {
    const squareC = square(widthConstruction, lengthConstruction)
    const type = config.filter((type) => (type.type === 'fix' ? (type.key === materialList ? type : '') : ''))
    if (type[0].value) {
        return Math.ceil(type[0].value * squareC)
    } else return 0
}
