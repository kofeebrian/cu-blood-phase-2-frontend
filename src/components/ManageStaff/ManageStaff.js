import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	Menu,
	Header,
	Item,
	Label,
	Button,
	Input,
	Modal
} from "semantic-ui-react";

import { fetchStaffs, deleteStaff, approveStaff } from "../../actions";

class ManageStaff extends Component {
	state = {
		staff_status: "staff",
		staff_results: [],
		isfetched: false
	};

	componentDidMount = async () => {
		await this.props.fetchStaffs();
		setTimeout(() => {
			this.setState({
				isfetched: true
			});
		}, 100);
		this.resetComponent();
	};

	componentWillMount() {
		this.resetComponent();
	}

	handleDeleteClick = async id => {
		await this.props.deleteStaff(id);
		this.setState({
			staff_results: this.state.staff_results.filter(staff => staff.id !== id)
		});
	};

	handleApproveClick = async id => {
		await this.props.approveStaff(id);
		this.resetComponent();
	};

	resetComponent = () =>
		this.state.staff_status === "staff"
			? this.setState({
					isLoading: false,
					staff_results: this.props.staffs.filter(staff => staff.isApproved),
					value: ""
			  })
			: this.setState({
					isLoading: false,
					staff_results: this.props.staffs.filter(staff => !staff.isApproved),
					value: ""
			  });

	handleSearchChange = (e, { value }) => {
		const { staffs } = this.props;

		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent();

			const re = new RegExp(_.escapeRegExp(this.state.value), "i");
			const isMatch = result =>
				re.test(result.username) &&
				(this.state.staff_status !== "staff" ? !result.isApproved : true); // <-- change type of searching

			this.setState({
				isLoading: false,
				staff_results: _.filter(staffs, isMatch)
			});
		}, 300);
	};

	renderAdmin = staff => {
		const { user } = this.props;

		if (user && user.isAdmin && user.id !== staff.id) {
			if (!staff.isAdmin && !staff.isApproved) {
				return (
					<>
						<Modal
							trigger={
								<Button name='delete' negative floated='right'>
									Decline
								</Button>
							}
							header='Decline Staff'
							content={`Are you sure to decline this staff`}
							actions={[
								{
									key: "delete",
									content: "Decline",
									negative: true,
									onClick: e => this.handleDeleteClick(staff.id)
								},
								{ key: "cancel", content: "Cancel" }
							]}
						/>

						<Button
							primary
							name='approve'
							floated='right'
							onClick={e => this.handleApproveClick(staff.id)}
						>
							Approve
						</Button>

						<Button
							as={Link}
							to={`/edit/${staff.id}`}
							name='view'
							floated='right'
						>
							View
						</Button>
					</>
				);
			}
			return (
				<>
					<Modal
						trigger={
							<Button name='delete' negative floated='right'>
								Delete
							</Button>
						}
						header='Delete Staff'
						content={`Are you sure to delete this staff`}
						actions={[
							{
								key: "delete",
								content: "Delete",
								negative: true,
								onClick: e => this.handleDeleteClick(staff.id)
							},
							{ key: "cancel", content: "Cancel" }
						]}
					/>

					<Button
						as={Link}
						to={`/edit/${staff.id}`}
						name='view'
						floated='right'
					>
						View
					</Button>
				</>
			);
		}

		return null;
	};

	renderList = () => {
		const { staff_results, isfetched } = this.state;
		if (!isfetched) {
			return (
				<div>
					<h2>Loading...</h2>
				</div>
			);
		}

		if (staff_results.length > 0) {
			return staff_results
				.sort((a, b) => {
					if (a.isAdmin && !b.isAdmin) {
						return 1;
					} else if (b.isAdmin && !a.isAdmin) {
						return -1;
					}
					if (a.isApproved && !b.isApproved) {
						return 1;
					} else if (b.isApproved && !a.isApproved) {
						return -1;
					}
					return 0;
				})
				.reverse()
				.map(staff => {
					return (
						<Item key={staff.id}>
							<Item.Content>
								<Item.Header as='a'>{staff.username}</Item.Header>
								<Item.Meta>
									<span className='cinema'>{staff.email}</span>
								</Item.Meta>
								<Item.Description>{}</Item.Description>
								<Item.Extra>
									{this.renderAdmin(staff)}
									<Label>
										{staff.isApproved
											? staff.isAdmin
												? "Admin"
												: "Staff"
											: "Pending"}
									</Label>
								</Item.Extra>
							</Item.Content>
						</Item>
					);
				});
		}

		return (
			<div>
				<h2>No Result</h2>
			</div>
		);
	};

	handleItemClick = async (e, { name }) => {
		await this.setState({ staff_status: name });
		this.resetComponent();
	};

	render() {
		const { staff_status, isLoading, value } = this.state;

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
						active={staff_status === "staff"}
						onClick={this.handleItemClick}
					/>
					<Menu.Item
						name='pending'
						active={staff_status === "pending"}
						onClick={this.handleItemClick}
					/>

					<Menu.Menu position='right'>
						<Menu.Item>
							<Input
								loading={isLoading}
								icon='search'
								placeholder='Search...'
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

const mapStateToProps = stateRedux => {
	console.log(stateRedux);
	return {
		user: stateRedux.auth.user,
		staffs: Object.values(stateRedux.staffs)
	};
};

export default connect(
	mapStateToProps,
	{ fetchStaffs, deleteStaff, approveStaff }
)(ManageStaff);
