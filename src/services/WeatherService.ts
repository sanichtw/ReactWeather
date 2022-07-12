import axios, { AxiosResponse } from "axios"

export class WeatherService {
    static getCurrentWeather(city: string): Promise<AxiosResponse<any>> {
        return axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=30478f2fc3b0a656028f504891676714`)
    }
}