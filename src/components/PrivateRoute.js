import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => (
	<Route
		{...rest}
		render={props =>
			rest.isAuthenticated === true ? (
				<Component {...props} />
			) : (
				<Redirect to='/login' />
			)
		}
	/>
);

const mapStateToProps = stateRedux => ({
	isAuthenticated: stateRedux.auth.isAuthenticated
});

export default connect(mapStateToProps)(PrivateRoute);
