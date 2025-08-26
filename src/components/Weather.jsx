import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import fetchWeatherData from "../redux/fetchWeatherData";
import weatherImage from '../assets/weather.png';

const Weather = () => {
    const weatherData = useSelector((state) => state.weather);
    const { weather, loading, error } = weatherData;
    const dispatch = useDispatch();

    // local state for city input
    const [city, setCity] = useState("");

    // Form submission for fetching weather data by city name
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchWeatherData(city));
        setCity("");
    }


    return (
        <div className="weather-container flex flex-col justify-center bg-gradient-to-b from-[#E6F3FB] to-[#CDE8F7]">
            <h1 className="text-4xl font-bold text-center">Weather Dashboard</h1>
            <p className="text-center font-bold mt-2">See the weather forecast of your own city, get updated</p>
            <img src={weatherImage} alt="weather image" className="w-32 h-32 mx-auto" />
            <form action="submit" onSubmit={submitHandler} >
                <input type="text" placeholder="Enter your City" onChange={(e) => setCity(e.target.value)} />
            </form>
        </div>
    )
}

export default Weather;