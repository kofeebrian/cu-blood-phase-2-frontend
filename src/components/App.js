import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import HeaderReact from "./Header/HeaderReact";
import Home from "./Home/Home";
import QRReaderpage from "./QRReader/QRReaderpage";
import Signup from "./Login/Signup";
import Info from "./Login/Info";
import LoginForm from "./Login/LoginForm";

class App extends Component {
<<<<<<< HEAD
	render() {
		return (
			<div className='ui container'>
				<BrowserRouter>
					<div>
						<HeaderReact />
						<Route path='/login' exact component={LoginForm} />
						<Route path='/login#' exact component={Info} />
						<Route path='/signup' exact component={Signup} />
						<Route path='/' exact component={Home} />
						<Route path='/qr' exact component={QRReaderpage} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
=======
  render() {
    return (
      <div className="">
        <BrowserRouter>
          <div>
            <HeaderReact />
            <Route path="/login" exact component={LoginForm} />
            <Route path="/signup" exact component={Info} />
            <Route path="/signupform" exact component={Signup} />
            <Route path="/" exact component={Home} />
            <Route path="/qr" exact component={QRReader} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
>>>>>>> bb3db0600dc9592e7e9b05102a373bf8e2c80ab8
}

export default App;
