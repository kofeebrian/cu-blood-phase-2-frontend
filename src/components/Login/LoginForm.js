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
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class LoginForm extends React.Component {
	state = {
		email: "",
		password: ""
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		this.props.signIn(this.state);
	};

	render() {
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
			margin-top: 100px;
		  }
		`}</style>
				<Grid
					textAlign='center'
					style={{ height: "100%" }}
					verticalAlign='middle'
				>
					<Grid.Column style={{ maxWidth: 450 }} widt={8}>
						<Header as='h2' color='black' textAlign='center'>
							<Image src='/logo.png' />
							Log-in to your account
						</Header>
						<Form size='large' onSubmit={this.handleSubmit}>
							<Segment stacked>
								<Form.Input
									id='email'
									fluid
									icon='user'
									iconPosition='left'
									placeholder='E-mail address'
									type='email'
									onChange={this.handleChange}
								/>
								<Form.Input
									id='password'
									fluid
									icon='lock'
									iconPosition='left'
									placeholder='Password'
									type='password'
									onChange={this.handleChange}
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

export default connect(null)(LoginForm);
