import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useCustomDispatch, useCustomSelector } from "../../hooks/store";
import { selectCurrentWeatherData } from "../../store/selector/selector";
import { fetchCurrentWeather } from "../../store/thunks/fetchCurrentWeather";
import Days from "./components/Days/Days";
import Popup from "./components/Popup/Popup";
import ThisDay from "./components/ThisDay/ThisDay";
import ThisDayInfo from "./components/ThisDayInfo/ThisDayInfo";
import s from "./Home.module.scss";

type Props = {};

const Home = (props: Props) => {
  const dispatch = useCustomDispatch();

  const { weather } = useCustomSelector(selectCurrentWeatherData);

  useEffect(() => {
    dispatch(fetchCurrentWeather("paris"));
  }, []);
  return (
    <>
      <div className={s.home}>
        <ThisDay weather={weather} />
        <ThisDayInfo weather={weather} />
      </div>
      <div>
        <Days />
      </div>
    </>
  );
};

export default Home;
