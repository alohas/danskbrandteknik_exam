import React from "react";
import { useTranslation } from "react-i18next";

//Styles
import "./Cost.scss";

function Cost() {
  const { t } = useTranslation();

  return (
    <section id="Cost">
      <h1 className="cost-header">{t("section.cost.h")}</h1>
      <div className="paragraphs">
        <p>{t("section.cost.p1")}</p>
        <p>{t("section.cost.p2")}</p>
        <p>{t("section.cost.p3")}</p>
      </div>
    </section>
  );
}

export default Cost;
