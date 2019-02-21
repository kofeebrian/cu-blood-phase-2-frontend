import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { Grid, Loader } from "semantic-ui-react";

class Signup extends Component {
	state = {};

	handleFormSubmit = e => {
		e.preventDefault();
		const formData = { ...this.state };
		console.log(formData);
	};

	handleInputChange = e => {
		const target = e.target;
		const value = target.type === "checkbox" ? target.checked : target.value;
		const name = target.name;

		this.setState({
			[name]: value
		});

		console.log(this.state);
	};

	handleRadioCheck = e => {};

	// handleGetValue = e => {
	// 	return this.state[e.target.name];
	// };

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

		return (
			<div id='signup-form'>
				<style>{`
		  .ui.centered.grid, .ui.centered.grid>.row, .ui.grid>.centered.row {
        text-align: left;
		  }
		`}</style>
				<Grid className='ui centered grid' style={{ padding: "60px" }}>
					<form className='ui form' onSubmit={this.handleFormSubmit}>
						<h4 className='ui dividing header'>ข้อมูลส่วนตัว</h4>
						<div className='field'>
							<div className='two fields'>
								<div className='field'>
									<label>ชื่อ</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='first-name'
										placeholder='First Name'
									/>
								</div>
								<div className='field'>
									<label>นามสกุล</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='last-name'
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
										name='nick-name'
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
										name='student-id'
										placeholder='Student ID'
									/>
								</div>
								<div className='field'>
									<label>คณะ</label>
									<select
										name='Fac'
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
										name='phone-number'
										placeholder='Phone number'
									/>
								</div>
								<div className='field'>
									<label>E-mail</label>
									<input
										onChange={this.handleInputChange}
										type='email'
										name='mail'
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
										name='line-id'
										placeholder='Line  ID'
									/>
								</div>
								<div className='field'>
									<label>Facebook</label>
									<input
										onChange={this.handleInputChange}
										type='text'
										name='fb'
										placeholder='Facebook'
									/>
								</div>
							</div>
						</div>

						<br />
						<h4 className='ui dividing header'>ฝ่ายที่ต้องการเข้า</h4>
						<div className='field'>
							<div className='two fields'>
								<div
									name='season1'
									className='grouped fields'
									onChange={this.handleInputChange}
								>
									<label htmlFor='role1'>ฝ่ายที่สังกัดใน Season 1:</label>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role1' value='0' tabIndex='0' />
											<label>กิจกรรม (Event)</label>
										</div>
									</div>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role1' value='1' tabIndex='0' />
											<label>ประชาสัมพันธ์ (PR)</label>
										</div>
									</div>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role1' tabIndex='0' value='2' />
											<label>ปฏิคม (Reception)</label>
										</div>
									</div>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role1' tabIndex='0' value='3' />
											<label>ทะเบียน (Registration)</label>
										</div>
									</div>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role1' tabIndex='0' value='4' />
											<label>ทรัพยากรบุคคล (HR)</label>
										</div>
									</div>
								</div>

								<div
									name='season2'
									className='grouped fields'
									onChange={this.handleInputChange}
								>
									<label htmlFor='role2'>ฝ่ายที่สังกัดใน Season 2:</label>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role2' tabIndex='0' value='0' />
											<label>กิจกรรม (Event)</label>
										</div>
									</div>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role2' tabIndex='0' value='1' />
											<label>ประชาสัมพันธ์ (PR)</label>
										</div>
									</div>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role2' tabIndex='0' value='2' />
											<label>ปฏิคม (Reception)</label>
										</div>
									</div>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role2' tabIndex='0' value='3' />
											<label>ทะเบียน (Registration)</label>
										</div>
									</div>
									<div className='field'>
										<div className='ui radio checkbox'>
											<input type='radio' name='role2' tabIndex='0' value='4' />
											<label>ทรัพยากรบุคคล (HR)</label>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className='field'>
							<h4>
								กรุณาตรวจสอบรายละเอียดให้ครบถ้วน
								และการคัดเลือกสตาฟเข้าฝ่ายใดนั้น
								ขึ้นอยู่กับการพิจารณาของแต่ละฝ่าย*
							</h4>
							<div className='ui checkbox'>
								<input
									onChange={this.handleInputChange}
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

export default connect(mapStateToProps)(Signup);
