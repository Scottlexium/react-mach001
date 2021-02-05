import React, { useState } from "react";
import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="navbar">
        <Link to="#" className="menu-bar" />
        <FaIcons.FaBars onClick={showSidebar} />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-item">
          <li className="navbar-toogle">
            <link to="#" className="menu-bars" />
            <AiIcons.AiOutlineClose />
          </li>
        </ul>
      </nav>
    </>
  );
}
export default Navbar;
