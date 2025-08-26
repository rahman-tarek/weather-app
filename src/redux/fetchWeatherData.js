import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchWeatherData = createAsyncThunk("weather/fetchWeatherData", async (city) => {
    const apiKey = "03f841e59419ad2c4035cdd544897a4d";
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&uints=metric`);
    const data = await response.json();
    return data;
})

export default fetchWeatherData;