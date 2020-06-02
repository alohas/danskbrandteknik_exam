import React from "react";
import { connect } from "react-redux";
import { Link } from "react-scroll";

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
      <Link className="logo-wrap" to="App" smooth={true}>
        <LogoSvg className="logo-icon" />
      </Link>
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
