import React from "react";
import s from "./Days.module.scss";

export interface Tabs {
  value: string;
}

export const Tabs = () => {
  const tabs: Tabs[] = [
    { value: "На неделю" },
    { value: "На месяц" },
    { value: "На 10 дней" },
  ];

  return (
    <div className={s.tabs}>
      <div className={s.tabs__left}>
        {tabs.map(({ value }, idx) => (
          <div key={idx} className={s.tab__value + ' ' + s.active}>{value}</div>
        ))}
      </div>
      <div className={s.cancel}>Отменить</div>
    </div>
  );
};
export default Tabs;
