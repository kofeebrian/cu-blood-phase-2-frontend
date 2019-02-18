import { VERIFY_CODE, CHECK_IN, CHECK_OUT } from "../actions/types";

const INIT_STATE = {
	result: null
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case VERIFY_CODE:
			return { ...state, result: action.payload.result };
		case CHECK_IN:
			return { ...state, result: null }; // clear an user
		case CHECK_OUT:
			return { ...state, result: null }; // clear an user
		default:
			return state;
	}
};
