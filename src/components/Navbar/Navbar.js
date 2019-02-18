import React from "react";
import { connect } from "react-redux";
import { Responsive } from "semantic-ui-react";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { logout } from "../../actions";

const Navbar = props => {
  
  const {logout, isAuthenticated} = props

	return (
		<div>
			<Responsive
				as={NavbarMobile}
				{...Responsive.onlyMobile}
        logout={logout}
        isAuthenticated={isAuthenticated}
			/>
			<Responsive
				as={NavbarDesktop}
				minWidth={Responsive.onlyTablet.minWidth}
        logout={logout}
        isAuthenticated={isAuthenticated}
			/>
		</div>
	);
};

const mapStateToProps = stateRedux => {
	return {
		isAuthenticated: stateRedux.auth.isAuthenticated
	};
};

export default connect(
	mapStateToProps,
	{ logout }
)(Navbar);
