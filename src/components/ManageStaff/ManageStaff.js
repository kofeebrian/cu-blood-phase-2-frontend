import React, { Component } from "react";
import _ from "lodash";
import { connect } from "react-redux";
import {
	Menu,
	Header,
	Item,
	Label,
	Button,
	Input,
	Modal,
	Transition,
	Segment,
	List
} from "semantic-ui-react";

import {
	fetchStaffs,
	deleteStaff,
	approveStaff,
	promoteStaff,
	demoteStaff
} from "../../actions";
import "./ManageStaff.css";

class ManageStaff extends Component {
	state = {
		staff_status: "staff",
		staff_results: [],
		isfetched: false,
		staff_view: ""
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

	handlePromoteClick = async id => {
		await this.props.promoteStaff(id);
		this.resetComponent();
	};

	handleDemoteClick = async id => {
		await this.props.demoteStaff(id);
		this.resetComponent();
	};

	resetComponent = () =>
		this.state.staff_status === "staff"
			? this.setState({
					isLoading: false,
					staff_results: this.props.staffs.filter(staff => staff.isApproved),
					staff_view: "",
					value: ""
			  })
			: this.setState({
					isLoading: false,
					staff_results: this.props.staffs.filter(staff => !staff.isApproved),
					staff_view: "",
					value: ""
			  });

	handleSearchChange = (e, { value }) => {
		const { staffs } = this.props;

		this.setState({ isLoading: true, value, staff_view: "" });

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent();

			const re = new RegExp(_.escapeRegExp(this.state.value), "i");
			const isMatch = result => {
				return (
					re.test(result.firstName + " " + result.lastName) &&
					(this.state.staff_status !== "staff"
						? !result.isApproved
						: result.isApproved)
				);
			};

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
					<div className='buttonRow'>
						<Button
							name='view'
							floated='right'
							onClick={() =>
								this.setState({
									staff_view: this.state.staff_view === staff.id ? "" : staff.id
								})
							}
						>
							View
						</Button>
						<Button
							primary
							name='approve'
							floated='right'
							onClick={e => this.handleApproveClick(staff.id)}
						>
							Approve
						</Button>
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
					</div>
				);
			}
			return (
				<div className='buttonRow'>
					<Button
						name='view'
						floated='right'
						onClick={() =>
							this.setState({
								staff_view: this.state.staff_view === staff.id ? "" : staff.id
							})
						}
					>
						View
					</Button>
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
				</div>
			);
		}

		return (
			<div className='buttonRow'>
				<Button
					name='view'
					floated='right'
					onClick={() =>
						this.setState({
							staff_view: this.state.staff_view === staff.id ? "" : staff.id
						})
					}
				>
					View
				</Button>
			</div>
		);
	};

	renderPromoteButton = staff => {
		if (staff.id != this.props.user.id) {
			if (staff.isApproved && !staff.isAdmin) {
				return (
					<Modal
						trigger={
							<Button primary inverted>
								Promote
							</Button>
						}
						header='Promotion Confirm'
						content={`Warning! Are you sure to promote ${
							staff ? `${staff.firstName} ${staff.lastName}` : "this staff"
						} ?`}
						actions={[
							{
								key: "cancel",
								content: "Cancel",
								secondary: true,
								inverted: true
							},
							{
								key: "confirm",
								content: "Confirm",
								primary: true,
								inverted: true,
								onClick: () => this.handlePromoteClick(staff.id)
							}
						]}
					/>
				);
			} else if (staff.isApproved && staff.isAdmin) {
				return (
					<Modal
						trigger={
							<Button color='red' inverted>
								Demote
							</Button>
						}
						header='Demotion Confirm'
						content={`Warning! Are you sure to demote ${
							staff ? `${staff.firstName} ${staff.lastName}` : "this staff"
						} ?`}
						actions={[
							{
								key: "cancel",
								content: "Cancel",
								secondary: true,
								inverted: true
							},
							{
								key: "confirm",
								content: "Demote",
								color: "red",
								inverted: true,
								onClick: () => this.handleDemoteClick(staff.id)
							}
						]}
					/>
				);
			}
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
			return staff_results.map(staff => {
				return (
					<Item key={staff.id}>
						<Item.Content>
							<Item.Header>
								{staff.firstName} {staff.lastName}
							</Item.Header>
							<Item.Meta>email: {staff.email}</Item.Meta>
							<Item.Description>
								<Transition.Group animation={"fade down"} duration={300}>
									{this.state.staff_view === staff.id && (
										<Segment>
											<List>
												<List.Item
													icon='user'
													header='Name'
													content={`${staff.firstName} ${staff.lastName}`}
												/>
												<List.Item
													icon={`${staff.gender === "M" ? "man" : "woman"}`}
													header='Gender'
													content={`${
														staff.gender === "M" ? "Male" : "Female"
													}`}
												/>
												<List.Item
													icon='mail'
													header='Email'
													content={`${staff.email}`}
												/>
												<List.Item
													icon='id card'
													header='Student ID'
													content={`${staff.studentNumber}`}
												/>
												<List.Item
													icon='student'
													header='Faculty'
													content={`${staff.faculty}`}
												/>
												<List.Item
													icon='linechat'
													header='LINE'
													content={`${staff.lineId}`}
												/>
												<List.Item
													icon='facebook'
													header='Facebook'
													content={`${staff.facebook}`}
												/>
												<List.Item
													icon='phone'
													header='Phone'
													content={`${staff.phoneNumber}`}
												/>
											</List>
											{this.renderPromoteButton(staff)}
										</Segment>
									)}
								</Transition.Group>
							</Item.Description>
							<Item.Extra>
								<Label
									color={
										staff.isAdmin ? "red" : staff.isApproved ? null : "blue"
									}
								>
									{staff.isApproved
										? staff.isAdmin
											? "Admin"
											: "Staff"
										: "Pending"}
								</Label>
								<br />
								{this.renderAdmin(staff)}
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
					<Transition.Group as={Item.Group} duration={200} divided>
						{this.renderList()}
					</Transition.Group>
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
	{ fetchStaffs, deleteStaff, approveStaff, promoteStaff, demoteStaff }
)(ManageStaff);
