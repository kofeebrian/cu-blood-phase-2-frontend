import "../css/tailwind.css";
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

class App extends Component {
	render() {
		return (
			<div>
				<BrowserRouter>
					<div>
						<Route path='/' component='' />
					</div>
				</BrowserRouter>
			</div>
		);
	}
}

export default App;
