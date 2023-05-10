import {FixType, ListType,  PipeType} from "project/types";

/*const InitialState = {
    list: {} as ListType,
    countList: 0,
    priceLists: 0,
    fix: {} as FixType,
    countFix: 0,
    priceFix: 0,
    pipe: {} as PipeType,
    countPipe: 0,
    pricePipes: 0,
    square: 0,
    cellWidth: 0,
    cellLength: 0,
}*/
const InitialState = {
    /*material: {list: {} as ListType,
               fix: {} as FixType,
               pipe: {} as PipeType},
    count: {list: 0, fix: 0, pipe:0},
    price: {list: 0 as number, fix: 0, pipe:0},*/
    list: {} as ListType,
    countList: 0,
    priceLists: 0,
    fix: {} as FixType,
    countFix: 0,
    priceFix: 0,
    pipe: {} as PipeType,
    countPipe: 0,
    pricePipes: 0,
    square: 0,
    cellWidth: 0,
    cellLength: 0,
}
export type InitialStateType = typeof InitialState

export const projectReducer = (state: InitialStateType = InitialState,action: ActionsType) => {
    switch (action.type) {
        case "SET_LIST":
            return {...state, list: action.payload.list}
        case "SET_COUNT_AND_PRICE_LIST":
            return {...state, countList: action.payload.countList, priceLists: action.payload.priceLists}
        case "SET_FIX":
            return {...state, fix: action.payload.fix}
        case "SET_COUNT_AND_PRICE_FIX":
            return {...state, countFix: action.payload.countFix, priceFix: action.payload.priceFixes}
        case "SET_PIPE":
            return {...state, pipe: action.payload.pipe}
        case "SET_COUNT_AND_PRICE_PIPE":
            return {...state, countPipe: action.payload.countPipe, pricePipes: action.payload.pricePipes}
        case "SET_SQUARE":
            return {...state, square: action.payload.square}
        case "SET_SIZE_CELLS":
            return {...state, cellLength: action.payload.cellL, cellWidth: action.payload.cellW}
        default:
            return state
    }
}

export const setListAC = (list: ListType) => {
    return {
        type: 'SET_LIST',
        payload: {list}
    } as const
}
export const setCountAndPriceListAC = (countList: number, priceLists: number) => {
    return {
        type: 'SET_COUNT_AND_PRICE_LIST',
        payload: {countList, priceLists}
    } as const
}
export const setFixAC = (fix: FixType) => {
    return {
        type: 'SET_FIX',
        payload: {fix}
    } as const
}
export const setCountAndPriceFixAC = (countFix: number, priceFixes: number) => {
    return {
        type: 'SET_COUNT_AND_PRICE_FIX',
        payload: {countFix, priceFixes}
    } as const
}
export const setPipeAC = (pipe: PipeType) => {
    return {
        type: 'SET_PIPE',
        payload: {pipe}
    } as const
}
export const setCountAndPricePipeAC = (countPipe: number, pricePipes: number) => {
    return {
        type: 'SET_COUNT_AND_PRICE_PIPE',
        payload: {countPipe, pricePipes}
    } as const
}

export const setSquareAC = (square: number) => {
    return {
        type: 'SET_SQUARE',
        payload: {square}
    } as const
}
export const setSizeCellsAC = (cellW:number, cellL:number) => {
    return {
        type: 'SET_SIZE_CELLS',
        payload: {cellL, cellW}
    } as const
}
type SetSquareType = ReturnType<typeof setSquareAC>
type SetSizeCellsType = ReturnType<typeof setSizeCellsAC>


type SetCountAndPricePipeACType = ReturnType<typeof setCountAndPricePipeAC>
type SetPipeType = ReturnType<typeof setPipeAC>

type SetCountAndPriceFixACType = ReturnType<typeof setCountAndPriceFixAC>
type SetFixType = ReturnType<typeof setFixAC>
type ActionsType = SetFixType |
    SetCountAndPriceFixACType | SetListType |
    SetCountAndPriceListACType |
    SetPipeType |
    SetCountAndPricePipeACType | SetSquareType | SetSizeCellsType

type SetCountAndPriceListACType = ReturnType<typeof setCountAndPriceListAC>
type SetListType = ReturnType<typeof setListAC>
