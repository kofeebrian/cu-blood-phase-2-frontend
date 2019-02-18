import { ADD_AUTH, REQUEST_SIGN_IN, REQUEST_SIGN_OUT } from "../actions/types";

const INIT_STATE = {
	isAuthenticated: false,
	user: null,
	userId: null,
	accessToken: null
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		case ADD_AUTH:
			return { ...state, user: action.payload, isAuthenticated: true };
		case REQUEST_SIGN_IN:
			return {
				...state,
				userId: action.payload.userId,
				accessToken: action.payload.id,
				isAuthenticated: true
			};
		case REQUEST_SIGN_OUT:
			return {
				...state,
				user: null,
				userId: null,
				accessToken: null,
				isAuthenticated: false
			};
		default:
			return state;
	}
};
