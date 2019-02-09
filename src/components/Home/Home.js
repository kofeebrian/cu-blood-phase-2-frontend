import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div className='flex flex-col bg-grey-lighter'>
				<button to='/' className='btn btn-red'>
					Home
				</button>
				<button to='/qr' className='btn btn-red'>
					QR Reader
				</button>
				<button to='/' className='btn btn-red'>
					Manage Staff
				</button>
			</div>
		);
	}
}

export default connect(null)(Home);
