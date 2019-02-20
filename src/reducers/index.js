import { combineReducers } from "redux";
import authReducer from "./authReducer";
import staffReducer from "./staffReducer";
import clientReducer from "./clientReducer";

export default combineReducers({
	auth: authReducer,
	staffs: staffReducer,
	client: clientReducer
});
