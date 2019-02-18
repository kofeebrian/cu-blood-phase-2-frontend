import React, { Component } from "react";
import { Grid } from "semantic-ui-react";

import QRReader from "./QRReader";
import "./QRReaderpage.css";

export default class QRReaderpage extends Component {
	render() {
		return (
			<Grid className='Change'>
				<Grid.Row centered>
					<Grid.Column computer={7} tablet={12} mobile={15}>
						<QRReader />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		);
	}
}
