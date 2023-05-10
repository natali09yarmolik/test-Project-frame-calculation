import {ListType} from "project/types";

const InitialState = {
    list: {} as ListType,
    countList: 0,
    priceLists: 0,
}

type InitialStateType = typeof InitialState


export const listReducer = (state: InitialStateType = InitialState,action: ActionsType) => {
    switch (action.type) {
        case "SET_LIST":
            return {...state, list: action.payload.list}
        case "SET_COUNT_AND_PRICE_LIST":
            return {...state, countList: action.payload.countList, priceLists: action.payload.priceLists}
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

type SetCountAndPriceListACType = ReturnType<typeof setCountAndPriceListAC>
type SetListType = ReturnType<typeof setListAC>
type ActionsType = SetListType |
                   SetCountAndPriceListACType