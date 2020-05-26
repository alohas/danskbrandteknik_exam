import React from "react";

//Assets
import DropSvg from "../../../assets/svg/Drop.svg";

//Styles
import "./About.scss";
import FlameSvg from "../../../assets/svg/Flame.svg";
import FlopSvg from "../../../assets/svg/Flop.svg";
import GustSvg from "../../../assets/svg/Gust.svg";

function About() {
  return (
    <section id="About">
      <div className="section-container">
        <h1 className="about-header">About</h1>
        <div className="about-illustrations">
          <div className="ill-wrap">
            <DropSvg className="illustration" />
          </div>
          <div className="partition-wrap">
            <GustSvg className="partition" />
          </div>
          <div className="ill-wrap">
            <FlameSvg className="illustration" />
          </div>
          <div className="partition-wrap">
            <GustSvg className="partition" />
          </div>
          <div className="ill-wrap">
            <FlopSvg className="illustration" />
          </div>
        </div>
        <p className="about-paragraph">
          Brandrisiko campaign is a part of Dansk Brandteknik - supplier in fire
          protection, first aid and gas detection. The campaign stands for
          bringing awareness about fire hazards, damage and prevention. Our
          shared goal is to reduce the number of fires and prevent the massive
          waste of fire tragedies. “We are here to help protect our customers’
          market shares! The fire never will be a tragedy, but merely a
          fright/surprise.”
        </p>
      </div>
    </section>
  );
}

export default About;
