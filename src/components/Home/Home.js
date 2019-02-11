import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Segment, Grid, Divider, Header, Icon } from "semantic-ui-react";

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

export default connect(null)(Home);
