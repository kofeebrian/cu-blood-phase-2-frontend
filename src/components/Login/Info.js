import React from "react";

const Signup = () => <div>Sign Up</div>;

export default Signup;

// import React, { Component } from "react";
// import {
// 	Container,
// 	Dropdown,
// 	Header,
// 	Menu,
// 	Button,
// 	Accordion,
// 	Icon
// } from "semantic-ui-react";
// export default class AccordionExampleStandard extends Component {
// 	state = {
// 		activeIndex: 0,
// 		activeDuty: 0,
// 		activeProperty: 0,
// 		activeDuty2: 0,
// 		activeProperty2: 0
// 	};

// 	handleClick = (e, titleProps) => {
// 		const { index } = titleProps;
// 		const {
// 			activeIndex,
// 			activeDuty,
// 			activeProperty,
// 			activeDuty2,
// 			activeProperty2
// 		} = this.state;
// 		const newIndex = activeIndex === index ? -1 : index;
// 		const newIndexDuty = activeDuty === index ? -1 : index;
// 		const newIndexDuty2 = activeDuty2 === index ? -1 : index;
// 		const newIndexProperty = activeProperty === index ? -1 : index;
// 		const newIndexProperty2 = activeProperty2 === index ? -1 : index;
// 		this.setState({
// 			activeIndex: newIndex,
// 			activeDuty: newIndexDuty,
// 			activeProperty: newIndexProperty,
// 			activeDuty2: newIndexProperty2
// 		});
// 	};
// 	handleClickDuty = (e, titleProps) => {
// 		const { index } = titleProps;
// 		const { activeDuty } = this.state;
// 		const newIndexDuty = activeDuty === index ? -1 : index;

// 		this.setState({ activeDuty: newIndexDuty });
// 	};
// 	handleClickProperty = (e, titleProps) => {
// 		const { index } = titleProps;
// 		const { activeProperty } = this.state;
// 		const newIndexProperty = activeProperty === index ? -1 : index;
// 		this.setState({ activeProperty: newIndexProperty });
// 	};
// 	handleClickDuty2 = (e, titleProps) => {
// 		const { index } = titleProps;
// 		const { activeDuty2 } = this.state;
// 		const newIndexDuty2 = activeDuty2 === index ? -1 : index;
// 		this.setState({ activeDuty2: newIndexProperty2 });
// 		handleClickProperty2 = (e, titleProps) => {
// 			const { index } = titleProps;
// 			const { activeProperty2 } = this.state;
// 		};
// 			const newIndexProperty2 = activeProperty2 === index ? -1 : index;
// 		};
// 	render() {
// 		const { activeIndex } = this.state;
// 		const { activeDuty } = this.state;
// 		const { activeProperty } = this.state;
// 		const { activeDuty2 } = this.state;
// 		const { activeProperty2 } = this.state;
// 		return (
// 			<div>
// 				<Menu inverted>
// 					<Container>
// 						<Menu.Item as='a' header>
// 							Staff Recruitment CU Blood
// 						</Menu.Item>

// 						<Dropdown item simple text='ฝ่ายที่เปิดรับ'>
// 							<Dropdown.Menu>
// 								<Dropdown.Item>
// 									<Accordion>
// 										<Accordion.Title
// 											active={activeIndex === 0}
// 											index={0}
// 											onClick={this.handleClick}
// 										>
// 											<Icon name='dropdown' />
// 											1. ฝ่ายกิจกรรม (Event)
// 										</Accordion.Title>
// 										<Accordion.Content active={activeIndex === 0}>
// 											<Accordion>
// 												<Accordion.Title
// 													active={activeIndex === 0}
// 													index={0}
// 													onClick={this.handleClickDuty}
// 												>
// 													<Icon name='dropdown' />
// 													<p> หน้าที่</p>
// 												</Accordion.Title>
// 												<Accordion.Content active={activeDuty === 0}>
// 													<p>
// 														• ร่วมกันสร้างสรรค์เกม
// 														กิจกรรมและของตกแต่งที่ใช้ในซุ้มวันงานจริงให้ผู้เข้าร่วมบริจาคโลหิต
// 														พร้อมทั้งแจกของรางวัลจากการเล่นเกมให้ผู้มาบริจาค
// 													</p>
// 													<p>• จัดซุ้มงาน และเฝ้าซุ้มในสัปดาห์บริจาคโลหิต</p>
// 													<p>• มาทำอุปกรณ์ และของตกแต่งที่ต้องใช้ก่อนวันจริง</p>
// 													<p> • มาร่วมกิจกรรมสัปดาห์ประชาสัมพันธ์โครงการ</p>
// 													<p>
// 														{" "}
// 														• มาปฏิบัติงานในช่วงสัปดาห์บริจาคโลหิต คือวันที่ 25
// 														- 29 มีนาคม 2562
// 													</p>
// 												</Accordion.Content>
// 											</Accordion>
// 											<Accordion>
// 												<Accordion.Title
// 													active={activeIndex === 0}
// 													index={0}
// 													onClick={this.handleClickProperty}
// 												>
// 													<Icon name='dropdown' />
// 													<p>คุณสมบัติ</p>
// 												</Accordion.Title>
// 												<Accordion.Content active={activeProperty === 0}>
// 													<p>
// 														• มีความสามารถทางศิลปะ มีความคิดสร้างสรรค์ ชอบวาดภาพ
// 														ตัดกระดาษ ทำของตกแต่งต่าง ๆ
// 													</p>
// 													<p>
// 														• ชอบความสนุกท้าทาย พร้อมเรียนรู้สิ่งใหม่ ๆ
// 														อยากรู้จักคนใหม่ ๆ มีมนุษยสัมพันธ์ที่ดี
// 														และมีความรับผิดชอบ
// 													</p>
// 													<p>
// 														•
// 														สร้างรอยยิ้มและเสียงหัวเราะให้แก่ผู้เข้าร่วมบริจาคโลหิต
// 													</p>
// 													<p>
// 														•
// 														สร้างสีสันและมิตรภาพระหว่างสตาฟกับผู้เข้าร่วมบริจาคโลหิต
// 														รวมถึงระหว่างสตาฟกันเอง
// 													</p>
// 												</Accordion.Content>
// 											</Accordion>
// 										</Accordion.Content>
// 									</Accordion>
// 								</Dropdown.Item>
// 								<Dropdown.Item>
// 									<Accordion>
// 										<Accordion.Title
// 											active={activeIndex === 0}
// 											index={0}
// 											onClick={this.handleClick}
// 										>
// 											<Icon name='dropdown' />
// 											2. ฝ่ายประชาสัมพันธ์ (PR)
// 										</Accordion.Title>
// 										<Accordion.Content active={activeIndex === 0}>
// 											<Accordion>
// 												<Accordion.Title
// 													active={activeIndex === 0}
// 													index={0}
// 													onClick={this.handleClickDuty2}
// 												>
// 													<Icon name='dropdown' />
// 													<p> PR ฝ่าย Roadshow</p>
// 												</Accordion.Title>
// 												<Accordion.Content active={activeDuty2 === 0}>
// 													<p>
// 														•
// 														จัดกิจกรรมสัปดาห์ประชาสัมพันธ์โครงการที่จะจัดขึ้นตามสถานที่ต่าง
// 														ๆ ภายในมหาวิทยาลัย
// 													</p>
// 													<p>
// 														•
// 														พูดเชิญชวนและให้ข้อมูลเกี่ยวกับการบริจาคเลือดและรายละเอียดของโครงการ
// 													</p>
// 												</Accordion.Content>

// 												<Accordion.Title
// 													active={activeIndex === 1}
// 													index={1}
// 													onClick={this.handleClickDuty2}
// 												>
// 													<Icon name='dropdown' />
// 													<p> PR ฝ่าย Roadshow</p>
// 												</Accordion.Title>
// 												<Accordion.Content active={activeDuty2 === 1}>
// 													<p>
// 														•
// 														ออกแบบงานอาร์ตเพื่อใช้ประชาสัมพันธ์โครงการผ่านช่องทางต่าง
// 														ๆ เช่น online, poster, cutout หรือช่องทางอื่น ๆ
// 													</p>
// 												</Accordion.Content>

// 												<Accordion.Title
// 													active={activeIndex === 2}
// 													index={2}
// 													onClick={this.handleClickDuty2}
// 												>
// 													<Icon name='dropdown' />
// 													<p> PR ฝ่าย Social media</p>
// 												</Accordion.Title>
// 												<Accordion.Content active={activeDuty2 === 2}>
// 													<p>
// 														• ให้ข้อมูลและลงประชาสัมพันธ์ผ่าน Social media ต่าง
// 														ๆ{" "}
// 													</p>
// 													<p>• ดูแลเพจเฟซบุ๊ก CU Blood</p>
// 												</Accordion.Content>
// 											</Accordion>
// 											<Accordion>
// 												<Accordion.Title
// 													active={activeIndex === 0}
// 													index={0}
// 													onClick={this.handleClickProperty}
// 												>
// 													<Icon name='dropdown' />
// 													<p>คุณสมบัติ</p>
// 												</Accordion.Title>
// 												<Accordion.Content active={activeProperty === 0}>
// 													<p>
// 														• มีความสามารถทางศิลปะ มีความคิดสร้างสรรค์ ชอบวาดภาพ
// 														ตัดกระดาษ ทำของตกแต่งต่าง ๆ
// 													</p>
// 													<p>
// 														• ชอบความสนุกท้าทาย พร้อมเรียนรู้สิ่งใหม่ ๆ
// 														อยากรู้จักคนใหม่ ๆ มีมนุษยสัมพันธ์ที่ดี
// 														และมีความรับผิดชอบ
// 													</p>
// 													<p>
// 														•
// 														สร้างรอยยิ้มและเสียงหัวเราะให้แก่ผู้เข้าร่วมบริจาคโลหิต
// 													</p>
// 													<p>
// 														•
// 														สร้างสีสันและมิตรภาพระหว่างสตาฟกับผู้เข้าร่วมบริจาคโลหิต
// 														รวมถึงระหว่างสตาฟกันเอง
// 													</p>
// 												</Accordion.Content>
// 											</Accordion>
// 										</Accordion.Content>
// 									</Accordion>
// 								</Dropdown.Item>
// 								<Dropdown.Item>3. ฝ่ายปฏิคม (Reception)</Dropdown.Item>
// 								<Dropdown.Item>4. ฝ่ายทะเบียน (Registration)</Dropdown.Item>
// 								<Dropdown.Item>
// 									5. ฝ่ายทรัพยากรบุคคล (Human Resource)
// 								</Dropdown.Item>
// 							</Dropdown.Menu>
// 						</Dropdown>
// 					</Container>
// 				</Menu>

// 				<Container text style={{ marginTop: "7em" }}>
// 					<Header as='h1'>Staff Recruitment CU Blood</Header>
// 					<p>1. ฝ่ายกิจกรรม (Event)</p>
// 					<p>2. ฝ่ายประชาสัมพันธ์ (PR)</p>
// 					<p>3. ฝ่ายปฏิคม (Reception)</p>
// 					<p>4. ฝ่ายทะเบียน (Registration)</p>
// 					<p>5. ฝ่ายทรัพยากรบุคคล (Human Resource)</p>
// 					<br />
// 					<br />
// 					<Button color='red' fluid size='large' href='signupform'>
// 						Register
// 					</Button>
// 				</Container>
// 			</div>
// 		);
// 	}
// }
