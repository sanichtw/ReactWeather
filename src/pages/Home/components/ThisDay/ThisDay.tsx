import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { Weather } from "../../../../store/types/types";
import s from "./ThisDay.module.scss";

type Props = {
  weather: Weather;
};

const ThisDay = ({ weather }: Props) => {
  return (
    <div className={s.this__day}>
      <div className={s.top__block}>
        <div className={s.top__block_info}>
          <div className={s.this__temp}>{Math.round(weather.main.temp)}</div>
          <div className={s.this__day_name}>Сегодня</div>
        </div>
        <GlobalSvgSelector id="rain" />
      </div>
      <div className={s.bottom__block}>
        <div className={s.this__time}>
          Время: <span>{new Date().toLocaleTimeString().slice(0, -6)}</span>
        </div>
        <div className={s.this__city}>
          Город: <span>Минск</span>
        </div>
      </div>
    </div>
  );
};

export default ThisDay;
