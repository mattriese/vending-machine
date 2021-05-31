import React from "react";
import HomeButton from "./HomeButton";


/** Renders Twix photo and HomeButton
 * 
 * App --> VendingMachine --> Twix
 */
function Twix() {
	return (
	<div>
		<HomeButton/>
		<img src={"https://images-na.ssl-images-amazon.com/images/I/71IBchCAjdL._SL1500_.jpg"}/>
	</div>
	)
}

export default Twix;
