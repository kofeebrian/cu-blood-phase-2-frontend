import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  Menu,
  Sidebar,
  Segment,
  Button,
  Header,
  Icon
} from "semantic-ui-react";

class NavbarMobile extends React.Component {
  state = { visible: true };

  handleHideClick = () => this.setState({ visible: false });
  handleShowClick = () => this.setState({ visible: true });
  handleSidebarHide = () => this.setState({ visible: false });
  render() {
    const { visible } = this.state;
    return (
      <div>
        <Menu inverted color={"red"}>
          <Menu.Item header textAlign="centered" className="ui borderless">
            CU Blood
          </Menu.Item>
          <Menu.Item position="right">
            <Icon name="sidebar" size="large" />
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default connect(null)(NavbarMobile);
