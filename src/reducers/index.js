import { combineReducers } from "redux";
import authReducer from "./authReducer";
import staffReducer from "./staffReducer";
import userReducer from "./userReducer";

export default combineReducers({
	auth: authReducer,
	staffs: staffReducer,
	user: userReducer
});
