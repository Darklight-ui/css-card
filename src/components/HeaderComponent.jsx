/** @format */

import React from "react";
import "../App.css";
import logo from "../image/logo.png";

function HeaderComponent() {
	return (
		<div className='imgbg'>
			<img src={logo} alt='logo' width='120px' />
		</div>
	);
}

export default HeaderComponent;
