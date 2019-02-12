import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import { Menu, Dropdown } from "semantic-ui-react";

const NavbarDesktop = () => (
  <Menu stackable inverted color={"red"} fixed="top">
    <Menu.Item header className="ui text centered width 10px">
      CU Blood
    </Menu.Item>

    <Menu.Item className="ui borderless" name="Home" as={Link} to="/" />

    <Menu.Item className="ui borderless" name="QR reader" as={Link} to="/qr" />

    <Menu.Item className="ui borderless" name="Manage staff" as={Link} to="/" />

    <Menu.Menu position="right">
      <Dropdown item pointing text="username">
        <Dropdown.Menu>
          <Dropdown.Item text="Edit profile" />
          <Dropdown.Item text="Logout" />
        </Dropdown.Menu>
      </Dropdown>
    </Menu.Menu>
  </Menu>
);

export default connect(null)(NavbarDesktop);
