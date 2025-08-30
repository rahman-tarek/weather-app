import { useSelector } from "react-redux";

const DailyForecast = () => {
    const { dailyForecast, loading, error } = useSelector(state => state.weather)
    return (
        // Update 10-Day Forecast section
        <div className="space-y-4">
            {dailyForecast.map((day, index) => (
                <div key={index} className="flex items-center justify-between bg-white/20 p-4 rounded-lg">
                    <span className="text-gray-800 font-medium">
                        {new Date(day.dt * 1000).toLocaleDateString('en-US', { weekday: 'long' })}
                    </span>
                    <div className="flex items-center gap-4">
                        <img
                            src={`http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                            alt="weather"
                            className="w-8 h-8"
                        />
                        <span className="text-gray-800 font-bold">{Math.round(day.main.temp)}°C</span>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default DailyForecast;