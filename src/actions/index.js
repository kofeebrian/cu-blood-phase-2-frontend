import {
	VERIFY_CODE,
	CHECK_IN,
	CHECK_OUT,
	ADD_AUTH,
	REQUEST_SIGN_IN,
	REQUEST_SIGN_OUT
} from "./types";
import users from "../apis/users";
import staffs from "../apis/staffs";

// CLIENT CU BLOOD ACTIONS
export const verifyCode = code => async dispatch => {
	try {
		const res = await users.request({
			method: "POST",
			url: "users/verify",
			data: {
				code
			}
		});
		console.log("Request Done!");
		console.log(res);
		dispatch({ type: VERIFY_CODE, payload: res.data });
	} catch (err) {
		console.log(err);
	}
};

export const checkIn = code => async dispatch => {
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
	} catch (err) {
		console.log(err);
	}
};

export const checkOut = (code, status) => async dispatch => {
	try {
		await users.request({
			method: "PUT",
			url: "users/check-out",
			data: {
				code,
				status
			}
		});
		dispatch({ type: CHECK_OUT });
	} catch (err) {
		console.log(err);
	}
};

//STAFF CU BLOOD ACTIONS
export const getUserData = userID => async (dispatch, getState) => {
	try {
		const res = await staffs.get(
			"/api/Users/" + userID + "?access_token=" + getState().auth.accessToken
		);
		dispatch({ type: ADD_AUTH, payload: res.data });
	} catch (err) {
		console.log("Get user data error");
		console.log(err);
		alert("Get user data error");
		alert(JSON.stringify(err.response));
	}
};

export const getRememberUserData = (userID, id) => async dispatch => {
	try {
		await dispatch({ type: REQUEST_SIGN_IN, payload: { userID, id } });
		getUserData(userID);
	} catch (err) {
		console.log("Get Remembered User error");
		console.log(err);
		alert("Get Remembered User error");
		alert(JSON.stringify(err.response));
	}
};

// FAKE LOGIN LOGOUT
export const fakelogin = formData => async dispatch => {
	const { username, password } = formData;
	// hardcode username and password
	if (username === "test@gmail.com" && password === "123") {
		dispatch({ type: "FAKE_REQUEST_SIGN_IN" });
	} else {
		alert("username or password wrong");
	}
};

export const fakelogout = () => async dispatch => {
	dispatch({ type: "FAKE_REQUEST_SIGN_OUT" });
};

export const login = formData => async (dispatch, getState) => {
	try {
		const res = await staffs.post("/api/Users/login", formData);
		dispatch({ type: REQUEST_SIGN_IN, payload: res.data });
		const accessToken = res.data.id;
		const userID = res.data.userID;
		if (!formData.remember_me) {
			sessionStorage.setItem("accessToken", accessToken);
			sessionStorage.setItem("userID", userID);
		} else {
			localStorage.setItem("accessToken", accessToken);
			localStorage.setItem("userID", userID);
		}
		getUserData(userID);
	} catch (err) {
		console.log("login error");
		console.log(err);
		alert("logout error");
		alert(JSON.stringify(err.response));
	}
};

export const logout = () => async (dispatch, getState) => {
	try {
		await staffs.post(
			"/api/Users/logout?access_token=" + getState().auth.accessToken
		);
		dispatch({ type: REQUEST_SIGN_OUT });

		sessionStorage.removeItem("accessToken");
		localStorage.removeItem("accessToken");
		sessionStorage.removeItem("userID");
		localStorage.removeItem("userID");
	} catch (err) {
		console.log("logout error");
		console.log(err);
		alert("logout error");
		alert(JSON.stringify(err.response));
	}
};
