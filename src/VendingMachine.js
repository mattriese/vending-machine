import React from "react";
import NavBar from "./NavBar";
import Cheetos from "./Cheetos";
import Twix from "./Twix";
import Kale from "./Kale";
import { BrowserRouter, Route } from "react-router-dom";
//import "./VendingMachine.css"

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
				<img src={"https://tglvending.com/wp-content/uploads/2020/06/header-vending-mobile.jpg"}/>
		</div>
	);
}

export default VendingMachine;
