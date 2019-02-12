import React from "react";
import { connect } from "react-redux";
import { Responsive } from "semantic-ui-react";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

const Navbar = () => (
  <div>
    <Responsive as={NavbarMobile} {...Responsive.onlyMobile} />
    <Responsive as={NavbarDesktop} minWidth={Responsive.onlyTablet.minWidth} />
  </div>
);

export default connect(null)(Navbar);
