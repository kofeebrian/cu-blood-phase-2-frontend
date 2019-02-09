import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import Item from "./Item";

class Header extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <Menu inverted color={"red"}>
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
      </Menu>
    );
  }
}

export default connect(null)(Header);
