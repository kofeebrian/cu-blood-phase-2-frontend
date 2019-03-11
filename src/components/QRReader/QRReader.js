import React, { Component } from "react";
import QrReader from "react-qr-reader";
import {
	Segment,
	Modal,
	Button,
	Header,
	Dropdown,
	Icon,
	List
} from "semantic-ui-react";
import { connect } from "react-redux";
import { CHECK_OUT } from "../../actions/types";

import { verifyCode, checkIn, checkOut } from "../../actions";

const resetUser = () => async dispatch => {
	await dispatch({ type: CHECK_OUT });
};

class QRReader extends Component {
	state = {
		delay: 300,
		// result: { checkIn: true, checkOut: false },
		result: null,
		loading: true,
		open: false,
		status: null,
		currtime: new Date()
	};

	componentDidMount() {
		this.interval = setInterval(() => {
			this.setState({ currtime: new Date() });
		}, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.interval)
	}

	close = () => {
		this.setState({ open: false, delay: 300 });
		resetUser();
	};

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
								<Header as='h3'>
									<Header.Content>
										Profile
										<div>Time: {this.state.currtime.toLocaleTimeString()}</div>
									</Header.Content>
								</Header>
								<Segment>
									<List>
										<List.Item
											icon='user'
											content={
												"Name: " +
												result.user.firstName +
												" " +
												result.user.lastName
											}
										/>
										<List.Item
											icon={`${result.user.gender === 0 ? "man" : "woman"}`}
											content={`Gender: ${
												result.user.gender === 0 ? "Male" : "Female"
												}`}
										/>
										<List.Item icon='marker' content={result.location.name} />
										<List.Item
											icon='time'
											content={
												"Time: " +
												result.time.startTime +
												" - " +
												result.time.endTime
											}
										/>
										<List.Item icon='mail' content={result.user.username} />
									</List>
								</Segment>
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
								<div>Time: {this.state.currtime.toLocaleTimeString()}</div>
								<Segment>
									<List>
										<List.Item
											icon='user'
											content={
												"Name: " +
												result.user.firstName +
												" " +
												result.user.lastName
											}
										/>
										<List.Item
											icon={`${result.user.gender === 0 ? "man" : "woman"}`}
											content={`Gender: ${
												result.user.gender === 0 ? "Male" : "Female"
												}`}
										/>
										<List.Item icon='marker' content={result.location.name} />
										<List.Item
											icon='time'
											content={
												"Time: " +
												result.time.startTime +
												" - " +
												result.time.endTime
											}
										/>
										<List.Item icon='mail' content={result.user.username} />
									</List>
								</Segment>
							</Modal.Description>
							<div>
								<span>Status: </span>
								<Dropdown
									placeholder='Select Status'
									selection
									onChange={value => this.setState({ status: value })}
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
								onClick={() => {
									if (this.state.status)
										this.handleCheckOut(result.id, this.state.status);
									else alert("please choose status");
								}}
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
							<div>Time: {this.state.currtime.toLocaleTimeString()}</div>
							<Segment>
								<List>
									<List.Item
										icon='user'
										content={
											"Name: " +
											result.user.firstName +
											" " +
											result.user.lastName
										}
									/>
									<List.Item
										icon={`${result.user.gender === 0 ? "man" : "woman"}`}
										content={`Gender: ${
											result.user.gender === 0 ? "Male" : "Female"
											}`}
									/>
									<List.Item icon='marker' content={result.location.name} />
									<List.Item
										icon='time'
										content={
											"Time: " +
											result.time.startTime +
											" - " +
											result.time.endTime
										}
									/>
									<List.Item icon='mail' content={result.user.username} />
								</List>
							</Segment>
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
