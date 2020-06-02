import React from "react";
import { Link } from "react-scroll";

//Assets
import UpSvg from "../../../assets/svg/Up.svg";

//Styles
import "./ScrollToTop.scss";

function ScrollToTop() {
  return (
    <Link id="ToTop" to="root" smooth={true}>
      <UpSvg className="icon" />
    </Link>
  );
}

export default ScrollToTop;
