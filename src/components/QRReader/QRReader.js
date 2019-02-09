import React, { Component } from "react";
import QrReader from "react-qr-reader";

class QRReader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			delay: 300,
			result: "No Result",
			resolution: 600
		};
		this.handleScan = this.handleScan.bind(this);
	}

	handleScan(data) {
		if (data) {
			this.setState({
				result: data
			});
		}
	}

	handleError(err) {
		console.error(err);
	}

	render() {
		return (
			<div className='md:w-1/2 m-auto'>
				<QrReader
					delay={this.state.delay}
					onError={this.handleError}
					onScan={this.handleScan}
					style={{ width: "100%" }}
					resolution={this.state.resolution}
				/>
				<p>{this.state.result}</p>
			</div>
		);
	}
}

export default QRReader;
