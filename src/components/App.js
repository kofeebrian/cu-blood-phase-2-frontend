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
import AdminRoute from "./AdminRoute";

import { getRememberUserData } from "../actions";

class App extends Component {
	componentWillMount = async () => {
		const accessToken =
			sessionStorage.getItem("accessToken") ||
			localStorage.getItem("accessToken") ||
			null;
		const userId =
			sessionStorage.getItem("userId") ||
			localStorage.getItem("userId") ||
			null;
		if (accessToken && userId) {
			await this.props.getRememberUserData(userId, accessToken);
		}
	};

	render() {
		return (
			<div className='ui container'>
				<Router history={history}>
					<div>
						<Navbar />
						<Switch>
							<Route path='/login' exact component={LoginForm} />
							<Route path='/signup' exact component={Info} />
							<Route path='/signupform' exact component={Signup} />
							<PrivateRoute path='/' exact component={Home} />
							<PrivateRoute path='/edit' exact component={Edit} />
							<PrivateRoute path='/qr' exact component={QRReaderpage} />
							<AdminRoute path='/manage-staff' exact component={ManageStaff} />
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

export default connect(
	null,
	{ getRememberUserData }
)(App);
