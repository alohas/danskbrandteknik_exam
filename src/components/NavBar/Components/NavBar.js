import React from "react";
import { connect } from "react-redux";

//Assets
import LogoSvg from "../../../assets/svg/Logo.svg";

//Components
import NavBarMenuDesktop from "./NavBarMenuDesktop";
import NavBarMenuMobile from "./NavBarMenuMobile";

//Styles
import "./NavBar.scss";

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
