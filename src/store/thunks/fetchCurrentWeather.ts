import { CurrentWeatherSlice } from './../slices/currentWeatherSlice';
import { WeatherService } from './../../services/WeatherService';
import { AppDispatch } from "../store";

export const fetchCurrentWeather = (payload: string) => async (dispatch: AppDispatch) => {
    dispatch(CurrentWeatherSlice.actions.fetchCurrentWeather());
    const res = await WeatherService.getCurrentWeather(payload);
    dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSuccess())
}