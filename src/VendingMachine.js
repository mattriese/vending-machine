import React from "react";
import NavBar from "./NavBar";
import Cheetos from "./Cheetos";
import Twix from "./Twix";
import Kale from "./Kale";
import { Route, Link } from "react-router-dom";
//import "./VendingMachine.css"

//TODO nav tag to wrap around links
/** Renders VendingMachine photo and  */
function VendingMachine() {
	return (
		<div className="VendingMachine">
			<NavBar/>
			<Route exact path="/cheetos">
				<Cheetos />
			</Route>
			<Route exact path="/twix">
				<Twix />
			</Route>
			<Route exact path="/kale">
				<Kale />
			</Route>
			<Route exact path="/">
				<nav><Link exact to="/cheetos">Cheetos</Link>
					<Link exact to="/twix">Twix</Link>
					<Link exact to="/kale">Kale</Link></nav>
				<img src={"https://tglvending.com/wp-content/uploads/2020/06/header-vending-mobile.jpg"} />
			</Route>
		</div>
	);
}

export default VendingMachine;
