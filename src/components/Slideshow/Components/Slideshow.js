import React, { useState } from "react";
import { connect } from "react-redux";
import Carousel from "react-bootstrap/Carousel";

//Components
import SlideOne from "./SlideOne";
import SlideTwo from "./SlideTwo";
import SlideThree from "./SlideThree";

//Styles
import "./Slideshow.scss";

function Slideshow({ displayIndicators, displayControls }) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="Home">
      <Carousel
        activeIndex={index}
        controls={displayControls}
        interval={10000}
        indicators={displayIndicators}
        onSelect={handleSelect}
        pause={false}
      >
        <Carousel.Item>
          <div className="slide-content">
            <SlideOne />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-content">
            <SlideTwo />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-content">
            <SlideThree />
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

function mapStateToProps(state) {
  return {
    displayControls: state.responsiveness.browser.greaterThan.medium,
    displayIndicators: state.responsiveness.browser.greaterThan.extraSmall,
  };
}

export default connect(mapStateToProps)(Slideshow);
