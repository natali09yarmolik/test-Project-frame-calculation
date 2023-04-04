const InitialState = {
    fix: {} as FixType,
    countFix: 0,
    priceFix: 0,
}
export type FixType = {
    type: string,
    name: string,
    unit: string,
    price: number,
}

type InitialStateType = typeof InitialState

export const fixReducer = (state: InitialStateType = InitialState, action: ActionsType) =>
{
    switch (action.type) {
        case "SET_FIX":
            return {...state, fix: action.payload.fix}
        case "SET_COUNT_AND_PRICE_FIX":
            return {...state, countFix: action.payload.countFix, priceFix: action.payload.priceFixes}
        default:
            return state
    }
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

type SetCountAndPriceFixACType = ReturnType<typeof setCountAndPriceFixAC>
type SetFixType = ReturnType<typeof setFixAC>
type ActionsType = SetFixType |
                   SetCountAndPriceFixACType