import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import {
	Menu,
	Header,
	Dropdown,
	Item,
	Label,
	Button,
	Input
} from "semantic-ui-react";

import { fetchStaffs, deleteStaff } from "../../actions";

class ManageStaff extends Component {
	state = { activeItem: "staff", staff_results: [] };

	componentDidMount = async () => {
		await this.props.fetchStaffs();
		this.resetComponent();
	};

	componentWillMount() {
		this.resetComponent();
	}

	handleDeleteClick = () => {};

	handleChangeStatus = () => {};

	resetComponent = () => {
		console.log("resetComponent");
		return this.setState({
			isLoading: false,
			staff_results: this.props.staffs,
			value: ""
		});
	};

	handleSearchChange = (e, { value }) => {
		const { staffs } = this.props;

		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent();

			const re = new RegExp(_.escapeRegExp(this.state.value), "i");
			const isMatch = result => re.test(result.email); // <-- change type of searching

			this.setState({
				isLoading: false,
				staff_results: _.filter(staffs, isMatch)
			});

			console.log(this.state.staff_results);
		}, 300);
	};

	renderAdmin() {
		const { user } = this.props;
		if (user) {
			if (user.isAdmin) {
				return (
					<>
						<Button name='delete' negative floated='right'>
							Delete
						</Button>
						<Button name='view' floated='right'>
							View
						</Button>
					</>
				);
			}
		}

		return null;
	}

	renderList = () => {
		const { staff_results } = this.state;
		return staff_results
			.map(staff => {
				return (
					<Item key={staff.id}>
						<Item.Content>
							<Item.Header as='a'>My Neighbor Totoro</Item.Header>
							<Item.Meta>
								<span className='cinema'>{staff.email}</span>
							</Item.Meta>
							<Item.Description>{}</Item.Description>
							<Item.Extra>
								{this.renderAdmin()}
								<Label>Limited</Label>
							</Item.Extra>
						</Item.Content>
					</Item>
				);
			})
			.sort((a, b) => {
				const email_a = a.email;
				const email_b = b.email;
				if (email_a < email_b) {
					return -1;
				}
				if (email_a > email_b) {
					return 1;
				}
				return 0;
			});
	};

	handleItemClick = (e, { name }) => this.setState({ activeItem: name });

	render() {
		const { activeItem, isLoading, value } = this.state;

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
							<Input
								loading={isLoading}
								icon='search'
								onChange={_.debounce(this.handleSearchChange, 500, {
									leading: true
								})}
								value={value}
							/>
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
		user: state.auth.user,
		staffs: Object.values(state.staffs)
	};
};

export default connect(
	mapStateToProps,
	{ fetchStaffs, deleteStaff }
)(ManageStaff);
