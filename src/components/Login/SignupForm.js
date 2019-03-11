import React, { Component } from "react";
import { Link, Redirect, Prompt } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Loader, Header, Icon } from "semantic-ui-react";

import "./Login.css";
import { createStaff } from "../../actions";
import FormValidator from "../FormValidator";

/* values ฝ่ายต่างๆ
	0 - Event
	1 - PR
	2 - Reception
	3 -	Registration
	4 - HR
*/

class SignupForm extends Component {
	submitted = false;

	validator = new FormValidator([
		{
			field: "username",
			method: "isEmpty",
			validWhen: false,
			message: "Username is required."
		},
		{
			field: "password",
			method: "isEmpty",
			validWhen: false,
			message: "Password is required"
		},
		{
			field: "password",
			method: "isLength",
			args: [{ min: 6, max: undefined }],
			validWhen: true,
			message: "Password has to be more 6 characters."
		},
		{
			field: "email",
			method: "isEmpty",
			validWhen: false,
			message: "E-mail is required"
		},
		{
			field: "email",
			method: "isEmail",
			validWhen: true,
			message: "That is not a valid email."
		},
		{
			field: "firstName",
			method: "isEmpty",
			validWhen: false,
			message: "Please add your firstname."
		},
		{
			field: "lastName",
			method: "isEmpty",
			validWhen: false,
			message: "Please add your lastname."
		},
		{
			field: "nickName",
			method: "isEmpty",
			validWhen: false,
			message: "Please add your nickname."
		},
		{
			field: "gender",
			method: "isEmpty",
			validWhen: false,
			message: "Please choose your gender."
		},
		{
			field: "faculty",
			method: "isEmpty",
			validWhen: false,
			message: "Please choose your faculty."
		},
		{
			field: "year",
			method: "isEmpty",
			validWhen: false,
			message: "Please choose year."
		},
		{
			field: "studentNumber",
			method: "isEmpty",
			validWhen: false,
			message: "Student number is required."
		},
		{
			field: "studentNumber",
			method: "isNumeric",
			args: [{ no_symbols: true }],
			validWhen: true,
			message: "Student number must contains only 10 numbers."
		},
		{
			field: "studentNumber",
			method: "isLength",
			args: [{ min: 10, max: 10 }],
			validWhen: true,
			message: "Student number must contains only 10 numbers."
		},
		{
			field: "phoneNumber",
			method: "matches",
			args: ['/^(?([0-9]{3}))*-([0-9]{3})*-([0-9]{4})$/'],
			validWhen: true,
			message: "Phone number is incorrect."
		},
		{
			field: "team",
			method: "isEmpty",
			validWhen: false,
			message: "Please choose your team you want to do."
		}
	]);

	state = {
		isChange: false,
		username: "",
		password: "",
		firstName: "",
		lastName: "",
		nickName: "",
		gender: "M",
		studentNumber: "",
		faculty: "0",
		year: "1",
		email: "",
		phoneNumber: "",
		lineId: "",
		facebook: "",
		team: "",
		validation: this.validator.valid(),
		accepted: false
	};

	componentDidMount() {
		console.log(this.state);
	}

	handleAcceptedCheck = e => {
		this.setState({
			accepted: e.target.checked
		});
	};

	handleFormSubmit = async e => {
		e.preventDefault();

		const validation = await this.validator.validate(this.state);
		this.setState({ validation, isChange: true });
		this.submitted = true;

		if (!validation.isValid) {
			window.scrollTo(0, 0);
		}

		if (validation.isValid) {
			this.setState({ isChange: false });
			const {
				username,
				password,
				firstName,
				lastName,
				nickName,
				gender,
				studentNumber,
				faculty,
				year,
				email,
				phoneNumber,
				lineId,
				facebook,
				team
			} = this.state;
			this.props.createStaff({
				username,
				password,
				firstName,
				lastName,
				nickName,
				gender,
				studentNumber,
				faculty,
				year,
				email,
				phoneNumber,
				lineId,
				facebook,
				team
			});
		}
	};

	handleInputChange = e => {
		const value = e.target.value;
		const name = e.target.name;

		console.log(name + " " + value);

		this.setState({
			isChange: true,
			[name]: value
		});
	};

	render() {
		const { isAuthenticated, user } = this.props;
		const { from } = this.props.location.state || { from: { pathname: "/" } };

		if (user) {
			return <Redirect to={from} />;
		}

		if (isAuthenticated && !user) {
			return (
				<div className='ui container'>
					<Loader active size='massive'>
						Loading
					</Loader>
				</div>
			);
		}

		let validation = this.submitted
			? this.validator.validate(this.state)
			: this.state.validation;

		return (
			<div id='signup-form' className='ui container'>
				<Header as='h1' icon textAlign='center'>
					<Icon name='signup' circular inverted color='red' size='mini' />
					<Header.Content>Sign Up</Header.Content>
				</Header>
				<Grid className='ui centered grid' style={{ padding: "30px" }}>
					<form className='ui form error' onSubmit={this.handleFormSubmit}>
						<Prompt
							when={this.state.isChange}
							message='Are you sure tou want to dismiss this form?'
						/>
						<h4 className='ui dividing header'>Username and Password</h4>
						<div className='field'>
							<div className='two fields'>
								<div
									className={`field ${
										validation.username.isInvalid ? "error" : ""
										}`}
								>
									<label htmlFor='username'>username</label>
									<input
										type='text'
										name='username'
										id='username'
										placeholder='username'
										onChange={this.handleInputChange}
									/>
									<div
										className={`ui message negative ${
											validation.username.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.username.message}
									</div>
								</div>
								<div
									className={`field ${
										validation.password.isInvalid ? "error" : ""
										}`}
								>
									<label htmlFor='password'>password</label>
									<input
										type='password'
										name='password'
										id='password'
										placeholder='password'
										onChange={this.handleInputChange}
									/>
									<div
										className={`ui message negative ${
											validation.password.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.password.message}
									</div>
								</div>
							</div>
						</div>

						<h4 className='ui dividing header'>ข้อมูลส่วนตัว</h4>
						<div className='field'>
							<div className='two fields'>
								<div
									className={`field ${
										validation.firstName.isInvalid ? "error" : ""
										}`}
								>
									<label>ชื่อ</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='firstName'
										placeholder='First Name'
									/>
									<div
										className={`ui message negative ${
											validation.firstName.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.firstName.message}
									</div>
								</div>
								<div
									className={`field ${
										validation.lastName.isInvalid ? "error" : ""
										}`}
								>
									<label>นามสกุล</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='lastName'
										placeholder='Last Name'
									/>
									<div
										className={`ui message negative ${
											validation.lastName.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.lastName.message}
									</div>
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='two fields'>
								<div
									className={`field ${
										validation.nickName.isInvalid ? "error" : ""
										}`}
								>
									<label>ชื่อเล่น</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='nickName'
										placeholder='Nickname'
									/>
									<div
										className={`ui message negative ${
											validation.nickName.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.nickName.message}
									</div>
								</div>
								<div
									className={`field ${
										validation.gender.isInvalid ? "error" : ""
										}`}
								>
									<label>เพศ</label>
									<select
										name='gender'
										onChange={this.handleInputChange}
										className='ui fluid dropdown'
									>
										<option value='M'>ชาย</option>
										<option value='F'>หญิง</option>
									</select>
									<div
										className={`ui message negative ${
											validation.gender.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.gender.message}
									</div>
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='three fields'>
								<div
									className={`field ${
										validation.studentNumber.isInvalid ? "error" : ""
										}`}
								>
									<label>รหัสนิสิต</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='studentNumber'
										placeholder='Student ID'
										maxLength='10'
									/>
									<div
										className={`ui message negative ${
											validation.studentNumber.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.studentNumber.message}
									</div>
								</div>
								<div
									className={`field ${
										validation.faculty.isInvalid ? "error" : ""
										}`}
								>
									<label>คณะ</label>
									<select
										name='faculty'
										className='ui fluid dropdown'
										onChange={this.handleInputChange}
									>
										<option value='0'>อื่นๆ</option>
										<option value='1'>พยาบาลศาสตร์</option>
										<option value='2'>วิศวกรรมศาสตร์</option>
										<option value='3'>วิทยาศาสตร์</option>
										<option value='4'>พาณิชยศาสตร์และการบัญชี</option>
										<option value='5'>เศรษฐศาสตร์</option>
										<option value='6'>ครุศาสตร์</option>
										<option value='7'>อักษรศาสตร์</option>
										<option value='8'>นิติศาสตร์</option>
										<option value='9'>สถาปัตยกรรมศาสตร์</option>
										<option value='10'>รัฐศาสตร์</option>
										<option value='11'>ศิลปกรรมศาสตร์</option>
										<option value='12'>วิทยาศาสตร์การกีฬา</option>
										<option value='13'>นิเทศศาสตร์</option>
										<option value='14'>แพทยศาสตร์</option>
										<option value='15'>ทันตแพทยศาสตร์</option>
										<option value='16'>จิตวิทยา</option>
										<option value='17'>เภสัชศาสตร์</option>
										<option value='18'>สหเวชศาสตร์</option>
										<option value='19'>สัตวแพทยศาสตร์</option>
										<option value='20'>สำนักวิชาทรัพยากรการเกษตร</option>
									</select>
									<div
										className={`ui message negative ${
											validation.faculty.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.faculty.message}
									</div>
								</div>
								<div
									className={`field ${
										validation.year.isInvalid ? "error" : ""
										}`}
								>
									<label>ชั้นปี</label>
									<select
										name='year'
										className='ui fluid dropdown'
										onChange={this.handleInputChange}
									>
										<option value='1'>1</option>
										<option value='2'>2</option>
										<option value='3'>3</option>
										<option value='4'>4</option>
										<option value='5'>5</option>
										<option value='6'>6</option>
									</select>
									<div
										className={`ui message negative ${
											validation.year.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.year.message}
									</div>
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='two fields'>
								<div
									className={`field ${
										validation.phoneNumber.isInvalid ? "error" : ""
										}`}
								>
									<label>เบอร์โทรศัพท์</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='phoneNumber'
										placeholder='PhoneNumber number'
									/>
									<div
										className={`ui message negative ${
											validation.phoneNumber.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.phoneNumber.message}
									</div>
								</div>
								<div
									className={`field ${
										validation.email.isInvalid ? "error" : ""
										}`}
								>
									<label>E-mail</label>
									<input
										onChange={this.handleInputChange}
										type='email'
										name='email'
										placeholder='E-mail'
									/>
									<div
										className={`ui message negative ${
											validation.email.isInvalid ? "" : "hidden"
											}`}
									>
										{validation.email.message}
									</div>
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='two fields'>
								<div className='field'>
									<label>Line ID</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='lineId'
										placeholder='Line ID'
									/>
								</div>
								<div className='field'>
									<label>Facebook</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='facebook'
										placeholder='Facebook'
									/>
								</div>
							</div>
						</div>

						<br />
						<h4 className='ui dividing header'>ฝ่ายที่ต้องการเข้า</h4>
						<div
							className={`field ${validation.team.isInvalid ? "error" : ""}`}
							name='team'
						>
							<div className='field'>
								<div className='ui radio checkbox'>
									<input
										type='radio'
										name='team'
										value='0'
										tabIndex='0'
										checked={this.state.team === "0"}
										onChange={this.handleInputChange}
									/>
									<label>กิจกรรม (Event)</label>
								</div>
							</div>
							<div className='field'>
								<div className='ui radio checkbox'>
									<input
										type='radio'
										name='team'
										value='1'
										tabIndex='0'
										checked={this.state.team === "1"}
										onChange={this.handleInputChange}
									/>
									<label>ประชาสัมพันธ์ (PR)</label>
								</div>
							</div>
							<div className='field'>
								<div className='ui radio checkbox'>
									<input
										type='radio'
										name='team'
										value='2'
										tabIndex='0'
										checked={this.state.team === "2"}
										onChange={this.handleInputChange}
									/>
									<label>ปฏิคม (Reception)</label>
								</div>
							</div>
							<div className='field'>
								<div className='ui radio checkbox'>
									<input
										type='radio'
										name='team'
										value='3'
										tabIndex='0'
										checked={this.state.team === "3"}
										onChange={this.handleInputChange}
									/>
									<label>ทะเบียน (Registration)</label>
								</div>
							</div>
							<div className='field'>
								<div className='ui radio checkbox'>
									<input
										type='radio'
										name='team'
										value='4'
										tabIndex='0'
										checked={this.state.team === "4"}
										onChange={this.handleInputChange}
									/>
									<label>ทรัพยากรบุคคล (HR)</label>
								</div>
							</div>
							<div
								className={`ui message negative ${
									validation.team.isInvalid ? "" : "hidden"
									}`}
							>
								{validation.team.message}
							</div>
						</div>

						<br />
						<div className='field'>
							<h4>
								กรุณาตรวจสอบรายละเอียดให้ครบถ้วน
								และการคัดเลือกสตาฟเข้าฝ่ายใดนั้น
								ขึ้นอยู่กับการพิจารณาของแต่ละฝ่าย*
							</h4>
							<div className='ui checkbox'>
								<input
									onChange={this.handleAcceptedCheck}
									type='checkbox'
									name='accepted'
								/>
								<label>รับทราบ</label>
							</div>
						</div>
						<br />
						<button
							className='ui button left floated'
							tabIndex='0'
							disabled={!this.state.accepted}
						>
							Submit
						</button>
						<Link className='ui button primary right floated' to='/signup'>
							Back
						</Link>
					</form>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = stateRedux => {
	return {
		isAuthenticated: stateRedux.auth.isAuthenticated,
		user: stateRedux.auth.user,
		userId: stateRedux.auth.userId,
		accessToken: stateRedux.auth.accessToken
	};
};

export default connect(
	mapStateToProps,
	{ createStaff }
)(SignupForm);
