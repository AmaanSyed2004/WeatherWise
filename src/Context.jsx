import { createContext, useState } from "react";
import axios from "axios";

export const weatherContext = createContext();

const Context = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);

  const getWeather = async (place) => {
    try {
      const response = await axios.get("http://localhost:3000/getData", {
        params: { place: place },
      });
      console.log(response)
      setWeatherData(response.data); // Set the weather data received from the API
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  let currentWeatherData;
  if (weatherData !== null) {
    currentWeatherData = {
      location: {
        name: weatherData.location.name,
        country: weatherData.location.country,
      },
      time: weatherData.location.localtime,
      icon: weatherData.current.condition.icon,
      condition: weatherData.current.condition.text,
      currentTemp: weatherData.current.temp_c,
      maxTemp: weatherData.forecast.forecastday[0].day.maxtemp_c,
      minTemp: weatherData.forecast.forecastday[0].day.mintemp_c,
    };
  }
  return (
    <weatherContext.Provider
      value={{ weatherData, getWeather, currentWeatherData }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default Context;
