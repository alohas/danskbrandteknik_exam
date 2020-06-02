import React from "react";
import ItemProps from "./ItemProps";
import { useTranslation } from "react-i18next";

//Assets
import ExtSvg from "../../../assets/svg/Ext.svg";
import FAidSvg from "../../../assets/svg/FAid.svg";
import ExitSvg from "../../../assets/svg/Exit.svg";
import Co2Svg from "../../../assets/svg/Co2.svg";
import AlarmSvg from "../../../assets/svg/Alarm.svg";

//Styles
import "./Equipment.scss";

function Equipment() {
  const { t } = useTranslation();

  return (
    <section id="Equipment">
      <h1 className="equipment-header">{t("section.equipment.h")}</h1>
      <div className="items">
        <ItemProps
          name={t("section.equipment.item.fire.h")}
          fact1={t("section.equipment.item.fire.p1")}
          fact2={t("section.equipment.item.fire.p2")}
          fact3={t("section.equipment.item.fire.p3")}
          linkTo={""}
        >
          <ExtSvg className="icon" />
        </ItemProps>

        <ItemProps
          name={t("section.equipment.item.firstAid.h")}
          fact1={t("section.equipment.item.firstAid.p1")}
          fact2={t("section.equipment.item.firstAid.p2")}
          fact3={t("section.equipment.item.firstAid.p3")}
          linkTo={""}
        >
          <FAidSvg className="icon" />
        </ItemProps>

        <ItemProps
          name={t("section.equipment.item.evacuation.h")}
          fact1={t("section.equipment.item.evacuation.p1")}
          fact2={t("section.equipment.item.evacuation.p2")}
          fact3={t("section.equipment.item.evacuation.p3")}
          linkTo={""}
        >
          <ExitSvg className="icon" />
        </ItemProps>

        <ItemProps
          name={t("section.equipment.item.gasDetection.h")}
          fact1={t("section.equipment.item.gasDetection.p1")}
          fact2={t("section.equipment.item.gasDetection.p2")}
          fact3={t("section.equipment.item.gasDetection.p3")}
          linkTo={""}
        >
          <Co2Svg className="icon" />
        </ItemProps>

        <ItemProps
          name={t("section.equipment.item.fireProtectionSystems.h")}
          fact1={t("section.equipment.item.fireProtectionSystems.p1")}
          fact2={t("section.equipment.item.fireProtectionSystems.p2")}
          fact3={t("section.equipment.item.fireProtectionSystems.p3")}
          linkTo={""}
        >
          <AlarmSvg className="icon" />
        </ItemProps>
      </div>
    </section>
  );
}

export default Equipment;
