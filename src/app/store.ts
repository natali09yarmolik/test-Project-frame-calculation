import {combineReducers, legacy_createStore} from "redux";
import {listReducer} from "../project/reducers/listReducer";
import {pipeReducer} from "../project/reducers/pipeReducer";
import {fixReducer} from "../project/reducers/fixReducer";
import {resultReducer} from "../project/reducers/resultReducer";
import {TypedUseSelectorHook, useSelector} from "react-redux";

const rootReducer = combineReducers({
  list: listReducer,
  pipe: pipeReducer,
  fix: fixReducer,
  result: resultReducer,
})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store