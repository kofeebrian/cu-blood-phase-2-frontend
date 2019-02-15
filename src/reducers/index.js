import { combineReducers } from "redux";
import authReducer from "./authReducer";
import staffReducer from "./staffReducer";

export default combineReducers({
	auth: authReducer,
	staffs: staffReducer
});
