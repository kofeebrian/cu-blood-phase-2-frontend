import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

import "./HeaderReact.css";

class HeaderReact extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<Menu inverted color={"red"} fixed='top'>
				<Menu.Item
					header
					className='Change ui text centered width 10px'
					as={Link}
					to='/'
				>
					CU Blood
				</Menu.Item>
				<Menu.Item className='ui borderless' name='Home' as={Link} to='/' />
				<Menu.Item
					className='ui borderless'
					name='QR reader'
					as={Link}
					to='/qr'
				/>
			</Menu>
		);
	}
}

export default connect(null)(HeaderReact);
