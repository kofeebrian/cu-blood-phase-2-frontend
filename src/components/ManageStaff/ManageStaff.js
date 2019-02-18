import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import { Menu, Header, Dropdown, Item, Label, Button } from "semantic-ui-react";

import SearchStaff from "./SearchStaff";

class ManageStaff extends Component {
	state = { activeItem: "staff" };

	renderAdmin() {
		if (this.props.userPriority === "Admin") {
			return (
				<>
					<Button negative floated='right'>
						Delete
					</Button>
					<Button floated='right'>View</Button>
				</>
			);
		}

		return null;
	}

	renderList = () => {
		const { staffs } = this.props;
		return staffs.map(staff => {
			return (
				<Item key={staff.id}>
					<Item.Content>
						<Item.Header as='a'>My Neighbor Totoro</Item.Header>
						<Item.Meta>
							<span className='cinema'>IFC Cinema</span>
						</Item.Meta>
						<Item.Description>{}</Item.Description>
						<Item.Extra>
							{this.renderAdmin()}
							<Label>Limited</Label>
						</Item.Extra>
					</Item.Content>
				</Item>
			);
		});
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem } = this.state;
		return (
			<div>
				<Header
					size='huge'
					style={{ marginTop: "20px", paddingLeft: "1.5rem" }}
				>
					Manage Staff
				</Header>
				<Menu secondary stackable>
					<Menu.Item header>Status</Menu.Item>
					<Menu.Item
						name='staff'
						active={activeItem === "staff"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='pending'
						active={activeItem === "pending"}
						onClick={this.handleItemClick}
					/>

					<Menu.Menu position='right'>
						<Dropdown item text='Search by'>
							<Dropdown.Menu>
								<Dropdown.Item>Position</Dropdown.Item>
								<Dropdown.Item>Name</Dropdown.Item>
								<Dropdown.Item>Year</Dropdown.Item>
							</Dropdown.Menu>
						</Dropdown>
						<Menu.Item>
							<SearchStaff staffs={this.props.staffs} />
						</Menu.Item>
					</Menu.Menu>
				</Menu>
				<div className='ui container' style={{ marginTop: "40px" }}>
					<Item.Group divided>{this.renderList()}</Item.Group>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		userPriority: state.auth.priority,
		staffs: Object.values(state.staffs.staffs)
	};
};

export default connect(mapStateToProps)(ManageStaff);
