import React, { Component } from "react";
import QrReader from "react-qr-reader";
import { Segment, Modal, Button, Image, Header } from "semantic-ui-react";

class QRReader extends Component {
	state = {
		delay: 300,
		result: "No Result",
		loading: true,
		open: false
	};

	close = () => this.setState({ open: false });

	handleScan = data => {
		if (data) {
			this.setState({
				result: data,
				dimmer: true,
				open: true
			});
		}
	};

	handleError(err) {
		console.error(err);
	}

	handleLoad = () => {
		this.setState({ loading: false });
	};

	render() {
		const { dimmer, open } = this.state;
		return (
			<div>
				<Segment basic loading={this.state.loading}>
					<QrReader
						delay={this.state.delay}
						onError={this.handleError}
						onScan={this.handleScan}
						onLoad={this.handleLoad}
						style={{ width: "100%" }}
					/>
				</Segment>

				<Modal dimmer={dimmer} open={open} onClose={this.close}>
					<Modal.Header>Welcome!</Modal.Header>
					<Modal.Content image>
						<Image
							wrapped
							size='medium'
							circular
							src='https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
						/>
						<Modal.Description>
							<Header>Profile</Header>
							<p>Place data Here!:</p>
							<p>{this.state.result}</p>
						</Modal.Description>
					</Modal.Content>
					<Modal.Actions>
						<Button color='black' onClick={this.close}>
							Nope
						</Button>
						<Button
							positive
							icon='checkmark'
							labelPosition='right'
							content="Yep, that's me"
							onClick={this.close}
						/>
					</Modal.Actions>
				</Modal>
			</div>
		);
	}
}

export default QRReader;
