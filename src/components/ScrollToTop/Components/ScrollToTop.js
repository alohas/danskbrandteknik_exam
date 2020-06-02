import React, { useState } from "react";
import { Link } from "react-scroll";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

//Assets
import UpSvg from "../../../assets/svg/Up.svg";

//Styles
import "./ScrollToTop.scss";

function ScrollToTop() {
  let classNames = require("classnames");

  const [hideElement, setHideElement] = useState(true);

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -800) {
      setHideElement(false);
    } else {
      setHideElement(true);
    }
  });

  return (
    <Link
      id="ToTop"
      to="root"
      className={classNames({ hide: hideElement })}
      smooth={true}
    >
      <UpSvg className="icon" />
    </Link>
  );
}

export default ScrollToTop;
