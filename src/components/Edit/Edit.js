import React, { Component } from "react";
import { Grid, Loader, Input, Segment } from "semantic-ui-react";
import { connect } from "react-redux";

import { fetchStaff } from "../../actions";
import "../Login/Login.css";

class Edit extends Component {
	state = { editing: false };

	componentWillMount() {
		this.props.fetchStaff(this.props.match.params.id);
	}

	isBeingEdited = () => {};

	render() {
		console.log(this.props);
		if (!this.props.editee) {
			return (
				<div className='ui container'>
					<Loader active size='massive'>
						Loading
					</Loader>
				</div>
			);
		}

		const { firstName, lastName, email } = this.props.editee;

		return (
			<div id='edit-form'>
				<Grid
					className='ui centered grid'
					textAlign='center'
					style={{ padding: "60px" }}
				>
					<form className='ui form'>
						<h4 className='ui dividing header'>ข้อมูลส่วนตัว</h4>
						<div className='field'>
							<div className='two fields'>
								<div className='field'>
									<label>ชื่อ</label>
									<EditComponent
										type='text'
										name='firstName'
										placeholder='First Name'
										value={firstName}
										isediting={this.state.isediting}
									/>
								</div>
								<div className='field'>
									<label>นามสกุล</label>
									<input
										type='text'
										name='lastName'
										placeholder='Last Name'
										defaultValue={lastName}
									/>
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='two fields'>
								<div className='field'>
									<label>ชื่อเล่น</label>
									<input type='text' name='nick-name' placeholder='Nickname' />
								</div>
								<div className='field'>
									<label>เพศ</label>
									<select className='ui fluid dropdown'>
										<option value='M'>ชาย</option>
										<option value='F'>หญิง</option>
									</select>
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='three fields'>
								<div className='field'>
									<label>รหัสนิสิต</label>
									<input
										type='text'
										name='student-id'
										placeholder='Student ID'
									/>
								</div>
								<div className='field'>
									<label>คณะ</label>
									<EditComponent
										name='Faculty'
										className='ui fluid dropdown'
										type='select'
										options={optionsFaculty}
										isediting={this.state.isediting}
									/>
								</div>
								<div className='field'>
									<label>ชั้นปี</label>
									<select className='ui fluid dropdown'>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
									</select>
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='two fields'>
								<div className='field'>
									<label>เบอร์โทรศัพท์</label>
									<input
										type='text'
										name='phone-number'
										placeholder='Phone number'
									/>
								</div>
								<div className='field'>
									<label>E-mail</label>
									<input
										type='text'
										name='email'
										placeholder='E-mail'
										defaultValue={email}
									/>
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='two fields'>
								<div className='field'>
									<label>Line ID</label>
									<input type='text' name='line-id' placeholder='Line  ID' />
								</div>
								<div className='field'>
									<label>Facebook</label>
									<input type='text' name='fb' placeholder='Facebook' />
								</div>
							</div>
						</div>

						<Grid
							className='ui centered grid'
							textAlign='center'
							style={{ padding: "30px" }}
						>
							<div
								onClick={e => this.setState({ isediting: true })}
								className='ui button'
								tabIndex='0'
							>
								Edit
							</div>
							<div
								onClick={e => this.setState({ isediting: false })}
								className='ui button'
								tabIndex='0'
							>
								Save
							</div>
						</Grid>
					</form>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (stateRedux, ownProps) => {
	return {
		editor: stateRedux.auth.user,
		editee: stateRedux.staffs[ownProps.match.params.id]
	};
};

export default connect(
	mapStateToProps,
	{ fetchStaff }
)(Edit);
