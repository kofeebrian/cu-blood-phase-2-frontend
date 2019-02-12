import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

import {
  Menu,
  Icon,
  Dropdown,
  Sidebar,
  Segment,
  Button,
  Responsive
} from "semantic-ui-react";

class Navbar extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <div>
        <Responsive as={NavbarMobile} {...Responsive.onlyMobile} />
        <Responsive
          as={NavbarDesktop}
          minWidth={Responsive.onlyTablet.minWidth}
        />
      </div>
    );
  }
}

export default connect(null)(Navbar);
