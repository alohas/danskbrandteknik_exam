import React from "react";
import ItemProps from "./ItemProps";

//Assets
import ExtSvg from "../../../assets/svg/Ext.svg";
import FAidSvg from "../../../assets/svg/FAid.svg";
import ExitSvg from "../../../assets/svg/Exit.svg";
import Co2Svg from "../../../assets/svg/Co2.svg";
import AlarmSvg from "../../../assets/svg/Alarm.svg";

//Styles
import "./Equipment.scss";

function Equipment() {
  return (
    <section id="Equipment">
      <h1 className="equipment-header">Essential Equipment</h1>
      <div className="items">
        <ItemProps
          name="Fire"
          fact1="There are 6 classes of fire extinguishers for different fire and fuel types"
          fact2="Fire hose is the most used item in the fire service"
          fact3="The fire blanket can hold up to 500 °C"
        >
          <ExtSvg className="icon" />
        </ItemProps>

        <ItemProps
          name="First Aid"
          fact1="Without immediate treatment, 90-95% of cardiac arrests are fatal"
          fact2="Time is of the essence - response time can mean further injury, life or death"
          fact3="Cost savings - first aid kits are designed to manage all types of injuries that don’t require professional help"
        >
          <FAidSvg className="icon" />
        </ItemProps>

        <ItemProps
          name="Evacuation"
          fact1="Escape route plans have to be made individually"
          fact2="The emergency plan defines the procedures for how to handle crisis and emergency situations in your business"
          fact3="Rescue ladder is an easy escape from the height of three floors"
        >
          <ExitSvg className="icon" />
        </ItemProps>

        <ItemProps
          name="Gas detection"
          fact1="Hazardous gases are a real and serious risk in many industries in the gas, maritime, metal, brewery, wastewater and oil sectors"
          fact2="Gas detectors have to checked and calibrated on annually"
          fact3="Gas detectors come as portable, stationary or control panels"
        >
          <Co2Svg className="icon" />
        </ItemProps>

        <ItemProps
          name="Fire protection systems"
          fact1="Fire protection system can be a combination of different types of detectors and alarms"
          fact2="Overall systems are custom made by following the regulations"
          fact3="Passive fire protection today is a legal requirement"
        >
          <AlarmSvg className="icon" />
        </ItemProps>
      </div>
    </section>
  );
}

export default Equipment;
