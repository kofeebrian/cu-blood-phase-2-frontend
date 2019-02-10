import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Segment } from "semantic-ui-react";

class QRReader extends Component {
	state = {
		delay: 300,
		result: "No Result"
	};

	handleScan = data => {
		if (data) {
			this.setState({
				result: data
			});
		}
	};

	handleError(err) {
		console.error(err);
	}

	render() {
		return (
			<Segment basic>
				<QrReader
					delay={this.state.delay}
					onError={this.handleError}
					onScan={this.handleScan}
					style={{ width: "100%" }}
				/>
				<p>{this.state.result}</p>
			</Segment>
		);
	}
}

export default QRReader;
