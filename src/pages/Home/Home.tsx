import React from "react";
import Days from "./components/Days/Days";
import Popup from "./components/Popup/Popup";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <div className={s.home}>
        <ThisDay />
        <ThisDayInfo />
      </div>
      <div>
        <Days />
      </div>
    </>
  );
};

export default Home;
