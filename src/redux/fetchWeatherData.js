import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCurrentWeather, fetchHourlyForecast } from "../utility/api";

const fetchWeatherData = createAsyncThunk("weather/fetchWeatherData",
    async (city) => {
        const [currentWeather, forecast] = await Promise.all([
            fetchCurrentWeather(city),
            fetchHourlyForecast(city)
        ]);

        if (currentWeather.cod !== 200 || forecast.cod !== '200') {
            console.log(currentWeather.message || forecast.message)
        }

        // Process hourly forecast
        const hourlyForecast = forecast.list.slice(0, 10);

        // Process daily forecast for 10 days
        const dailyForecast = forecast.list.reduce((acc, item) => {
            const date = new Date(item.dt * 1000).toLocaleDateString();
            if (!acc[date]) {
                acc[date] = item;
            }
            return acc;
        }, {})

        return {
            current: currentWeather,
            hourly: hourlyForecast,
            daily: Object.values(dailyForecast).slice(0, 10)
        }
    })

export default fetchWeatherData;