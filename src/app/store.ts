import {combineReducers, legacy_createStore} from "redux";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {projectReducer} from "project/reducers/projectReducer";

const rootReducer = combineReducers({
  project: projectReducer,

})

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>
export const useAppSelector: TypedUseSelectorHook<AppRootStateType> = useSelector
// а это, чтобы можно было в консоли браузера обращаться к store в любой момент
// @ts-ignore
window.store = store