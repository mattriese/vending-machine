import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
	return (
    <nav className="NavBar">
			<NavLink exact to="/">
        VendingMachine
      </NavLink>
      <NavLink exact to="/cheetos">
        Cheetos
      </NavLink>
      <NavLink exact to="/twix">
        Twix
      </NavLink>
      <NavLink exact to="/kale">
        Kale
      </NavLink>
    </nav>
  );

}

export default NavBar;
