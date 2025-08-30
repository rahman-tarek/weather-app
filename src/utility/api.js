const API_KEY = '03f841e59419ad2c4035cdd544897a4d';
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const fetchCurrentWeather = async (city) => {
    const response = await fetch(
        `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
    );
    const data = await response.json();
    console.log(data);
    return data;
}

export const fetchHourlyForecast = async (city) => {
    const response = await fetch(
        `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
    )
    const data = await response.json();
    return data;
}