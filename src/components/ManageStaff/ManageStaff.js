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
	Segment
} from "semantic-ui-react";

import {
	fetchStaffs,
	deleteStaff,
	approveStaff,
	promoteStaff
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
											<label htmlFor='firstName'>
												<strong>Name</strong>
											</label>
											<p>
												{staff.firstName} {staff.lastName}
											</p>
											<label htmlFor='nickName'>
												<strong>Nickname</strong>
											</label>
											<p>{staff.nickName}</p>
											<Modal
												trigger={
													<Button
														disabled={staff.isAdmin ? true : false}
														primary
														inverted
													>
														Promote
													</Button>
												}
												header='Promotion Confirm'
												content={`Warning! Are you sure to promote ${
													staff
														? `${staff.firstName} ${staff.lastName}`
														: "this staff"
												} ?`}
												actions={[
													{ key: "cancel", content: "Cancel", secondary: true },
													{
														key: "confirm",
														content: "Confirm",
														negative: true,
														onClick: () => this.handlePromoteClick(staff.id)
													}
												]}
											/>
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
	{ fetchStaffs, deleteStaff, approveStaff, promoteStaff }
)(ManageStaff);
