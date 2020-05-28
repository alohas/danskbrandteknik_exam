import React, { useState } from "react";
import { Link } from "react-scroll";

//Assets
import BurgerMenuSvg from "../../../assets/svg/BurgerMenu.svg";
import CrossMenuSvg from "../../../assets/svg/CrossMenu.svg";

//Styles
import "./NavBarMenuMobile.scss";

function NavBarMenuMobile() {
  const [menuOpened, setMenuOpened] = useState(false);

  let classNames = require("classnames");

  return (
    <div id="NavBarMenuMobile">
      <BurgerMenuSvg className="burger-menu-icon" onClick={clickedMenu} />
      <div className={classNames("burger-menu", { active: menuOpened })}>
        <CrossMenuSvg className="close-menu-icon" onClick={clickedMenu} />
        <div className="menu-items">
          <Link className="item" onClick={clickedMenu} to="About" smooth={true}>
            About
          </Link>
          <Link
            className="item"
            onClick={clickedMenu}
            to="Equipment"
            smooth={true}
          >
            Equipment
          </Link>
          <Link className="item" onClick={clickedMenu} to="Cost" smooth={true}>
            Cost
          </Link>
          <Link
            className="item"
            onClick={clickedMenu}
            to="FireTriangle"
            smooth={true}
          >
            Fire Triangle
          </Link>
        </div>
      </div>
    </div>
  );

  function clickedMenu() {
    setMenuOpened(!menuOpened);
  }
}

export default NavBarMenuMobile;
