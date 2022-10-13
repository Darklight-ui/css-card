/** @format */

import React from "react";
import BodyComponent from "./BodyComponent";
import FootComponent from "./FootComponent";
import HeaderComponent from "./HeaderComponent";

export default function CardComponent() {
	return (
		<div>
			<div className='card'>
				<HeaderComponent />
				<BodyComponent />
				<FootComponent />
			</div>
		</div>
	);
}
