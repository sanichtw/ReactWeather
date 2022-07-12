import React, { useEffect, useState } from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import s from "./Header.module.scss";

import Select from "react-select";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../context/context";




type Props = {};

const Header = (props: Props) => {
  const theme = useTheme();

  const options = [
    { value: "chocolate", label: "Минск" },
    { value: "strawberry", label: "Быхов" },
    { value: "vanilla", label: "Гомель" },
  ];

  const colourStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: theme.theme === Theme.DARK ? "#4F4F4F" : "rgba(71, 147, 255, 0.2)",
      width: "194px",
      height: "37px",
      border: "none",
      borderRadius: "10px",
    }),
    singleValue: (styles: any) => ({
      ...styles,
      color: theme.theme === Theme.DARK ? '#fff' : '#000'
    })
  };

  const changeTheme = () => {
    theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    console.log(theme);

  }

  return (
    <header className={s.header}>
      <div className={s.wrapper}>
        <div className={s.logo}>
          <GlobalSvgSelector id={"header-logo"} />
        </div>
        <div className={s.title}>React Weather</div>
      </div>
      <div className={s.wrapper}>
        <div className={s.change_theme} onClick={changeTheme}>
          <GlobalSvgSelector id={"change-theme"} />
        </div>
        <Select defaultValue={options[0]} styles={colourStyles} options={options} />
      </div>
    </header>
  );
};

export default Header;
