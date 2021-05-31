import React from "react";
import HomeButton from "./HomeButton";


/** Renders Cheetos photo & HomeButton 
 * 
 * App --> VendingMachine --> Cheetos --> HomeButton
*/
function Cheetos() {
	return (
	<div>
		<HomeButton/>
		<img src={"https://images-na.ssl-images-amazon.com/images/I/91m2uBTv0dL._AC_SL1500_.jpg"}/>
	</div>
	);
}

export default Cheetos;
