import React from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";

import Select, { NonceProvider } from "react-select";

const options = [
  { value: "chocolate", label: "Минск" },
  { value: "strawberry", label: "Быхов" },
  { value: "vanilla", label: "Гомель" },
];

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "rgba(71, 147, 255, 0.2)",
    width: "194px",
    height: "37px",
    border: "none",
    borderRadius: "10px",
  }),
};

type Props = {};

const Header = (props: Props) => {
  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id={"header-logo"} />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme}>
          <GlobalSvgSelector id={"change-theme"} />
        </div>
        <Select defaultValue={options[0]} styles={colourStyles} options={options} />
      </div>
    </header>
  );
};

export default Header;
