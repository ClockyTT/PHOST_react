import { legacy_createStore as createStore } from "redux"
import { logReducer } from "./Reducers/logReducer"

export const store = createStore(logReducer)