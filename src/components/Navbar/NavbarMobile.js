import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Menu, Sidebar } from "semantic-ui-react";

class NavbarMobile extends React.Component {
	state = { visible: false };

	handleHideClick = () => this.setState({ visible: false });
	handleShowClick = () => this.setState({ visible: true });
	handleSidebarHide = () => this.setState({ visible: false });

	handlePusher = () => {
		const { visible } = this.state;

		if (visible) this.setState({ visible: false });
	};

	renderAuthButton = () => {
		return this.props.isAuthenticated ? (
			<React.Fragment>
				<Menu.Item as={Link} to='/' onClick={this.handleHideClick}>
					<Icon name='home' />
					Home
				</Menu.Item>
				<Menu.Item as={Link} to='/qr' onClick={this.handleHideClick}>
					<Icon name='gamepad' />
					QR Reader
				</Menu.Item>
				<Menu.Item as={Link} to='/manage-staff' onClick={this.handleHideClick}>
					<Icon name='camera' />
					Manage Staff
				</Menu.Item>
				<Menu.Item
					onClick={() => {
						this.props.logout().then(() => this.handleHideClick());
					}}
				>
					<Icon name='key' />
					Logout
				</Menu.Item>
			</React.Fragment>
		) : (
			<React.Fragment>
				<Menu.Item as={Link} to='/login' onClick={this.handleHideClick}>
					<Icon name='key' />
					Login
				</Menu.Item>
				<Menu.Item as={Link} to='/signup' onClick={this.handleHideClick}>
					<Icon name='key' />
					Signup
				</Menu.Item>
			</React.Fragment>
		);
	};

	render() {
		const { visible } = this.state;
		return (
			<div>
				<Menu inverted color={"red"} fixed='top'>
					<Menu.Item
						as={Link}
						to='/'
						header
						className='ui borderless'
						onClick={this.handleHideClick}
					>
						CU Blood
					</Menu.Item>
					<Menu.Item
						as={Button}
						position='right'
						onClick={this.handleShowClick}
					>
						<Icon name='sidebar' size='large' />
					</Menu.Item>
				</Menu>
				<Sidebar
					as={Menu}
					vertical
					onHide={this.handleSidebarHide}
					visible={visible}
					direction='right'
					animation='overlay'
				>
					{this.renderAuthButton()}
				</Sidebar>
			</div>
		);
	}
}

export default NavbarMobile;
