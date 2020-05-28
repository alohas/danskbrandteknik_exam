import React from "react";

//Assets
import DropSvg from "../../../assets/svg/Drop.svg";
import FlameSvg from "../../../assets/svg/Flame.svg";
import FlopSvg from "../../../assets/svg/Flop.svg";
import GustSvg from "../../../assets/svg/Gust.svg";

//Styles
import "./About.scss";

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
          <span className="blue">Brandrisiko</span> campaign is a part of{" "}
          <span className="blue">Dansk Brandteknik</span> - supplier in fire
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
