import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";

import QRReader from "./QRReader";
import "./QRReaderpage.css";

export default class QRReaderpage extends Component {
	render() {
		return (
			<div>
				<Grid className='Change'>
					<Grid.Row centered>
						<Header as='h1'>
							Check In / Check Out
							<Header.Subheader>
								Show your QR Code for Checking in
							</Header.Subheader>
						</Header>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column computer={8} tablet={13} mobile={15}>
							<QRReader />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		);
	}
}
