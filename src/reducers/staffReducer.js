const INIT_STATE = {
	staffs: {
		"test@gmail.com": {
			password: "test",
			user: {
				userId: 123,
				firstName: "TestFirstName",
				lastName: "TestLastName"
			}
		}
	}
};

export default (state = INIT_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
