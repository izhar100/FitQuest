import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as adminProductReducer } from "../redux/AdminProductReducer/reducer";
const rootReducer = combineReducers({
  authReducer,
  adminProductReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
