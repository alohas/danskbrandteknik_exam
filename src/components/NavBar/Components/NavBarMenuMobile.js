import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

//Assets
import BurgerMenuSvg from "../../../assets/svg/BurgerMenu.svg";
import CrossMenuSvg from "../../../assets/svg/CrossMenu.svg";
import ArrowSvg from "../../../assets/svg/Arrow.svg";

//Styles
import "./NavBarMenuMobile.scss";

function NavBarMenuMobile() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [langOpened, setLangOpened] = useState(false);

  let classNames = require("classnames");
  const { t, i18n } = useTranslation();

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
        <div
          className={classNames("language-settings", { open: langOpened })}
          onClick={clickedLang}
        >
          <div className="select">
            <span className="placeholder">
              {t(`global.translationLanguage.${i18n.language}`)}
            </span>
            <ArrowSvg className="icon" />
          </div>
          <div className="dropdown">
            <span
              className="option"
              id="en"
              onClick={(e) => {
                changeLanguage(e.target.id);
              }}
            >
              {t("global.translationLanguage.en")}
            </span>
            <span
              className="option"
              id="da"
              onClick={(e) => {
                changeLanguage(e.target.id);
              }}
            >
              {t("global.translationLanguage.da")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );

  function clickedMenu() {
    setMenuOpened(!menuOpened);
  }

  function clickedLang() {
    setLangOpened(!langOpened);
  }

  function changeLanguage(lang) {
    i18next.changeLanguage(lang);
    setLangOpened(!langOpened);
  }
}

export default NavBarMenuMobile;
