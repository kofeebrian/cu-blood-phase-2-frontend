import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import { Grid, Loader, Header, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import _ from "lodash";

import { fetchStaff, editStaff } from "../../actions";
import FormValidator from "../FormValidator";
import "../Login/Login.css";

const formdata = [
	"firstName",
	"lastName",
	"nickName",
	"gender",
	"studentNumber",
	"faculty",
	"year",
	"email",
	// "phoneNumber",
	"lineId",
	"facebook",
	"team"
];

class Edit extends Component {
	componentDidMount = async () => {
		await this.props.fetchStaff(this.props.match.params.id);
		this.setState({ ...this.props.editee });
		console.log(this.state);
	};

	submitted = false;

	validator = new FormValidator([
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
			field: "team",
			method: "isEmpty",
			validWhen: false,
			message: "Please choose your team you want to do."
		}
	]);

	state = {
		isChange: false,
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
		validation: this.validator.valid()
	};

	handleFormSubmit = async e => {
		e.preventDefault();

		if (!this.state.isChange) {
			console.log("Doesn't change anything");
			return null;
		}

		const validation = await this.validator.validate(this.state);
		this.setState({ validation });
		this.submitted = true;

		console.log("form");
		console.log(this.state);

		if (!validation.isValid) {
			window.scrollTo(0, 0);
		} else if (validation.isValid) {
			const formData = formdata
				.map(data => ({ [data]: this.state[data] }))
				.reduce((result, item) => {
					var key = Object.keys(item)[0];
					result[key] = item[key];
					return result;
				}, {});
			console.log(formData);
			this.props.editStaff(this.props.match.params.id, formData);
			this.setState({ isChange: false });
		}
	};

	handleInputChange = e => {
		const value = e.target.value;
		const name = e.target.name;

		this.isChange = true;

		this.setState({
			[name]: value
		});

		this.setState({
			isChange: true
		});

		console.log(this.state);
	};

	renderYear = () => {
		let count = 6;
		if (this.state.faculty === "2") {
			count = 4;
		}
		return _.times(count, i => (
			<option key={i} value={i + 1}>
				{i + 1}
			</option>
		));
	};

	render() {
		if (!this.props.editee) {
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

		const {
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
		return (
			<div id='edit-form' className='ui container'>
				<Header as='h1' icon textAlign='center'>
					<Header.Content>Edit</Header.Content>
				</Header>
				<Grid className='ui centered grid' style={{ padding: "30px" }}>
					<form className='ui form error' onSubmit={this.handleFormSubmit}>
						<Prompt
							when={this.state.isChange}
							message='Are you sure you want to dismiss this change?'
						/>
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
										defaultValue={firstName}
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
										defaultValue={lastName}
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
										defaultValue={nickName}
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
										defaultValue={gender}
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
										type='text'
										name='studentNumber'
										defaultValue={studentNumber}
										placeholder='Student Number'
										maxLength='10'
										onChange={this.handleInputChange}
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
										defaultValue={faculty}
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
										defaultValue={year}
										onChange={this.handleInputChange}
									>
										{this.renderYear()}
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
								<div className='field'>
									<label>เบอร์โทรศัพท์</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='phoneNumber'
										placeholder='phone number'
									/>
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
										defaultValue={email}
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
										defaultValue={lineId}
										placeholder='Line ID'
									/>
								</div>
								<div className='field'>
									<label>Facebook</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='facebook'
										defaultValue={facebook}
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

						<Button floated='right'>Submit</Button>
						<Button
							className='ui button primary right floated'
							onClick={() => {
								this.setState({ isChange: false });
								this.props.history.goBack();
							}}
						>
							Back
						</Button>
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
	{ fetchStaff, editStaff }
)(Edit);
