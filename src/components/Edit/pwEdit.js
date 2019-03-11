import React, { Component } from "react";
import { Prompt } from "react-router-dom";
import { Grid, Loader, Header, Button } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import _ from "lodash";

import { fetchStaff, editStaff } from "../../actions";
import FormValidator from "../FormValidator";
import "../Login/Login.css";

const formdata = ["oldpassword", "newpassword"];

class pwEdit extends Component {
	componentDidMount = async () => {
		await this.props.fetchStaff(this.props.match.params.id);
		this.setState({ ...this.props.editee });
	};

	submitted = false;

	validator = new FormValidator([
		{
			field: "oldpassword",
			method: "isEmpty",
			validWhen: false,
			message: "Old password is required."
		},
		{
			field: "oldpassword",
			method: "isLength",
			args: [{ min: 6 }],
			validWhen: true,
			message: "Old password have to be more 6 characters."
		},
		{
			field: "newpassword",
			method: "isEmpty",
			validWhen: false,
			message: "New password is required."
		},
		{
			field: "newpassword",
			method: "isLength",
			args: [{ min: 6 }],
			validWhen: true,
			message: "New password is have to be more 6 characters."
		}
	]);

	state = {
		isChange: false,
		isChangePassword: false,
		oldpassword: "",
		newpassword: "",
		validation: this.validator.valid()
	};

	changePasswordCheck = () => {};

	handleFormSubmit = async e => {
		e.preventDefault();

		if (!this.state.isChange) {
			console.log("Doesn't change anything");
			return null;
		}

		const validation = await this.validator.validate(this.state);
		this.setState({ validation });
		this.submitted = true;

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
			this.props.editStaff(this.props.match.params.id, formData); // change this to changePassword Method
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
			isChange: true,
			isChangePassword:
				this.state.oldpassword.length + this.state.newpassword.length
		});
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

						<br />
						<h4 className='ui dividing header'>Change Password</h4>
						<div className='field'>
							<div className='two fields'>
								<div
									className={`field ${
										validation.oldpassword.isInvalid ? "error" : ""
									}`}
								>
									<label>Old password</label>
									<input
										type='text'
										name='oldpassword'
										value={this.state.oldpassword}
										onChange={this.handleInputChange}
										placeholder='old password'
									/>
									<div
										className={`ui message negative ${
											validation.oldpassword.isInvalid ? "" : "hidden"
										}`}
									>
										{validation.oldpassword.message}
									</div>
								</div>
								<div
									className={`field ${
										validation.newpassword.isInvalid ? "error" : ""
									}`}
								>
									<label>New password</label>
									<input
										type='text'
										name='newpassword'
										value={this.state.newpassword}
										onChange={this.handleInputChange}
										placeholder='new password'
									/>
									<div
										className={`ui message negative ${
											validation.newpassword.isInvalid ? "" : "hidden"
										}`}
									>
										{validation.newpassword.message}
									</div>
								</div>
							</div>
						</div>

						<Button disabled={!this.state.isChange} floated='right'>
							Submit
						</Button>
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
)(pwEdit);
