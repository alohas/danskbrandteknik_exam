import React from "react";

function SlideThree() {
  return (
    <div id="SlideThree" className="slide-item">
      <div className="content-container">
        <h3 className="slide-header">
          The first 5 minutes - the fire is yours!
        </h3>
        <p className="slide-text">
          As a general rule of firefighting, a successful fire attack depends
          crucially on actions made within the first five minutes of a fire.
          After that, the fire spread most likely can be stopped by only a fire
          brigade.
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

export default SlideThree;
