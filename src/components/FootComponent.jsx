/** @format */

import React from "react";
import fb from "../image/facebook.png";
import linkedin from "../image/instagram.png";
import twitter from "../image/linkedin.png";

function FootComponent() {
	return (
		<div className='foot'>
			<img src={fb} alt='fb' width='20px' />
			<img src={linkedin} alt='li' width='20px' />
			<img src={twitter} alt='tw' width='20px' />
		</div>
	);
}

export default FootComponent;
