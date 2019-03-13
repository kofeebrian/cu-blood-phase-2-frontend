import React, { Component } from "react";
import { Grid, Header, TransitionablePortal, Segment } from "semantic-ui-react";

import QRReader from "./QRReader";
import "./QRReaderpage.css";

export default class QRReaderpage extends Component {
	state = { open: false, status: "" };

	handleOpen = status => this.setState({ open: true, status });
	handleClose = () => this.setState({ open: false, status: "" });

	renderResultPortal = () => {
		const { open, status } = this.state;
		return (
			<div>
				<TransitionablePortal open={open} onClose={this.handleClose}>
					<Segment
						color={`${
							status === "CHECKIN SUCCESS" || status === "CHECKOUT SUCCESS"
								? "green"
								: "red"
						}`}
						inverted
						secondary
						textAlign='center'
						size='large'
						style={{
							position: "fixed",
							top: 0,
							width: "100%",
							zIndex: 1000
						}}
					>
						<Header>{status}</Header>
						{status === "CHECKIN SUCCESS" ? "Thank you for coming." : null}
						{status === "CHECKIN FAIL"
							? "Check in Fail. Might out of time."
							: null}
						{status === "CHECKOUT SUCCESS"
							? "Thank you for donation. Please come again."
							: null}
						{status === "CHECKOUT FAIL"
							? "Check out Fail. Might be out of time."
							: null}
					</Segment>
				</TransitionablePortal>
			</div>
		);
	};

	render() {
		return (
			<div style={{ marginTop: "40px" }}>
				{this.renderResultPortal()}
				<Grid className='Change'>
					<Grid.Row centered>
						<Grid.Column computer={8} tablet={13} mobile={15}>
							<QRReader resultPortal={this.handleOpen} />
						</Grid.Column>
					</Grid.Row>
					<Grid.Row centered>
						<Header as='h1' textAlign='center'>
							Check In / Check Out
							<Header.Subheader>
								Show your QR Code for Checking in/Checking out
							</Header.Subheader>
						</Header>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}
