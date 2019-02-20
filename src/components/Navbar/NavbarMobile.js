import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Menu,
  Sidebar,
  Image,
  Segment,
  MenuMenu
} from "semantic-ui-react";

class NavbarMobile extends React.Component {
  state = { visible: false };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });

  handlePusher = () => {
    const { visible } = this.state;

    if (visible) this.setState({ visible: false });
  };

  renderAuthButton = () => {
    const screenHeight = window.screen.height;

    return this.props.isAuthenticated ? (
      <React.Fragment>
        <Menu.Menu as={Segment} basic>
          <Menu.Item>
            <Image
              src="https://cu-blood.herokuapp.com/static/logo/logo1.svg"
              size="mini"
            />
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item as={Button} onClick={this.handleHideClick}>
              <Icon name="close" circular inverted color={"grey"} />
            </Menu.Item>
          </Menu.Menu>
        </Menu.Menu>
        <Menu.Item as={Link} to="/" onClick={this.handleHideClick}>
          <Icon name="home" size="large" />
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/qr" onClick={this.handleHideClick}>
          <Icon name="gamepad" />
          QR Reader
        </Menu.Item>
        <Menu.Item as={Link} to="/manage-staff" onClick={this.handleHideClick}>
          <Icon name="camera" />
          Manage Staff
        </Menu.Item>
        <Menu.Item
          onClick={() => {
            this.props.logout().then(() => this.handleHideClick());
          }}
        >
          <Icon name="key" />
          Logout
        </Menu.Item>
        <Menu.Item as={Segment} style={{ minHeight: screenHeight }} />
      </React.Fragment>
    ) : (
      <React.Fragment>
        <Menu.Item as={Link} to="/login" onClick={this.handleHideClick}>
          <Icon name="key" />
          Login
        </Menu.Item>
        <Menu.Item as={Link} to="/signup" onClick={this.handleHideClick}>
          <Icon name="key" />
          Signup
        </Menu.Item>
      </React.Fragment>
    );
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
          size="massive"
          vertical
          onHide={this.handleSidebarHide}
          visible={visible}
          direction="top"
          animation="overlay"
        >
          {this.renderAuthButton()}
        </Sidebar>
      </div>
    );
  }
}

export default NavbarMobile;
