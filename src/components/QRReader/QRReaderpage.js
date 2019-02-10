import React, { Component } from "react";
import { Grid, Segment } from "semantic-ui-react";

import QRReader from "./QRReader";
import "./QRReaderpage.css";

export default class QRReaderpage extends Component {
	render() {
		return (
			<Grid className='Change'>
				<Grid.Row centered>
					<Grid.Column width={10}>
						<QRReader />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
