import React from "react";
import { Link } from "react-router-dom";
import {
	Button,
	Icon,
	Menu,
	Sidebar,
	Image,
	Segment,
	Divider,
	Header
} from "semantic-ui-react";

class NavbarMobile extends React.Component {
	state = { visible: false };

	handleHideClick = () => this.setState({ visible: false });
	handleShowClick = () => this.setState({ visible: true });
	handleSidebarHide = () => this.setState({ visible: false });

	render() {
		const { visible } = this.state;
		const screenHeight = window.screen.height;

		return (
			<div>
				<Menu fixed='top'>
					<Menu.Item as={Link} to='/' header className='ui borderless'>
						<Image
							src='https://cu-blood.herokuapp.com/static/logo/logo1.svg'
							size='mini'
						/>
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
					size='massive'
					vertical
					onHide={this.handleSidebarHide}
					visible={visible}
					direction='top'
					animation='push'
				>
					<Menu.Menu as={Segment} basic style={{ padding: "9px" }}>
						<Menu.Item>
							<Image
								src='https://cu-blood.herokuapp.com/static/logo/logo1.svg'
								size='mini'
							/>
						</Menu.Item>
						<Menu.Item style={{ padding: "20px 0 0 6px" }}>
							<Header as='h3' textAlign='center'>
								CU Blood
							</Header>
						</Menu.Item>
						<Menu.Menu position='right'>
							<Menu.Item as={Button} onClick={this.handleHideClick}>
								<Icon name='close' circular inverted color={"red"} />
							</Menu.Item>
						</Menu.Menu>
					</Menu.Menu>
					<Menu.Item as={Divider} horizontal fitted />
					<Menu.Item
						as={Link}
						to='/'
						onClick={this.handleHideClick}
						style={{ margin: "auto" }}
					>
						<Icon name='home' />
						Home
					</Menu.Item>
					<Menu.Item as={Link} to='/qr' onClick={this.handleHideClick}>
						<Icon name='qrcode' />
						QR Reader
					</Menu.Item>
					<Menu.Item
						as={Link}
						to='/manage-staff'
						onClick={this.handleHideClick}
					>
						<Icon name='group' />
						Manage Staff
					</Menu.Item>
					<Menu.Item
						onClick={() => {
							this.props.logout();
						}}
					>
						<Icon name='sign-out' />
						Logout
					</Menu.Item>
					<Menu.Item as={Segment} style={{ minHeight: screenHeight }} />
				</Sidebar>
			</div>
		);
	}
}

export default NavbarMobile;
