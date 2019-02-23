import React, { Component } from "react";
import { Input, Header, Select } from "semantic-ui-react";

export default class CustomInput extends Component {
	render() {
		const { value, type, name, options } = this.props;

		if (this.props.isediting && type === "text") {
			return <Input type={type} value={value} name={name} placholder={name} />;
		}
		if (this.props.isediting && type === "select") {
			return <Select name={name} placeholder={name} options={options} />;
		}

		return <Header dividing as='h3' content={value} name={name} />;
	}
}
