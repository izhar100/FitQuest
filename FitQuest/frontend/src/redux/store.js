import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as adminProductReducer } from "../redux/AdminProductReducer/reducer";
import { reducer as usersReducer } from "../redux/UsersReducer/reducer";
const rootReducer = combineReducers({
  authReducer,
  adminProductReducer,
  usersReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
