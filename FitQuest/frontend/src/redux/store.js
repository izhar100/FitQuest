import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./authReducer/reducer";
import { reducer as adminProductReducer } from "../redux/AdminProductReducer/reducer";
import { reducer as usersReducer } from "../redux/UsersReducer/reducer";
import { reducer as deshboardReducer } from "./DeshboardRdeucer/reducer";

const rootReducer = combineReducers({
  authReducer,
  adminProductReducer,
  deshboardReducer,
   usersReducer,
});

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
