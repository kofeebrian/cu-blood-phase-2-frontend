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
		return 
	}

	render() {
		const { visible } = this.state;
		return (
			<div>
				<Menu inverted color={"red"} fixed='top'>
					<Menu.Item as={Link} to='/' header className='ui borderless'>
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
					<Menu.Item>
						<Icon name='home' />
						Home
					</Menu.Item>
					<Menu.Item>
						<Icon name='gamepad' />
						QR Reader
					</Menu.Item>
					<Menu.Item>
						<Icon name='camera' />
						Manage Staff
					</Menu.Item>
					<Menu.Item
						onClick={() =>
							this.props.logout(() => {
								this.setState({ visible: false });
							})
						}
					>
						<Icon name='key' />
						Logout
					</Menu.Item>
				</Sidebar>
			</div>
		);
	}
}

export default NavbarMobile;
