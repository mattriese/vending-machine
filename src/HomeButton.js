import React from "react";
import { Link } from "react-router-dom";


/** Renders HomeButton to take back to root route
 * 
 * App --> VendingMachine --> Snack --> HomeButton
 */
function HomeButton() {
	return <button><Link exact to="/">Go Back</Link></button>
}

export default HomeButton;
