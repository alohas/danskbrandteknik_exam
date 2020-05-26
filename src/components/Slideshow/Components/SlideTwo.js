import React from "react";

function SlideTwo() {
  return (
    <div id="SlideTwo" className="slide-item">
      <div className="content-container">
        <h3 className="slide-header">
          Fires are costly, tragic and a massive waste for a danish society
        </h3>
        <p className="slide-text">
          Every year more than 2 billion DKK are paid out as compensation for
          fire damage. In 2018, the average compensation for buildings was over
          95 000 DKK and over 27 000 for movable property.
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

export default SlideTwo;
