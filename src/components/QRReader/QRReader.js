import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Segment, Modal, Button, Header } from "semantic-ui-react";
import { connect } from "react-redux";

import { verifyCode, checkIn, checkOut } from "../../actions";

class QRReader extends Component {
	state = {
		delay: 300,
		result: null,
		loading: true,
		open: false
	};

	close = () => this.setState({ open: false });

	handleCheckIn = async code => {
		await this.props.checkIn(code);
		this.close();
	};

	handleCheckOut = async (code, status) => {
		await this.props.checkOut(code, status);
		this.close();
	};

	renderModal() {
		if (this.state.result) {
			// result in props
			console.log(this.state.result.id);
			const { dimmer, open, result } = this.state; // result in state component
			return (
				//For non check in user
				<Modal dimmer={dimmer} open={open} onClose={this.close}>
					<Modal.Header>Welcome!</Modal.Header>
					<Modal.Content>
						<Modal.Description>
							<Header>Profile</Header>
							<p>First name: {result.user.firstName}</p>
							<p>Last name: {result.user.lastName}</p>
							<p>Gender: {result.user.gender === 0 ? "Male" : "Female"}</p>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button
							color='black'
							content="No it's not me"
							onClick={() => this.handleCheckOut(result.id, result.status)}
						/>
						<Button
							positive
							icon='checkmark'
							labelPosition='right'
							content="Yes, it's me"
							onClick={() => this.handleCheckIn(result.id)}
						/>
					</Modal.Actions>
				</Modal>
			);
		}

		return null;
	}

	handleScan = async code => {
		if (code) {
			console.log(code);
			if (this.state.open === false) await this.props.verifyCode(code);
			this.setState({
				result: this.props.result,
				dimmer: true,
				open: true
			});
		}
	};

	resetComponent() {
		this.setState({
			delay: 300,
			result: null,
			loading: true,
			open: false
		});
	}

	handleError = () => {
		this.resetComponent();
	};

	handleLoad = () => {
		this.setState({ loading: false });
	};

	render() {
		return (
			<div>
				<Segment loading={this.state.loading}>
					<QrReader
						delay={this.state.delay}
						onError={this.handleError}
						onScan={this.handleScan}
						onLoad={this.handleLoad}
						style={{ width: "100%", height: "100%" }}
					/>
				</Segment>

				{this.renderModal()}
			</div>
		);
	}
}

const mapStateToProps = stateRedux => {
	console.log(stateRedux);
	return { result: stateRedux.client.result };
};

export default connect(
	mapStateToProps,
	{ verifyCode, checkIn, checkOut }
)(QRReader);
