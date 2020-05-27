import React from "react";
import { Link } from "react-scroll";

//Styles
import "./NavBarMenuDesktop.scss";

function NavBarMenuDesktop() {
  return (
    <div id="NavBarMenuDesktop">
      <div className="menu-items">
        <Link className="item" to="About" smooth={true}>
          About
        </Link>
        <Link className="item" to="Equipment" smooth={true}>
          Equipment
        </Link>
        <Link className="item" to="Cost" smooth={true}>
          Cost
        </Link>
        <Link className="item" to="Triangle" smooth={true}>
          Fire Triangle
        </Link>
      </div>
      <div className="cta-wrap">
        <a
          className="cta-item"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.danskbrandteknik.dk/kontakt/"
        >
          Contact
        </a>
      </div>
    </div>
  );
}

export default NavBarMenuDesktop;
