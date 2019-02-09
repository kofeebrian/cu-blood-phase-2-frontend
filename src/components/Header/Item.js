import React from "react";
import { Link } from "react-router-dom";

class Item extends React.Component {
	render() {
		return (
			<Link
				to={this.props.to}
				className='invisible md:visible flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-red-dark'
			>
				{this.props.title}
			</Link>
		);
	}
}

export default Item;
