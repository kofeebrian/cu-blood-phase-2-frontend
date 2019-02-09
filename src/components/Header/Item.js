import React from "react";
import { Link } from "react-router-dom";

const Item = props => {
	return (
		<Link
			to={props.to}
			className='invisible md:visible flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center hover:bg-red-dark'
		>
			{props.title}
		</Link>
	);
};

export default Item;
