import React from "react";
import { Container, Dropdown, Header, Menu, Button } from "semantic-ui-react";

const Info = () => (
	<div>
		<Menu inverted>
			<Container>
				<Menu.Item as='a' header>
					Staff Recruitment CU Blood
				</Menu.Item>

				<Dropdown item simple text='ฝ่ายที่เปิดรับ'>
					<Dropdown.Menu>
						<Dropdown.Item>1. ฝ่ายกิจกรรม (Event)</Dropdown.Item>
						<Dropdown.Item>2. ฝ่ายประชาสัมพันธ์ (PR)</Dropdown.Item>
						<Dropdown.Item>3. ฝ่ายปฏิคม (Reception)</Dropdown.Item>
						<Dropdown.Item>4. ฝ่ายทะเบียน (Registration)</Dropdown.Item>
						<Dropdown.Item>5. ฝ่ายทรัพยากรบุคคล (Human Resource)</Dropdown.Item>
					</Dropdown.Menu>
				</Dropdown>
			</Container>
		</Menu>

		<Container text style={{ marginTop: "7em" }}>
			<Header as='h1'>Staff Recruitment CU Blood</Header>
			<p>1. ฝ่ายกิจกรรม (Event)</p>
			<p>2. ฝ่ายประชาสัมพันธ์ (PR)</p>
			<p>3. ฝ่ายปฏิคม (Reception)</p>
			<p>4. ฝ่ายทะเบียน (Registration)</p>
			<p>5. ฝ่ายทรัพยากรบุคคล (Human Resource)</p>
			<br />
			<br />
			<Button color='red' fluid size='large' href='signupform'>
				Register
			</Button>
		</Container>
	</div>
);

export default Info;
