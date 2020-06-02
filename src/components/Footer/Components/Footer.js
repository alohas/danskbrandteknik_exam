import React from "react";
import { connect } from "react-redux";
import { useTranslation } from "react-i18next";

//Assets
import DanskBrandteknikLogo from "../../../assets/images/danskbrandteknik_logo.png";
import LinkedInIconSvg from "../../../assets/svg/LinkedInIcon.svg";
import MailIconSvg from "../../../assets/svg/MailIcon.svg";

//Styles
import "./Footer.scss";

const Footer = ({ mobileDesign }) => {
  var classNames = require("classnames");
  const { t } = useTranslation();

  return (
    <div id="Footer">
      <div className="f-content">
        <div className="l-side">
          <h6 className={classNames("f-header", { center: mobileDesign })}>
            {t("footer.h")}
          </h6>
          <div className="wrap-wrap">
            <a
              className="logo-wrap"
              href="https://www.danskbrandteknik.dk/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="og-logo" src={DanskBrandteknikLogo} alt="logo" />
            </a>
          </div>
        </div>
        <div className="r-side">
          <div className="contacts">
            <h6 className="f-header">{t("footer.contact")}</h6>
            <p className="number">70 111 333</p>
            <div className="icons">
              {/* eslint-disable */}
              <a
                className="icon-wrap"
                href="https://www.linkedin.com/company/dansk-brandteknik-a-s/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-enable */}
                <LinkedInIconSvg className="icon" />
              </a>
              {/* eslint-disable */}
              <a
                className="icon-wrap"
                href="mailto:mail@danskbrandteknik.dk"
                target="_blank"
                rel="noopener noreferrer"
              >
                {/* eslint-enable */}
                <MailIconSvg className="icon" />
              </a>
            </div>
          </div>
          <div className="address">
            <h6 className="f-header">{t("footer.address")}</h6>
            <a
              className="location"
              href="https://www.google.com/maps/place/Rosenk%C3%A6ret+31,+2860+S%C3%B8borg/@55.743814,12.4661479,13z/data=!4m5!3m4!1s0x465251e7864308e3:0x6b48d58d429e92eb!8m2!3d55.7386684!4d12.4815947"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rosenkæret 31
              <br />
              2860, Søborg
              <br />
              Denmark
            </a>
          </div>
        </div>
      </div>
      <p className="copyright">{t("footer.copyright")}</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    mobileDesign: state.responsiveness.browser.lessThan.large,
  };
}
export default connect(mapStateToProps)(Footer);
