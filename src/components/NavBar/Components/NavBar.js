import React from "react";
import { connect } from "react-redux";

//Components
import NavBarMenuDesktop from "./NavBarMenuDesktop";
import NavBarMenuMobile from "./NavBarMenuMobile";

//Styles
import "./NavBar.scss";
import LogoSvg from "../../../assets/svg/Logo.svg";

const NavBar = ({ mobileDesign }) => {
  return (
    <div id="NavBar">
      <div className="logo-wrap">
        <LogoSvg className="logo-icon" />
      </div>
      {!mobileDesign ? <NavBarMenuDesktop /> : <NavBarMenuMobile />}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    mobileDesign: state.responsiveness.browser.lessThan.large,
  };
}
export default connect(mapStateToProps)(NavBar);
