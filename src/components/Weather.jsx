import { useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import fetchWeatherData from "../redux/fetchWeatherData";
import weatherImage from '../assets/weather.png';
import HourlyForecast from "./hourlyForecast";
import DailyForecast from "./DailyForecast";

const Weather = () => {

    const weatherData = useSelector((state) => state.weather);
    const { weather, loading, error } = weatherData;
    const dispatch = useDispatch();
    const [city, setCity] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(fetchWeatherData(city));
        setCity("");

    }
    console.log(weather)
    return (
        <div className="min-h-screen bg-gradient-to-b from-[#E6F3FB] to-[#CDE8F7] p-6">
            {/* Header Section */}
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800">Weather Dashboard</h1>
                    <p className="text-gray-600 mt-2">See the weather forecast of your city</p>
                </div>

                {/* Search Section */}
                <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg mb-8">
                    <form onSubmit={submitHandler} className="flex gap-4">
                        <input
                            type="text"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            placeholder="Enter your city..."
                            className="flex-1 px-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                        <button
                            type="submit"
                            className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                        >
                            {loading ? 'Searching...' : 'Search'}
                        </button>
                    </form>
                </div>

                {error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-8">
                        {error}
                    </div>
                )}

                {weather.length > 0 && (
                    <>
                        {/* Current Weather */}
                        <div className="bg-white/30 backdrop-blur-md rounded-xl p-6 shadow-lg mb-8">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="text-center md:text-left">
                                    <h2 className="text-2xl font-bold text-gray-800">{weather[0].name}</h2>
                                    <div className="text-6xl font-bold text-gray-800 my-4">
                                        {Math.round(weather[0].current.main.temp)}°C
                                    </div>
                                    <p className="text-xl text-gray-600 capitalize">
                                        {weather[0].current.weather[0].description}
                                    </p>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-white/20 p-4 rounded-lg">
                                        <p className="text-gray-600">Humidity</p>
                                        <p className="text-xl font-bold">{weather[0].current.main.humidity}%</p>
                                    </div>
                                    <div className="bg-white/20 p-4 rounded-lg">
                                        <p className="text-gray-600">Wind Speed</p>
                                        <p className="text-xl font-bold">{weather[0].current.wind.speed} m/s</p>
                                    </div>
                                    <div className="bg-white/20 p-4 rounded-lg">
                                        <p className="text-gray-600">Feels Like</p>
                                        <p className="text-xl font-bold">{Math.round(weather[0].current.main.feels_like)}°C</p>
                                    </div>
                                    <div className="bg-white/20 p-4 rounded-lg">
                                        <p className="text-gray-600">Pressure</p>
                                        <p className="text-xl font-bold">{weather[0].current.main.pressure} hPa</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <HourlyForecast />

                        <DailyForecast />
                    </>
                )}
            </div>
        </div>
    );
}

export default Weather;