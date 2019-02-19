import React from "react";
import { connect } from "react-redux";
import { Responsive } from "semantic-ui-react";

import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import { logout } from "../../actions";

const Navbar = props => {
	const { logout, isAuthenticated, user } = props;

	return (
		<div>
			<Responsive
				as={NavbarMobile}
				{...Responsive.onlyMobile}
				logout={logout}
				isAuthenticated={isAuthenticated}
				user={user}
			/>
			<Responsive
				as={NavbarDesktop}
				minWidth={Responsive.onlyTablet.minWidth}
				logout={logout}
				isAuthenticated={isAuthenticated}
				user={user}
			/>
		</div>
	);
};

const mapStateToProps = stateRedux => {
	return {
		isAuthenticated: stateRedux.auth.isAuthenticated,
		user: stateRedux.auth.user
	};
};

export default connect(
	mapStateToProps,
	{ logout }
)(Navbar);
