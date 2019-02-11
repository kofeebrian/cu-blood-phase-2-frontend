import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Grid, Icon, Header } from "semantic-ui-react";

<<<<<<< HEAD
import "./Home.css";

class Home extends React.Component {
	render() {
		return (
			<Grid stackable divided columns='equal' className='Home'>
				<Grid.Column textAlign='center'>
					<Segment basic as={Link} to='/'>
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
					<Segment basic as={Link} to='/'>
						<Icon size='massive' name='group' color='black' />
						<br />
						<Header as='h1'>Manage Staff</Header>
					</Segment>
				</Grid.Column>
			</Grid>
		);
	}
}
=======
const Home = () => (
  <div className="ui container p">
    <Segment padded placeholder>
      <Grid columns={3} divided stackable textAlign="center">
        <Grid.Row verticalAlign="middle">
          <Grid.Column container as={Link} to="/">
            <Header icon>
              <Icon color="red" name="user" size="huge" />
              Edit profile
            </Header>
          </Grid.Column>

          <Grid.Column container as={Link} to="/qr">
            <Header icon>
              <Icon color="red" name="qrcode" size="huge" />
              QR Scanner
            </Header>
          </Grid.Column>

          <Grid.Column container as={Link} to="/">
            <Header icon>
              <Icon color="red" name="tasks" size="huge" />
              Manage staff
            </Header>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  </div>
);
>>>>>>> bb3db0600dc9592e7e9b05102a373bf8e2c80ab8

export default connect(null)(Home);
