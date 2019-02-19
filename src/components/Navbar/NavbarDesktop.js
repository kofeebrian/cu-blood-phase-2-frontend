import React from "react";
import { NavLink } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";

class NavbarDesktop extends React.Component {
	renderAuthMenuItem = () =>
		this.props.isAuthenticated ? (
			<React.Fragment>
				<Menu.Item className='ui borderless' name='Home' as={NavLink} to='/' />

				<Menu.Item
					className='ui borderless'
					name='QR reader'
					as={NavLink}
					to='/qr'
				/>

				<Menu.Item
					className='ui borderless'
					name='Manage staff'
					as={NavLink}
					to='/manage-staff'
				/>

				<Menu.Menu position='right'>
					<Dropdown
						item
						pointing
						text={
							this.props.user
								? this.props.user.username + " " + this.props.user.lastName
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
					<Menu.Item name='Sign up' as={NavLink} to='/signup' active={false} />
					<Menu.Item name='Login' as={NavLink} to='/login' active={false} />
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
