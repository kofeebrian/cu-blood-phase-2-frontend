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

const LoginForm = () => (
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
		<Grid textAlign='center' style={{ height: "100%" }} verticalAlign='middle'>
			<Grid.Column style={{ maxWidth: 450 }} widt={8}>
				<Header as='h2' color='black' textAlign='center'>
					<Image src='/logo.png' />
					Log-in to your account
				</Header>
				<Form size='large'>
					<Segment stacked>
						<Form.Input
							fluid
							icon='user'
							iconPosition='left'
							placeholder='E-mail address'
						/>
						<Form.Input
							fluid
							icon='lock'
							iconPosition='left'
							placeholder='Password'
							type='password'
						/>

<<<<<<< HEAD
						<Button color='red' fluid size='large'>
							Login
						</Button>
					</Segment>
				</Form>
				<Message>
					New to us ? <a href='http://www.google.com'>Just sign Up</a>
				</Message>
			</Grid.Column>
		</Grid>
	</div>
=======
            <Button color="red" fluid size="large" href="/">
              Login
            </Button>
          </Segment>
        </Form>
        <Message>
          New to us? <a href="signup">Sign Up</a>
        </Message>
      </Grid.Column>
    </Grid>
  </div>
>>>>>>> bb3db0600dc9592e7e9b05102a373bf8e2c80ab8
);

export default LoginForm;
