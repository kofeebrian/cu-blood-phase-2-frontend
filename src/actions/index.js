import {
	VERIFY_CODE,
	CHECK_IN,
	CHECK_OUT,
	ADD_AUTH,
	REQUEST_SIGN_IN,
	REQUEST_SIGN_OUT,
	FETCH_STAFFS,
	FETCH_STAFF,
	DELETE_STAFF,
	EDIT_STAFF,
	APPROVE_STAFF,
	PROMOTE_STAFF
} from "./types";
import users from "../apis/users";
import staffs from "../apis/staffs";
import history from "../history";

// CLIENT CU BLOOD ACTIONS
export const verifyCode = code => async dispatch => {
	const res = await users.request({
		method: "POST",
		url: "users/verify",
		data: {
			code
		}
	});
	console.log("Request Done!");
	// console.log(res);
	dispatch({ type: VERIFY_CODE, payload: res.data });
};

export const checkIn = (code, cb) => async dispatch => {
	try {
		await users.request({
			method: "PUT",
			url: "users/check-in",
			data: {
				code
			}
		});
		console.log("REQUEST CHECKIN Done!");
		dispatch({ type: CHECK_IN });
		cb("CHECKIN SUCCESS");
	} catch (err) {
		console.log(err);
		cb("CHECKIN FAIL");
	}
};

export const checkOut = (code, status, cb) => async dispatch => {
	try {
		await users.request({
			method: "PUT",
			url: "users/check-out",
			data: {
				code,
				status
			}
		});
		console.log("REQUEST CHECKOUT Done!");
		dispatch({ type: CHECK_OUT });
		cb("CHECKOUT SUCCESS");
	} catch (err) {
		console.log(err);
		cb("CHECKOUT FAIL");
	}
};

//STAFF CU BLOOD ACTIONS
export const getUserData = userId => async (dispatch, getState) => {
	try {
		const res = await staffs.get(
			"/api/Users/" + userId + "?access_token=" + getState().auth.accessToken
		);
		console.log("getUserData");
		// console.log(res);
		dispatch({ type: ADD_AUTH, payload: res.data });
	} catch (err) {
		console.log("Get user data error");
		console.log(err);
		alert("Get user data error");
		alert(JSON.stringify(err.response));
	}
};

export const getRememberUserData = (userId, id) => async dispatch => {
	try {
		await dispatch({ type: REQUEST_SIGN_IN, payload: { userId, id } });
		await dispatch(getUserData(userId));
	} catch (err) {
		console.log("Get Remembered User error");
		console.log(err);
		alert("Get Remembered User error");
		alert(JSON.stringify(err.response));
	}
};

export const login = (formData, cbError) => async (dispatch, getState) => {
	try {
		const res = await staffs.post("/api/Users/login", formData);
		console.log("login");
		// console.log(res);
		dispatch({ type: REQUEST_SIGN_IN, payload: res.data });
		const accessToken = res.data.id;
		const userId = res.data.userId;
		if (!formData.remember_me) {
			sessionStorage.setItem("accessToken", accessToken);
			sessionStorage.setItem("userId", userId);
		} else {
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("userId", userId);
		}
		dispatch(getUserData(userId));
		history.push("/");
	} catch (err) {
		cbError();
	}
};

export const logout = () => async (dispatch, getState) => {
	try {
		const res = await staffs.post(
			"/api/Users/logout?access_token=" + getState().auth.accessToken
		);
		console.log("logout");
		// console.log(res);
		dispatch({ type: REQUEST_SIGN_OUT });

		sessionStorage.removeItem("accessToken");
		localStorage.removeItem("accessToken");
		sessionStorage.removeItem("userId");
		localStorage.removeItem("userId");
		history.push("/");
	} catch (err) {
		console.log("logout error");
		console.log(err);
		alert("logout error");
		alert(JSON.stringify(err.response));
	}
};

export const fetchStaffs = () => async (dispatch, getState) => {
	// All staffs
	try {
		const res = await staffs.get(
			"/api/Users?access_token=" + getState().auth.accessToken
		);
		console.log("fetchStaffs");
		// console.log(res);
		dispatch({ type: FETCH_STAFFS, payload: res.data });
	} catch (err) {
		console.log("fetch Staffs error");
		console.log(err);
		alert("fetch Staffs error");
		alert(JSON.stringify(err.response));
	}
};

export const fetchStaff = id => async (dispatch, getState) => {
	// Only one staff
	try {
		const res = await staffs.get(
			`/api/Users/${id}?access_token=${getState().auth.accessToken}`
		);
		console.log("fetchStaff");
		// console.log(res);
		dispatch({ type: FETCH_STAFF, payload: res.data });
	} catch (err) {
		console.log("fetch Staff error");
		console.log(err);
		alert("fetch Staff error");
		alert(JSON.stringify(err.response));
	}
};

export const createStaff = formData => async dispatch => {
	// Register
	try {
		console.log("from create action");
		console.log(formData);
		await staffs.post("/api/Users", formData);
		history.push("/");
	} catch (err) {
		console.log("create Staffs error");
		console.log(err);
		alert("create Staffs error");
		alert(JSON.stringify(err.response));
	}
};

export const approveStaff = id => async (dispatch, getState) => {
	try {
		const res = await staffs.patch(
			`/api/Users/${id}?access_token=${getState().auth.accessToken}`,
			{ isApproved: true }
		);
		dispatch({ type: APPROVE_STAFF, payload: res.data });
	} catch (err) {
		console.log("approve Staffs error");
		console.log(err);
		alert("approve Staffs error");
		alert(JSON.stringify(err.response));
	}
};

export const promoteStaff = id => async (dispatch, getState) => {
	try {
		const res = await staffs.patch(
			`/api/Users/${id}?access_token=${getState().auth.accessToken}`,
			{ isAdmin: true }
		);
		dispatch({ type: PROMOTE_STAFF, payload: res.data });
	} catch (err) {
		console.log("promote Staffs error");
		console.log(err);
		alert("promote Staffs error");
		alert(JSON.stringify(err.response));
	}
};

export const demoteStaff = id => async (dispatch, getState) => {
	try {
		const res = await staffs.patch(
			`/api/Users/${id}?access_token=${getState().auth.accessToken}`,
			{ isAdmin: false }
		);
		dispatch({ type: PROMOTE_STAFF, payload: res.data });
	} catch (err) {
		console.log("demote Staffs error");
		console.log(err);
		alert("demote Staffs error");
		alert(JSON.stringify(err.response));
	}
};

export const editStaff = (id, formData) => async (dispatch, getState) => {
	try {
		const res = await staffs.patch(
			`/api/Users/${id}?access_token=${getState().auth.accessToken}`,
			formData
		);
		dispatch({ type: EDIT_STAFF, payload: res.data });
		dispatch(getUserData(id));
		history.push("/");
	} catch (err) {
		console.log("edit Staffs error");
		console.log(err);
		alert("edit Staffs error");
		alert(JSON.stringify(err.response));
	}
};

export const deleteStaff = id => async (dispatch, getState) => {
	try {
		await staffs.delete(
			`/api/Users/${id}?access_token=${getState().auth.accessToken}`
		);
		dispatch({ type: DELETE_STAFF, payload: id });
	} catch (err) {
		console.log("delete Staffs error");
		console.log(err);
		alert("delete Staffs error");
		alert(JSON.stringify(err.response));
	}
};

export const changePassword = (oldPassword, newPassword, cb) => async (
	dispatch,
	getState
) => {
	try {
		const res = await staffs.post(
			`/api/Users/change-password?access_token=${getState().auth.accessToken}`,
			{ oldPassword, newPassword }
		);
		dispatch({ type: EDIT_STAFF, payload: res.data });
		cb(false);
		history.push("/");
	} catch (err) {
		console.log("change password error");
		console.log(err);
		alert("change password error");
		alert(JSON.stringify(err.response));
		cb(true);
	}
};
