import React from "react";
import { useTranslation } from "react-i18next";

//Assets
import BgImage from "../../../assets/images/fire.png";

function SlideOne() {
  const { t } = useTranslation();

  return (
    <div
      id="SlideOne"
      className="slide-item"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="content-container">
        <h3 className="slide-header">{t("slider.one.h")}</h3>
        <p className="slide-text">{t("slider.one.p")}</p>
        <div className="cta-wrap">
          <a
            className="cta-item"
            target="_blank"
            rel="noopener noreferrer"
            href="http://danskbrandteknik.dk"
          >
            {t("slider.one.b")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SlideOne;
