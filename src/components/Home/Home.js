import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div className='flex flex-col bg-grey-lighter text-center'>
				<Link to='/' className='btn btn-red'>
					Home
				</Link>
				<Link to='/qr' className='btn btn-red'>
					QR Reader
				</Link>
				<Link to='/' className='btn btn-red'>
					Manage Staff
				</Link>
			</div>
		);
	}
}

export default connect(null)(Home);
