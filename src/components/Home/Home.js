import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Grid, Icon, Header } from "semantic-ui-react";

import "./Home.css";

class Home extends React.Component {
	// componentDidMount() {
	// 	Axios.request({
	// 		method: "POST",
	// 		headers: { Authorization: "keyboard cat" },
	// 		url: "/users/verify",
	// 		data: {
	// 			code: "123"
	// 		}
	// 	})
	// 		.then(res => console.log(res.data.result))
	// 		.catch(err => console.log(err));
	// }
	render() {
		return (
			<Grid stackable divided columns='equal' className='Home'>
				<Grid.Column textAlign='center'>
					<Segment basic as={Link} to='/edit'>
						<Icon size='massive' name='user' color='black' />
						<br />
						<Header as='h1'>Edit Profile</Header>
					</Segment>
				</Grid.Column>
				<Grid.Column textAlign='center'>
					<Segment basic as={Link} to='/qr'>
						<Icon size='massive' name='qrcode' color='black' />
						<br />
						<Header as='h1'>QR Reader</Header>
					</Segment>
				</Grid.Column>
				<Grid.Column textAlign='center'>
					<Segment basic as={Link} to='/manage-staff'>
						<Icon size='massive' name='group' color='black' />
						<br />
						<Header as='h1'>Manage Staff</Header>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}

export default connect(null)(Home);
