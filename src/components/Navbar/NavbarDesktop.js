import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

class NavbarDesktop extends React.Component {
	renderAuthMenuItem = () =>
		this.props.isAuthenticated ? (
			<React.Fragment>
				<Menu.Item className='ui borderless' name='Home' as={Link} to='/' />

				<Menu.Item
					className='ui borderless'
					name='QR reader'
					as={Link}
					to='/qr'
				/>

				<Menu.Item
					className='ui borderless'
					name='Manage staff'
					as={Link}
					to='/manage-staff'
				/>

				<Menu.Menu position='right'>
					<Dropdown
						item
						pointing
						text={
							this.props.user
								? this.props.user.firstName + " " + this.props.user.lastName
								: "username"
						}
					>
						<Dropdown.Menu>
							<Dropdown.Item text='Edit profile' />
							<Dropdown.Item text='Logout' onClick={this.props.logout} />
						</Dropdown.Menu>
					</Dropdown>
				</Menu.Menu>
			</React.Fragment>
		) : (
			<React.Fragment>
				<Menu.Menu position='right'>
					<Menu.Item name='Sign up' as={Link} to='/signup' active={false} />
					<Menu.Item name='Login' as={Link} to='/login' active={false} />
				</Menu.Menu>
			</React.Fragment>
		);

	render() {
		return (
			<Menu stackable inverted color={"red"} fixed='top'>
				<Menu.Item header className='ui text centered width 10px'>
					CU Blood
				</Menu.Item>
				{this.renderAuthMenuItem()}
			</Menu>
		);
	}
}

export default NavbarDesktop;
