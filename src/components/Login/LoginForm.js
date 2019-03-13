import React from "react";
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
	Loader,
	Responsive
} from "semantic-ui-react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../cubloodlogo.svg";

import { login } from "../../actions";

class LoginForm extends React.Component {
	state = {
		formData: {
			username: "",
			password: "",
			remember_me: false
		},
		err: false
	};

	cb = () => {
		this.setState({
			err: true
		});
		console.log(this.state);
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
			this.props.login(this.state.formData, this.cb);
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
			<div className='login-form'>
				<Grid centered>
					<Grid.Column>
						<Responsive minWidth={Responsive.onlyTablet.minWidth}>
							<Image
								src={logo}
								size='tiny'
								style={{
									display: "block",
									position: "relative",
									marginLeft: "auto",
									marginRight: "auto",
									marginTop: "0%"
								}}
							/>
						</Responsive>
						<Responsive {...Responsive.onlyMobile}>
							<Image
								src='https://cu-blood.herokuapp.com/static/logo/logo1.svg'
								size='tiny'
								style={{
									display: "block",
									position: "relative",
									marginLeft: "auto",
									marginRight: "auto",
									marginTop: "-10%"
								}}
							/>
						</Responsive>
					</Grid.Column>
				</Grid>
				<Grid
					textAlign='center'
					style={{ height: "100%" }}
					verticalAlign='middle'
				>
					<Grid.Column style={{ maxWidth: 450 }} widt={8}>
						<Header as='h2' color='black' textAlign='center'>
							Log-in to your account
						</Header>
						<Form size='large' onSubmit={this.handleFormSubmit}>
							<Segment>
								<Form.Input
									error={this.state.err}
									id='username'
									fluid
									icon='user'
									iconPosition='left'
									placeholder='Username'
									type='text'
									value={this.state.formData.username}
									onChange={this.handleInputChange}
								/>
								<Form.Input
									error={this.state.err}
									id='password'
									fluid
									icon='lock'
									iconPosition='left'
									placeholder='Password'
									type='password'
									value={this.state.formData.password}
									onChange={this.handleInputChange}
								/>
								<Message hidden={!this.state.err} negative>
									Username or Password incorrect.
								</Message>
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
		isAuthenticated: stateRedux.auth.isAuthenticated,
		user: stateRedux.auth.user,
		userId: stateRedux.auth.userId,
		accessToken: stateRedux.auth.accessToken
	};
};

export default connect(
	mapStateToProps,
	{ login }
)(LoginForm);
