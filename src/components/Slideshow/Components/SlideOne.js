import React from "react";

//Assets
import BgImage from "../../../assets/images/fire.png";

function SlideOne() {
  return (
    <div
      id="SlideOne"
      className="slide-item"
      style={{ backgroundImage: `url(${BgImage})` }}
    >
      <div className="content-container">
        <h3 className="slide-header">
          Every year there are more than 60.000 fires in Denmark
        </h3>
        <p className="slide-text">
          Annual fire accident number can be broken down to at least 165 fires
          every day. However, it is more in reality since not every accident is
          registered.
        </p>
        <div className="cta-wrap">
          <a
            className="cta-item"
            target="_blank"
            rel="noopener noreferrer"
            href="http://danskbrandteknik.dk"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
}

export default SlideOne;
