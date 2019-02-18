import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import history from "../history";

import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import QRReaderpage from "./QRReader/QRReaderpage";
import Signup from "./Login/Signup";
import Info from "./Login/Info";
import LoginForm from "./Login/LoginForm";
import ManageStaff from "./ManageStaff/ManageStaff";
import Edit from "./Edit/Edit";
import PrivateRoute from "./PrivateRoute";

import { getRememberUserData } from "../actions";

class App extends Component {
	componentWillMount() {
		const accessToken =
			sessionStorage.getItem("accessToken") ||
			localStorage.getItem("accessToken") ||
			null;
		const userID =
			sessionStorage.getItem("userID") ||
			localStorage.getItem("userID") ||
			null;
		if (accessToken && userID) {
			this.props.getRememberUserData(userID, accessToken);
		}
	}

	// componentWillMount(){
	// 	const token = localStorage.getItem('token');
	// 	if(token) setAuth(true)
	// }
	render() {
		// localStorage.removeItem('token');
		return (
			<div className='ui container'>
				<Router history={history}>
					<div>
						<Navbar />
						<Switch>
							<Route path='/login' exact component={LoginForm} />
							<Route path='/signup' exact component={Info} />
							<Route path='/signupform' exact component={Signup} />
							<PrivateRoute path='/edit' exact component={Edit} />
							<PrivateRoute path='/qr' exact component={QRReaderpage} />
							<PrivateRoute
								path='/manage-staff'
								exact
								component={ManageStaff}
							/>
							<PrivateRoute path='/' exact component={Home} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

const mapStateToProps = stateRedux => {
	return { isAuthenticated: stateRedux.auth.isAuthenticated };
};

export default connect(
	mapStateToProps,
	{ getRememberUserData }
)(App);
