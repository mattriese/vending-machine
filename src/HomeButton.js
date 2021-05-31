import React from "react";
import { Link } from "react-router-dom";

function HomeButton() {
	return <button><Link exact to="/">Go Back</Link></button>
}

export default HomeButton;
