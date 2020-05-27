import React from "react";
import ItemProps from "./ItemProps";

//Assets
import FlopSvg from "../../../assets/svg/Flop.svg";

//Styles
import "./Equipment.scss";

function Equipment() {
  return (
    <section id="Equipment">
      <h1 className="equipment-header">Essential Equipment</h1>
      <div className="items">
        <div className="top-row">
          <ItemProps
            name="Fire"
            fact1="There are 6 classes of fire extinguishers for different fire and fuel types"
            fact2="Fire hose is the most used item in the fire service"
            fact3="The fire blanket can hold up to 500 °C"
          >
            <FlopSvg className="icon" />
          </ItemProps>

          <ItemProps
            name="First Aid"
            fact1="Without immediate treatment, 90-95% of cardiac arrests are fatal"
            fact2="Time is of the essence - response time can mean further injury, life or death"
            fact3="Cost savings - first aid kits are designed to manage all types of injuries that don’t require professional help"
          >
            <FlopSvg className="icon" />
          </ItemProps>

          <ItemProps
            name="Evacuation"
            fact1="Escape route plans have to be made individually"
            fact2="The emergency plan defines the procedures for how to handle crisis and emergency situations in your business"
            fact3="Rescue ladder is an easy escape from the height of three floors"
          >
            <FlopSvg className="icon" />
          </ItemProps>
        </div>
        <div className="bot-row"></div>
      </div>
    </section>
  );
}

export default Equipment;
