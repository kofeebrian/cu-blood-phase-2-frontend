import React from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown, Image, Header } from "semantic-ui-react";
import logo from "../../cubloodlogo.svg";

class NavbarDesktop extends React.Component {
	renderAdminMenuItem = () => {
		const { user } = this.props;

		if (user && user.isAdmin) {
			return (
				<Menu.Item className='ui borderless' as={Link} to='/manage-staff'>
					<Header as='h4'>Manage Staff</Header>
				</Menu.Item>
			);
		}

		return null;
	};

	render() {
		return (
			<Menu stackable fixed='top'>
				<Menu.Item header className='ui text centered width 10px'>
					<Image src={logo} size='tiny' />
					CU Blood
				</Menu.Item>
				<Menu.Item className='ui borderless' as={Link} to='/'>
					<Header as='h4'>Home</Header>
				</Menu.Item>
				<Menu.Item className='ui borderless' as={Link} to='/qr'>
					<Header as='h4'>QR reader</Header>
				</Menu.Item>

				{this.renderAdminMenuItem()}

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
							<Dropdown.Item
								text='Edit profile'
								as={Link}
								to={`/edit/${this.props.user ? this.props.user.id : ""}`}
							/>
							<Dropdown.Item text='Logout' onClick={this.props.logout} />
						</Dropdown.Menu>
					</Dropdown>
				</Menu.Menu>
			</Menu>
		);
	}
}

export default NavbarDesktop;
