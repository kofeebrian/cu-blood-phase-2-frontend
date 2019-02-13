import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Menu,
  Sidebar,
  Segment,
  Button,
  Header,
  Icon,
  Dimmer
} from "semantic-ui-react";

class NavbarMobile extends React.Component {
  constructor(props) {
    super(props);
  }

  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });
  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };
  render() {
    const { visible } = this.state;
    return (
      <div>
        <Menu inverted color={"red"} fixed="top">
          <Menu.Item as={Link} to="/" header className="ui borderless">
            CU Blood
          </Menu.Item>
          <Menu.Item
            as={Button}
            position="right"
            onClick={this.handleShowClick}
          >
            <Icon name="sidebar" size="large" />
          </Menu.Item>
        </Menu>
        <Sidebar
          as={Menu}
          vertical
          onHide={this.handleSidebarHide}
          visible={visible}
          direction="right"
          animation="overlay"
        >
          <Menu.Item as="a">
            <Icon name="home" />
            Home
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="gamepad" />
            Games
          </Menu.Item>
          <Menu.Item as="a">
            <Icon name="camera" />
            Channels
          </Menu.Item>
        </Sidebar>
      </div>
    );
  }
}

export default connect(null)(NavbarMobile);
