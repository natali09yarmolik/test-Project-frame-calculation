const InitialState = {
    square: 0,
    cellWidth: 0,
    cellLength: 0,
}

type InitialStateType = typeof InitialState

export const resultReducer = (state: InitialStateType = InitialState, action: ActionsType) =>{
    switch (action.type) {
        case "SET_SQUARE":
            return {...state, square: action.payload.square}
        case "SET_SIZE_CELLS":
            return {...state, cellLength: action.payload.cellL, cellWidth: action.payload.cellW}
        default:
            return state
    }
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
type ActionsType = SetSquareType | SetSizeCellsType