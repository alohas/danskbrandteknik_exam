import React from "react";
import { useTranslation } from "react-i18next";
import { connect } from "react-redux";

//Styles
import "./Cost.scss";

function Cost({ responsiveVideo }) {
  const { t } = useTranslation();

  return (
    <section id="Cost">
      <h1 className="cost-header">{t("section.cost.h")}</h1>
      <div className="content-wrap">
        <div className="media-wrap">
          {responsiveVideo ? (
            <iframe
              className="video-responsive"
              src="https://player.vimeo.com/video/425685970?color=0074e1&title=0&byline=0&portrait=0"
              title="informative video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              className="video"
              src="https://player.vimeo.com/video/425685970?color=0074e1&title=0&byline=0&portrait=0"
              width="640"
              height="360"
              title="informative video"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          )}
        </div>
        <div className="paragraphs">
          <p>{t("section.cost.p1")}</p>
          <p>{t("section.cost.p2")}</p>
          <p>{t("section.cost.p3")}</p>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    responsiveVideo: state.responsiveness.browser.lessThan.medium,
  };
}

export default connect(mapStateToProps)(Cost);
