import React from "react";

//Styles
import "./NavBarMenuDesktop.scss";

function NavBarMenuDesktop() {
  return (
    <div id="NavBarMenuDesktop">
      <div className="menu-items">
        <div className="item">About</div>
        <div className="item">Equipment</div>
        <div className="item">Cost</div>
        <div className="item">Fire Triangle</div>
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
