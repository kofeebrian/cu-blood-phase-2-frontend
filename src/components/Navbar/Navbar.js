import React from "react";
import { connect } from "react-redux";
import { Responsive } from "semantic-ui-react";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { fakelogout } from "../../actions";

const handlelogout = () => {};

const Navbar = props => (
	<div>
		<Responsive
			as={NavbarMobile}
			{...Responsive.onlyMobile}
			logout={props.fakelogout}
		/>
		<Responsive
			as={NavbarDesktop}
			minWidth={Responsive.onlyTablet.minWidth}
			logout={props.fakelogout}
		/>
	</div>
);

const mapStateToProps = stateRedux => {
	return {
		isAuthenticated: stateRedux.auth.isAuthenticated
	};
};

export default connect(
	mapStateToProps,
	{ fakelogout }
)(Navbar);
