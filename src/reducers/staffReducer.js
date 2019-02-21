import {
	FETCH_STAFFS,
	DELETE_STAFF,
	CREATE_STAFF,
	EDIT_STAFF,
	FETCH_STAFF
} from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STAFFS:
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case FETCH_STAFF:
			return { ...state, [action.payload.id]: action.payload };
		case CREATE_STAFF:
			return { ...state, [action.payload.userId]: action.payload };
		case EDIT_STAFF:
			return { ...state, [action.payload.userId]: action.payload };
		case DELETE_STAFF:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
