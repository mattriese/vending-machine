import React from "react";
import HomeButton from "./HomeButton";


/** Renders Kale photo and home button
 * 
 * App --> Vending Machine --> Kale --> HomeButton
 */
function Kale() {
	return (
		<div>
			<HomeButton/>
			<img src={"https://post.greatist.com/wp-content/uploads/2020/09/benefits-of-kale-1200x628-facebook-1200x628.jpg"}/>
		</div>
	);
}

export default Kale;
