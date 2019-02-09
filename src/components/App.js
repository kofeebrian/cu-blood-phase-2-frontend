import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header/Header";
import Home from "./Home/Home";
import QRReader from "./QRReader/QRReader";

class App extends Component {
	render() {
		return (
			<div className='container mx-auto'>
				<BrowserRouter>
					<div>
						<Header />
						<Route path='/' exact component={Home} />
						<Route path='/qr' exact component={QRReader} />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
