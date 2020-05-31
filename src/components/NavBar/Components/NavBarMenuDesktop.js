import React, { useState } from "react";
import { Link } from "react-scroll";

//Assets
import ArrowSvg from "../../../assets/svg/Arrow.svg";

//Styles
import "./NavBarMenuDesktop.scss";

function NavBarMenuDesktop() {
  const [langOpened, setLangOpened] = useState(false);

  let classNames = require("classnames");

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
        <Link className="item" to="FireTriangle" smooth={true}>
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
      <div
        className={classNames("language-settings", { open: langOpened })}
        onClick={clickedLang}
      >
        <div className="select">
          <span className="placeholder">English</span>
          <ArrowSvg className="icon" />
        </div>
        <div className="dropdown">
          <span className="option" value="en" onClick={clickedLang}>
            English
          </span>
          <span className="option" value="da" onClick={clickedLang}>
            Dansk
          </span>
        </div>
      </div>
    </div>
  );

  function clickedLang() {
    setLangOpened(!langOpened);
  }
}

export default NavBarMenuDesktop;
