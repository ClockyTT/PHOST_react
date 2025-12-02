import { legacy_createStore as createStore, combineReducers } from "redux";
import { authReducer } from "./Reducers/authReducer";
import { modalReducer } from "./Reducers/modalReducer";
import { profileReducer } from "./Reducers/profileReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  modal: modalReducer,
  profile: profileReducer,
});

export const store = createStore(rootReducer);
