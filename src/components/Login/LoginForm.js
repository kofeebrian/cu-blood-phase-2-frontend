import React from "react";
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import { fakelogin } from "../../actions";

class LoginForm extends React.Component {
	state = {
		formData: {
			username: "",
			password: "",
			remember_me: false
		}
	};

	handleInputChange = e => {
		this.setState({
			formData: {
				...this.state.formData,
				[e.target.id]: e.target.value
			}
		});
	};

	handleCheckboxChange = e => {
		this.setState({
			formData: {
				...this.state.formData,
				remember_me: !this.state.formData.remember_me
			}
		});
	};

	handleFormSubmit = e => {
		e.preventDefault();

		if (
			this.state.formData.username !== "" &&
			this.state.formData.password !== ""
		) {
			this.props.fakelogin(this.state.formData);
			this.setState({
				formData: {
					...this.state.formData,
					username: "",
					password: ""
				}
			});
		}
		if (this.state.formData.username === "") {
			alert("Not proper username");
		}
		if (this.state.formData.password === "") {
			alert("Not proper password");
		}
	};

	render() {
		const { isAuthenticated } = this.props;
		const { from } = this.props.location.state || { from: { pathname: "/" } };
		console.log(isAuthenticated);
		if (isAuthenticated === true) {
			return <Redirect to={from} />;
		}

		return (
			<div className='login-form'>
				{/*
		  Heads up! The styles below are necessary for the correct render of this example.
		  You can do same with CSS, the main idea is that all the elements up to the `Grid`
		  below must have a height of 100%.
		*/}
				<style>{`
		  body > div,
		  body > div > div,
		  body > div > div > div.login-form {
			margin-top: 2.5rem;
		  }
		`}</style>
				<Grid
					textAlign='center'
					style={{ height: "100%" }}
					verticalAlign='middle'
				>
					<Grid.Column style={{ maxWidth: 450 }} widt={8}>
						<Header as='h2' color='black' textAlign='center'>
							Log-in to your account
						</Header>
						<h4>Test Login</h4>
						<p>username: test@gmail.com</p>
						<p>password: 123</p>
						<Form size='large' onSubmit={this.handleFormSubmit}>
							<Segment>
								<Form.Input
									id='username'
									fluid
									icon='user'
									iconPosition='left'
									placeholder='E-mail address'
									type='email'
									value={this.state.formData.username}
									onChange={this.handleInputChange}
								/>
								<Form.Input
									id='password'
									fluid
									icon='lock'
									iconPosition='left'
									placeholder='Password'
									type='password'
									value={this.state.formData.password}
									onChange={this.handleInputChange}
								/>
								<Form.Checkbox
									id='remember_me'
									label={<label>Remember Me</label>}
									onChange={this.handleCheckboxChange}
								/>

								<Button color='red' fluid size='large'>
									Login
								</Button>
							</Segment>
						</Form>
						<Message>
							New to us? <Link to='/signup'>Sign Up</Link>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = stateRedux => {
	return {
		isAuthenticated: stateRedux.auth.isAuthenticated
		// userId: stateRedux.auth.userId,
		// accessToken: stateRedux.auth.accessToken
	};
};

export default connect(
	mapStateToProps,
	{ fakelogin }
)(LoginForm);
