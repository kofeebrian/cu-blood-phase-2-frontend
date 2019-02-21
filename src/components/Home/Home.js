import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Grid, Icon, Header } from "semantic-ui-react";

import "./Home.css";
import { fetchStaffs } from "../../actions";

class Home extends React.Component {
	componentDidMount() {
		this.props.fetchStaffs();
	}

	render() {
		return (
			<Grid stackable divided columns='equal' className='Home'>
				<Grid.Column textAlign='center'>
					<Segment basic as={Link} to={`/edit/${this.props.userId}`}>
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

const mapStateToProps = stateRedux => {
	return {
		isAuthenticated: stateRedux.auth.isAuthenticated,
		user: stateRedux.auth.user,
		userId: stateRedux.auth.userId,
		accessToken: stateRedux.auth.accessToken
	};
};

export default connect(
	mapStateToProps,
	{ fetchStaffs }
)(Home);
