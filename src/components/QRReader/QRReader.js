import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Segment, Modal, Button, Header, Dropdown } from "semantic-ui-react";
import { connect } from "react-redux";

import { verifyCode, checkIn, checkOut } from "../../actions";

class QRReader extends Component {
	state = {
		delay: 300,
		// result: { checkIn: true, checkOut: false },
		result: null,
		loading: true,
		open: false
	};

	close = () => this.setState({ open: false, delay: 300 });

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
			const { dimmer, open, result } = this.state; // result in state component
			if (!this.state.result.checkIn) {
				return (
					<Modal dimmer={dimmer} open={open} onClose={this.close}>
						<Modal.Header>CHECK IN</Modal.Header>
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
								labelPosition='right'
								content='Cancel'
								onClick={this.close}
							/>
							<Button
								positive
								icon='checkmark'
								labelPosition='right'
								content='Check in'
								onClick={() => this.handleCheckIn(result.id)}
							/>
						</Modal.Actions>
					</Modal>
				);
			}
			if (!this.state.result.checkOut) {
				return (
					<Modal dimmer={dimmer} open={open} onClose={this.close}>
						<Modal.Header>CHECK OUT</Modal.Header>
						<Modal.Content>
							<Modal.Description>
								<Header>Profile</Header>
								<p>First name: {result.user.firstName}</p>
								<p>Last name: {result.user.lastName}</p>
								<p>Gender: {result.user.gender === 0 ? "Male" : "Female"}</p>
							</Modal.Description>
							<div>
								<span>Status: </span>
								<Dropdown
									placeholder='Select Status'
									selection
									options={[
										{ key: 0, text: 0, value: 0 },
										{ key: 1, text: 1, value: 1 },
										{ key: 2, text: 2, value: 2 },
										{ key: 3, text: 3, value: 3 }
									]}
								/>
							</div>
						</Modal.Content>
						<Modal.Actions>
							<Button
								labelPosition='right'
								content='Cancel'
								onClick={this.close}
							/>
							<Button
								color='black'
								icon='sign-out'
								content='Check out'
								onClick={() => this.handleCheckOut(result.id, 0)}
							/>
						</Modal.Actions>
					</Modal>
				);
			}
			return (
				<Modal dimmer={dimmer} open={open} onClose={this.close}>
					<Modal.Header>YOU ALREADY CHECKED OUT</Modal.Header>
					<Modal.Content>
						<Modal.Description>
							<Header>Profile</Header>
							<p>First name: {result.user.firstName}</p>
							<p>Last name: {result.user.lastName}</p>
							<p>Gender: {result.user.gender === 0 ? "Male" : "Female"}</p>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button labelPosition='right' content='OK' onClick={this.close} />
					</Modal.Actions>
				</Modal>
			);
		}

		return null;
	}

	handleScan = async code => {
		if (code) {
			console.log(code);
			if (this.state.open === false) {
				try {
					await this.props.verifyCode(code);
					this.setState({
						delay: false,
						result: this.props.result,
						dimmer: true,
						open: true
					});
				} catch (e) {
					console.log("it error but ok");
				}
			}
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

	handleError = error => {
		console.error(error);
	};

	handleLoad = () => {
		this.setState({ loading: false });
	};

	render() {
		return (
			<div>
				<Segment loading={this.state.loading}>
					<QrReader
						ref='qrreader'
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
