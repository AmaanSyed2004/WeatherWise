import { createContext, useState } from "react";
import axios from "axios";

export const weatherContext = createContext();

const Context = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError]= useState(null);
  const getWeather = async (place) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:3000/getData", {
        params: { place: place },
      });
      console.log(response)
      setWeatherData(response.data); // Set the weather data received from the API
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Error fetching data, please try again.")
    } finally{
      setLoading(false);
    }
  };
  let currentWeatherData;
  if (weatherData !== null) {
    let inputtime=weatherData.location.localtime;
    let time= inputtime.split(' ')[1]
    currentWeatherData = {
      location: {
        name: weatherData.location.name,
        country: weatherData.location.country,
      },
      time,
      icon: weatherData.current.condition.icon,
      condition: weatherData.current.condition.text,
      currentTemp: weatherData.current.temp_c,
      maxTemp: weatherData.forecast.forecastday[0].day.maxtemp_c,
      minTemp: weatherData.forecast.forecastday[0].day.mintemp_c,
    };
  }
  return (
    <weatherContext.Provider
      value={{ weatherData, getWeather, currentWeatherData, loading, error }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default Context;
