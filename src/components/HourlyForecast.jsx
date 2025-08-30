import { useSelector } from "react-redux";

const HourlyForecast = () => {
    const { weather, hourlyForecast, loading, error } = useSelector((state) => state.weather)
    return (
        // Update Hourly Forecast section
        <div className="flex overflow-x-auto gap-4 pb-4">
            {hourlyForecast.map((hour, index) => (
                <div key={index} className="flex-shrink-0 w-24 bg-white/20 rounded-lg p-3 text-center">
                    <p className="text-gray-600">
                        {new Date(hour.dt * 1000).getHours()}:00
                    </p>
                    <img
                        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`}
                        alt="weather"
                        className="w-12 h-12 mx-auto my-2"
                    />
                    <p className="font-bold">{Math.round(hour.main.temp)}°C</p>
                </div>
            ))}
        </div>
    )
}

export default HourlyForecast;