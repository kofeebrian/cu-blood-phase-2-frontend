import { withRouter } from "react-router-dom";
import { Component } from "react";

class ScrollToTop extends Component {
	componentDidUpdate(prevProps) {
		// no location prop
		if (this.props.location !== prevProps.location) {
			// never triggered
			window.scrollTo(0, 0);
		}
	}

	render() {
		return this.props.children;
	}
}

export default withRouter(ScrollToTop);
