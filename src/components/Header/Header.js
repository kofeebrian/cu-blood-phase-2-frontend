import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Menu, Icon, Dropdown } from "semantic-ui-react";

const NavbarDesktop = () => (
	<Menu stackable inverted color={"red"} fixed='top'>
		<Menu.Item header className='ui text centered width 10px'>
			CU Blood
		</Menu.Item>

		<Menu.Item className='ui borderless' name='Home' as={Link} to='/' />

		<Menu.Item className='ui borderless' name='QR reader' as={Link} to='/qr' />

		<Menu.Item className='ui borderless' name='Manage staff' as={Link} to='/' />

		<Menu.Menu position='right'>
			<Dropdown item pointing text='username'>
				<Dropdown.Menu>
					<Dropdown.Item text='Edit profile' />
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

class Header extends React.Component {
	componentDidMount() {}

	render() {
		return <NavbarDesktop />;
	}
}

export default connect(null)(Header);
