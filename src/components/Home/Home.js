import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Grid, Icon, Header, Loader } from "semantic-ui-react";

import "./Home.css";

class Home extends React.Component {
	renderAdminComponent = () => {
		if (this.props.user.isAdmin) {
			return (
				<Grid.Column textAlign='center'>
					<Segment basic as={Link} to='/manage-staff'>
						<Icon size='massive' name='group' color='black' />
						<br />
						<Header as='h1'>Manage Staff</Header>
					</Segment>
				</Grid.Column>
			);
		}
		return null;
	};

	render() {
		if (!this.props.user) {
			return (
				<div className='ui container'>
					<Loader active size='massive' />
					Loading...
				</div>
			);
		}

		return (
			<Grid stackable divided columns='equal' className='Home'>
				<Grid.Column textAlign='center'>
					<Segment basic as={Link} to={`/edit/${this.props.user.id}`}>
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
				{this.renderAdminComponent()}
			</Grid>
		);
	}
}

const mapStateToProps = stateRedux => {
	return {
		user: stateRedux.auth.user
	};
};

export default connect(mapStateToProps)(Home);
