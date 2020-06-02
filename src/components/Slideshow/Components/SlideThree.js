import React from "react";
import { useTranslation } from "react-i18next";

//Assets
import BgImage from "../../../assets/images/extinguishers-min.png";

function SlideThree() {
  const { t } = useTranslation();

  return (
    <div
      id="SlideThree"
      className="slide-item"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="content-container">
        <h3 className="slide-header">{t("slider.three.h")}</h3>
        <p className="slide-text">{t("slider.three.p")}</p>
        <div className="cta-wrap">
          <a
            className="cta-item"
            target="_blank"
            rel="noopener noreferrer"
            href="http://danskbrandteknik.dk"
          >
            {t("slider.three.b")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default SlideThree;
