import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar/Navbar";

import Home from "./Home/Home";
import QRReaderpage from "./QRReader/QRReaderpage";
import Signup from "./Login/Signup";
import Info from "./Login/Info";
import LoginForm from "./Login/LoginForm";
import ManageStaff from "./ManageStaff/ManageStaff";

class App extends Component {
	render() {
		return (
			<div className=''>
				<BrowserRouter>
					<div>
						<Navbar />
						<Switch>
							<Route path='/login' exact component={LoginForm} />
							<Route path='/signup' exact component={Info} />
							<Route path='/signupform' exact component={Signup} />
							<Route path='/' exact component={Home} />
							<Route path='/qr' exact component={QRReaderpage} />
							<Route path='/manage-staff' exact component={ManageStaff} />
						</Switch>
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
