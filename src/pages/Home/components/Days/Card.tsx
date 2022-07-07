import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { Day } from "./Days";
import s from "./Days.module.scss";

type Props = {
  dayInfo: Day;
};

const Card = ({ dayInfo }: Props) => {
  const { day, day_info, icon_id, temp_day, temp_night, info } = dayInfo;
  return (
    <div className={s.card}>
      <div className={s.day}>{day}</div>
      <div className={s.date}>{day_info}</div>
      <GlobalSvgSelector id={icon_id} />
      <div className={s.temp__day}>{temp_day}°</div>
      <div className={s.temp__night}>{temp_night}°</div>
      <div className={s.info}>{info}</div>
    </div>
  );
};

export default Card;
