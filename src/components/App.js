import "../css/tailwind.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Header from "./Header";

class App extends Component {
	render() {
		return (
			<div className='container mx-auto'>
				<BrowserRouter>
					<div>
						<Header />
						<Route path='/' component='' />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
