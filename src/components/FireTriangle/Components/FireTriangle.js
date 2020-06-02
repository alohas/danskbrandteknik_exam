import React from "react";
import { useTranslation } from "react-i18next";

//Styles
import "./FireTriangle.scss";
import FireTriangleSvg from "../../../assets/svg/FireTriangle.svg";
import FireTriangleDkSvg from "../../../assets/svg/FireTriangleDk.svg";

function FireTriangle() {
  const { t, i18n } = useTranslation();

  return (
    <section id="FireTriangle">
      <h1 className="fire-tri-header">{t("section.triangle.h")}</h1>

      <div className="triangle-layout">
        <div className="intro">
          <p className="text">{t("section.triangle.intro")}</p>
        </div>
        <div className="illustration-wrap">
          {i18n.language === "da" ? (
            <FireTriangleDkSvg className="illustration" />
          ) : (
            <FireTriangleSvg className="illustration" />
          )}
        </div>
        <div className="outro">
          <p className="text">{t("section.triangle.outro")}</p>
        </div>
        <div className="fuel">
          <p className="text">
            <span className="blue">{t("section.triangle.fuel.name")}</span>
            {t("section.triangle.fuel.text")}
          </p>
        </div>
        <div className="heat">
          <p className="text">
            <span className="blue">{t("section.triangle.heat.name")}</span>
            {t("section.triangle.heat.text")}
          </p>
        </div>
        <div className="Oxygen">
          <p className="text">
            <span className="blue">{t("section.triangle.oxygen.name")}</span>
            {t("section.triangle.oxygen.text")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default FireTriangle;
