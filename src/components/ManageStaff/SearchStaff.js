import _ from "lodash";
import React, { Component } from "react";
import { Input } from "semantic-ui-react";

export default class SearchStaff extends Component {
	componentDidMount() {
		this.setState({
			staffs: this.props.staffs
		});
	}

	componentWillMount() {
		this.resetComponent();
	}

	resetComponent = () =>
		this.setState({ isLoading: false, results: [], value: "" });

	handleSearchChange = (e, { value }) => {
		this.setState({ isLoading: true, value });

		setTimeout(() => {
			if (this.state.value.length < 1) return this.resetComponent();

			const re = new RegExp(_.escapeRegExp(this.state.value), "i");
			const isMatch = result => re.test(result.title);

			this.setState({
				isLoading: false,
				results: _.filter(this.state.staffs, isMatch)
			});
		}, 300);
	};

	render() {
		const { isLoading, value, results } = this.state;

		return (
			<Input
				loading={isLoading}
				onChange={_.debounce(this.handleSearchChange, 500, {
					leading: true
				})}
				results={results}
				value={value}
				{...this.props}
			/>
		);
	}
}
