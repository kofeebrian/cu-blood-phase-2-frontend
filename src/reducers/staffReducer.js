import { FETCH_STAFFS, DELETE_STAFF } from "../actions/types";
import _ from "lodash";

export default (state = {}, action) => {
	switch (action.type) {
		case FETCH_STAFFS:
			return { ...state, ..._.mapKeys(action.payload, "id") };
		case DELETE_STAFF:
			return _.omit(state, action.payload);
		default:
			return state;
	}
};
