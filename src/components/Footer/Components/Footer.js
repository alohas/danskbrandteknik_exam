import React from "react";
import { connect } from "react-redux";

//Assets
import DanskBrandteknikLogo from "../../../assets/images/danskbrandteknik_logo.png";
import LinkedInIconSvg from "../../../assets/svg/LinkedInIcon.svg";
import MailIconSvg from "../../../assets/svg/MailIcon.svg";

//Styles
import "./Footer.scss";

const Footer = ({ mobileDesign }) => {
  var classNames = require("classnames");

  return (
    <div id="Footer">
      <div className="f-content">
        <div className="l-side">
          <h6 className={classNames("f-header", { center: mobileDesign })}>
            Brought to you by
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
            <h6 className="f-header">Contact</h6>
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
            <h6 className="f-header">Address</h6>
            <p className="location">
              Rosenkæret 31
              <br />
              2860, Søborg
              <br />
              Denmark
            </p>
          </div>
        </div>
      </div>
      <p className="copyright">© Dansk Brandteknik as | All rights reserved</p>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    mobileDesign: state.responsiveness.browser.lessThan.large,
  };
}
export default connect(mapStateToProps)(Footer);
