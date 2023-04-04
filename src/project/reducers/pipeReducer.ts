const InitialState = {
    pipe: {} as PipeType,
    countPipe: 0,
    pricePipes: 0,
}
type InitialStateType = typeof InitialState

export type PipeType = {
    type: string,
    name: string,
    unit: string,
    width: number,
    price: number
}
export const pipeReducer = (state: InitialStateType = InitialState, action: ActionsType) => {
    switch (action.type) {
        case "SET_PIPE":
            return {...state, pipe: action.payload.pipe}
        case "SET_COUNT_AND_PRICE_PIPE":
            return {...state, countPipe: action.payload.countPipe, pricePipes: action.payload.pricePipes}
        default:
            return state
    }
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

type SetCountAndPricePipeACType = ReturnType<typeof setCountAndPricePipeAC>
type SetPipeType = ReturnType<typeof setPipeAC>
type ActionsType = SetPipeType |
     SetCountAndPricePipeACType