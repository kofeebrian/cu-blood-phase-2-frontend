import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Icon, Dropdown } from "semantic-ui-react";

import Item from "./Item";

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Menu stackable inverted color={"red"}>
        <Menu.Item header className="ui text centered width 10px">
          CU Blood
        </Menu.Item>

        <Menu.Item className="ui borderless" name="Home" as={Link} to="/" />

        <Menu.Item
          className="ui borderless"
          name="QR reader"
          as={Link}
          to="/qr"
        />

        <Menu.Item
          className="ui borderless"
          name="Manage staff"
          as={Link}
          to="/"
        />

        <Menu.Menu header position="right">
          <Dropdown item pointing text="username">
            <Dropdown.Menu>
              <Dropdown.Item text="Edit profile" />
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>

        {/*
        <Menu.Item
          className="ui borderless float right"
          header
          name="username"
          as={Link}
          to="/"
        >
          <Icon name="user" size="tiny" />
          username
        </Menu.Item>
                */}
      </Menu>
    );
  }
}

export default connect(null)(Header);
