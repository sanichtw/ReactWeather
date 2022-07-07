import React from "react";
import Card from "./Card";
import Tabs from "./Tabs";
import s from "./Days.module.scss";

type Props = {};
export interface Day {
  day: string;
  day_info: string;
  icon_id: string;
  temp_day: string;
  temp_night: string;
  info: string;
}

const Days = (props: Props) => {
  const days: Day[] = [
    {
      day: "Сегодня",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Завтра",
      day_info: "29 авг",
      icon_id: "small_rain_sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь и солнце",
    },
    {
      day: "Ср",
      day_info: "30 авг",
      icon_id: "small_rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "небольшой дождь",
    },
    {
      day: "Чт",
      day_info: "28 авг",
      icon_id: "mainly_cloudy",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Пт",
      day_info: "28 авг",
      icon_id: "rain",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Сб",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
    {
      day: "Вс",
      day_info: "28 авг",
      icon_id: "sun",
      temp_day: "+18",
      temp_night: "+15",
      info: "Облачно",
    },
  ];

  const daysCards = days.map((dayInfo: Day) => <Card dayInfo={dayInfo} />);

  return (
    <div className={s.days}>
      <Tabs />
      <div className={s.cards}>{daysCards}</div>
    </div>
  );
};

export default Days;
