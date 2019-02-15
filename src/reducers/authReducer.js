// import { SIGN_IN, SIGN_OUT, FETCH_USER } from "../actions/types";

const INIT_STATE = {
	isSignedIn: false,
	userId: null,
	priority: "Admin"
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
