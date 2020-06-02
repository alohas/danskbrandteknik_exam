import React from "react";
import { useTranslation } from "react-i18next";

//Assets
import BgImage from "../../../assets/images/teknitions-min.png";

function SlideTwo() {
  const { t } = useTranslation();

  return (
    <div
      id="SlideTwo"
      className="slide-item"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="content-container">
        <h3 className="slide-header">{t("slider.two.h")}</h3>
        <p className="slide-text">{t("slider.two.p")}</p>
        <div className="cta-wrap">
          <a
            className="cta-item"
            target="_blank"
            rel="noopener noreferrer"
            href="http://danskbrandteknik.dk"
          >
            {t("slider.two.b")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SlideTwo;
