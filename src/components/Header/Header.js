import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Item from "./Item";

class Header extends React.Component {
	componentDidMount() {}

	render() {
		return (
			<nav className='relative select-none bg-red-light lg:flex lg:items-stretch w-full'>
				<div className='lg:flex flex-no-shrink items-stretch h-12'>
					<Link
						to='#'
						className='py-2 px-4 leading-normal text-white text-xl font-bold no-underline flex items-center'
					>
						CU BLOOD
					</Link>
					<div className='flex'>
						<Item to='/' title='Home' />
						<Item to='/qr' title='QR reader' />
						<Item to='/' title='Manage Staff' />
					</div>
				</div>
				<div className='lg:flex lg:items-stretch lg:flex-no-shrink lg:flex-grow'>
					<div className='lg:flex lg:items-stretch lg:justify-end ml-auto'>
						<Link
							to='#'
							className='flex-no-grow flex-no-shrink relative py-2 px-4 leading-normal text-white no-underline flex items-center '
						>
							User Name
						</Link>
					</div>
				</div>
			</nav>
		);
	}
}

export default connect(null)(Header);
