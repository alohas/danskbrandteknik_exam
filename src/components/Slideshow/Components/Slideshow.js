import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

//Styles
import "./Slideshow.scss";

function Slideshow() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="Home">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="slide-content">
            <h3>Every year there are more 60 000 fires in Denmark</h3>
            <p>
              Annual fire accident number can be broken down to at least 165
              fires every day. However, it is more in reality since not every
              accident is registered.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-content">
            <h3>
              Fires are costly, tragic and a massive waste for a danish society
            </h3>
            <p>
              Every year more than 2 billion DKK are paid out as compensation
              for fire damage. In 2018, the average compensation for buildings
              was over 95 000 DKK and over 27 000 for movable property.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="slide-content">
            <h3>The first 5 minutes - the fire is yours!</h3>
            <p>
              As a general rule of firefighting, a successful fire attack
              depends crucially on actions made within the first five minutes of
              a fire. After that, the fire spread most likely can be stopped by
              only a fire brigade.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}

export default Slideshow;
