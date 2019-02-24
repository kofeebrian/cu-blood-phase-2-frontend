import React, { Component } from "react";
import _ from "lodash";
import { Link, Redirect } from "react-router-dom";
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
			field: "team",
			method: "isEmpty",
			validWhen: false,
			message: "Please choose your team you want to do."
		}
	]);

	state = {
		fields: {
			username: "",
			password: "",
			firstName: "",
			lastName: "",
			nickName: "",
			gender: "",
			faculty: "",
			lineId: "",
			facebook: "",
			team: "",
			validation: this.validator.valid()
		},
		error: {},
		accepted: false
	};

	componentDidMount() {
		console.log(this.state.fields);
	}

	handleAcceptedCheck = e => {
		this.setState({
			accepted: e.target.checked
		});
	};

	handleFormSubmit = async e => {
		e.preventDefault();

		const validation = await this.validator.validate(
			_.omit(this.state.fields, "ignore_whitespace")
		);
		this.setState({ validation });
		this.submitted = true;

		if (validation.isValid()) {
			const formData = { ...this.state.fields };
			this.props.createStaff(formData);
		}
	};

	handleInputChange = e => {
		e.preventDefault();
		const value = e.target.value;
		const name = e.target.name;

		this.setState({
			...this.state,
			fields: { ...this.state.fields, [name]: value }
		});
		console.log(this.state.fields);
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
			? this.validator.validate(_.omit(this.state.fields, "ignore_whitespace"))
			: this.state.fields.validation;

		return (
			<div id='signup-form' className='ui container'>
				<Header as='h1' icon textAlign='center'>
					<Icon name='signup' circular inverted color='red' size='mini' />
					<Header.Content>Sign Up</Header.Content>
				</Header>
				<Grid className='ui centered grid' style={{ padding: "30px" }}>
					<form className='ui form error' onSubmit={this.handleFormSubmit}>
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
									<span className='ui message negative hidden'>
										{validation.username.message}
									</span>
								</div>
								<div className='field'>
									<label htmlFor='password'>password</label>
									<input
										type='password'
										name='password'
										id='password'
										placeholder='password'
										onChange={this.handleInputChange}
									/>
								</div>
							</div>
						</div>

						<h4 className='ui dividing header'>ข้อมูลส่วนตัว</h4>
						<div className='field'>
							<div className='two fields'>
								<div className='field'>
									<label>ชื่อ</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='firstName'
										placeholder='First Name'
									/>
								</div>
								<div className='field'>
									<label>นามสกุล</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='lastName'
										placeholder='Last Name'
									/>
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='two fields'>
								<div className='field'>
									<label>ชื่อเล่น</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='nickName'
										placeholder='Nickname'
									/>
								</div>
								<div className='field'>
									<label>เพศ</label>
									<select
										name='gender'
										onChange={this.handleInputChange}
										className='ui fluid dropdown'
									>
										<option value=''>-</option>
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
										onChange={this.handleInputChange}
										type='text'
										name='studentNumber'
										placeholder='Student ID'
									/>
								</div>
								<div className='field'>
									<label>คณะ</label>
									<select
										name='faculty'
										className='ui fluid dropdown'
										onChange={this.handleInputChange}
									>
										<option value='Med'>อื่นๆ</option>
										<option value='Med'>พยาบาลศาสตร์</option>
										<option value='Eng'>วิศวกรรมศาสตร์</option>
										<option value='Med'>วิทยาศาสตร์</option>
										<option value='Eng'>พาณิชยศาสตร์และการบัญชี</option>
										<option value='Med'>เศรษฐศาสตร์</option>
										<option value='Eng'>ครุศาสตร์</option>
										<option value='Med'>อักษรศาสตร์</option>
										<option value='Eng'>นิติศาสตร์</option>
										<option value='Med'>สถาปัตยกรรมศาสตร์</option>
										<option value='Eng'>รัฐศาสตร์</option>
										<option value='Med'>ศิลปกรรมศาสตร์</option>
										<option value='Eng'>วิทยาศาสตร์การกีฬา</option>
										<option value='Med'>นิเทศศาสตร์</option>
										<option value='Eng'>แพทยศาสตร์</option>
										<option value='Med'>ทันตแพทยศาสตร์</option>
										<option value='Eng'>จิตวิทยา</option>
										<option value='Med'>เภสัชศาสตร์</option>
										<option value='Eng'>สหเวชศาสตร์</option>
										<option value='Med'>สัตวแพทยศาสตร์</option>
										<option value='Eng'>สำนักวิชาทรัพยากรการเกษตร</option>
									</select>
								</div>
								<div className='field'>
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
								</div>
							</div>
						</div>

						<div className='field'>
							<div className='two fields'>
								<div className='field'>
									<label>เบอร์โทรศัพท์</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='phoneNumber'
										placeholder='Phone number'
									/>
								</div>
								<div className='field'>
									<label>E-mail</label>
									<input
										onChange={this.handleInputChange}
										type='email'
										name='email'
										placeholder='E-mail'
									/>
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
							className='field'
							name='team'
							onChange={this.handleInputChange}
						>
							<div className='two fields'>
								<div className='field'>
									<div className='ui radio checkbox'>
										<input type='radio' name='team' value='0' tabIndex='0' />
										<label>กิจกรรม (Event)</label>
									</div>
								</div>
								<div className='field'>
									<div className='ui radio checkbox'>
										<input type='radio' name='team' value='1' tabIndex='0' />
										<label>ประชาสัมพันธ์ (PR)</label>
									</div>
								</div>
								<div className='field'>
									<div className='ui radio checkbox'>
										<input type='radio' name='team' value='2' tabIndex='0' />
										<label>ปฏิคม (Reception)</label>
									</div>
								</div>
								<div className='field'>
									<div className='ui radio checkbox'>
										<input type='radio' name='team' value='3' tabIndex='0' />
										<label>ทะเบียน (Registration)</label>
									</div>
								</div>
								<div className='field'>
									<div className='ui radio checkbox'>
										<input type='radio' name='team' value='4' tabIndex='0' />
										<label>ทรัพยากรบุคคล (HR)</label>
									</div>
								</div>
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
