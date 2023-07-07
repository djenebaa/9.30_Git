import React from "react";
import { NavLink } from "react-router-dom";

function Admin() {
  return (
    <NavLink to="/Admin">
      <div>
        <img className="h-6" src="Admin.png" alt="icon Admin" />
      </div>
    </NavLink>
  );
}

export default Admin;
