import React from "react";
import { useTranslation } from "react-i18next";

//Assets
import DropSvg from "../../../assets/svg/Drop.svg";
import FlameSvg from "../../../assets/svg/Flame.svg";
import FlopSvg from "../../../assets/svg/Flop.svg";
import GustSvg from "../../../assets/svg/Gust.svg";

//Styles
import "./About.scss";

function About() {
  const { t } = useTranslation();

  return (
    <section id="About">
      <div className="section-container">
        <h1 className="about-header">{t("section.about.h")}</h1>
        <div className="about-illustrations">
          <div className="ill-wrap">
            <DropSvg className="illustration" />
          </div>
          <div className="partition-wrap">
            <GustSvg className="partition" />
          </div>
          <div className="ill-wrap">
            <FlameSvg className="illustration" />
          </div>
          <div className="partition-wrap">
            <GustSvg className="partition" />
          </div>
          <div className="ill-wrap">
            <FlopSvg className="illustration" />
          </div>
        </div>
        <p
          className="about-paragraph"
          dangerouslySetInnerHTML={createMarkup(t("section.about.p"))}
        ></p>
      </div>
    </section>
  );

  function createMarkup(markup) {
    return { __html: markup };
  }
}

export default About;
