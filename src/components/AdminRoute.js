import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
	return (
		<Route
			{...rest}
			render={props => {
				const { user } = rest;
				console.log(user);
				return rest.isAuthenticated && user ? (
					user.isAdmin === true ? (
						<Component {...props} />
					) : (
						<Redirect
							to={{
								pathname: "/",
								state: { from: props.location }
							}}
						/>
					)
				) : (
					<Redirect
						to={{
							pathname: "/login",
							state: { from: props.location }
						}}
					/>
				);
			}}
		/>
	);
};

const mapStateToProps = stateRedux => ({
	isAuthenticated: stateRedux.auth.isAuthenticated,
	user: stateRedux.auth.user
});

export default connect(mapStateToProps)(PrivateRoute);
