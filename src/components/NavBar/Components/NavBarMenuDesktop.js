import React, { useState } from "react";
import { Link } from "react-scroll";
import { useTranslation } from "react-i18next";
import i18next from "i18next";

//Assets
import ArrowSvg from "../../../assets/svg/Arrow.svg";

//Styles
import "./NavBarMenuDesktop.scss";

function NavBarMenuDesktop() {
  const [langOpened, setLangOpened] = useState(false);

  let classNames = require("classnames");
  const { t, i18n } = useTranslation();

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
  );

  function clickedLang() {
    setLangOpened(!langOpened);
  }

  function changeLanguage(lang) {
    i18next.changeLanguage(lang);
    setLangOpened(!langOpened);
  }
}

export default NavBarMenuDesktop;
