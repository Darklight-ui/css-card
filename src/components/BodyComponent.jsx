/** @format */

import React from "react";
import emailIcon from "../image/email.png";
import phoneIcon from "../image/phone-call.png";

function BodyComponent() {
	return (
		<div className='bdywall'>
			<div className='intro'>
				<h3>Ogankpa Emmanuel</h3>
				<h4>Frontend Engineer</h4>
				<h6>Freelancer</h6>
			</div>
			<div className='btn'>
				<button>
					<img src={emailIcon} alt='mail	icon' width='15px' />
					<h3>Email</h3>
				</button>
				<button>
					<img src={phoneIcon} alt='mail	icon' width='15px' />
					<h3>Call</h3>
				</button>
			</div>
			<div className='about'>
				<h3>About</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
					provident sint odio! Doloribus tempora sequi, nulla alias veniam eaque
					et tempore exercitationem, est natus ipsa aspernatur rerum ipsum
				</p>
			</div>
			<div className='interest'>
				<h3>Interest</h3>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eos
					provident sint odio! Doloribus tempora sequi, nulla alias veniam eaque
					et tempore exercitationem, est natus ipsa aspernatur rerum ipsum
				</p>
			</div>
		</div>
	);
}

export default BodyComponent;
