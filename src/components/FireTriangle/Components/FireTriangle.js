import React from "react";

//Styles
import "./FireTriangle.scss";
import FireTriangleSvg from "../../../assets/svg/FireTriangle.svg";
// eslint-disable-next-line
import FireTriangleDkSvg from "../../../assets/svg/FireTriangleDk.svg";

function FireTriangle() {
  return (
    <section id="FireTriangle">
      <h1 className="fire-tri-header">Fire Triangle</h1>

      <div className="triangle-layout">
        <div className="intro">
          <p className="text">
            The fire triangle or combustion triangle is a simple model for
            understanding chemical reaction which must occur to create a fire.
            It illustrates the three elements a fire needs to ignite:
          </p>
        </div>
        <div className="illustration-wrap">
          <FireTriangleSvg className="illustration" />
        </div>
        <div className="outro">
          <p className="text">
            It also demonstrates the interdependence of these ingredients in
            creating and sustaining fire and explains that removing any one of
            these elements would prevent or extinguish the fire.
          </p>
        </div>
        <div className="fuel">
          <p className="text">
            <span className="blue">Fuel</span> - In order for a fire to start
            there must be a material to burn – and this is referred to as the
            fuel. It is any kind of flammable material, including wood, paper,
            fabric, or chemicals.
          </p>
        </div>
        <div className="heat">
          <p className="text">
            <span className="blue">Heat</span> - As well as a source of fuel, a
            fire needs heat to ignite initially. Flammable materials, as they
            burn, give off vapours which are themselves flammable. If heat is
            present, they will combust. Heat is also responsible for the spread
            and maintenance of fire.
          </p>
        </div>
        <div className="Oxygen">
          <p className="text">
            <span className="blue">Oxygen</span> - Ambient air is made up of
            approx. 21% oxygen and it acts as the oxidizing agent in the
            chemical reaction of a burning process (most fires only require at
            least 16% oxygen to burn).
          </p>
        </div>
      </div>
    </section>
  );
}

export default FireTriangle;
