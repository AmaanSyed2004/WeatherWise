import { createContext, useState } from "react";
import axios from "axios";

export const weatherContext = createContext();

const Context = ({ children }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const getWeather = async (place) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get("http://localhost:3000/getData", {
        params: { place: place },
      });
      setWeatherData(response.data); // Set the weather data received from the API
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError("Error fetching data, please try again.");
    } finally {
      setLoading(false);
    }
  };
  let currentWeatherData, hourlyWeatherData, forcastWeatherData;
  if (weatherData !== null) {
    let inputtime = weatherData.location.localtime;
    let time = inputtime.split(" ")[1];
    let currentHour = time.split(":")[0]; //hour at which the current data is present, used at hourlyForcast
    let hourData = weatherData.forecast.forecastday[0].hour;
    let hourForcast = [];
    hourData.forEach((element) => {
      if (hourForcast.length >= 5) return;
      let myTime = element.time.split(" ")[1];
      let hour = myTime.split(":")[0];
      if (+hour >= +currentHour) {
        const dataToBePassed = {
          condition: element.condition.text,
          time: hour,
          temp: Math.round(element.temp_c),
          icon: element.condition.icon,
        };
        hourForcast.push(dataToBePassed);
      }
    });
    let dayForcast = [];
    let dayData = weatherData.forecast.forecastday;
    dayData.forEach((day) => {
      dayForcast.push({
        date: day.date,
        maxtemp: Math.round(day.day.maxtemp_c),
        mintemp: Math.round(day.day.mintemp_c),
        icon: day.day.condition.icon,
      });
    });
    currentWeatherData = {
      location: {
        name: weatherData.location.name,
        country: weatherData.location.country,
      },
      time,
      icon: weatherData.current.condition.icon,
      condition: weatherData.current.condition.text,
      currentTemp: weatherData.current.temp_c,
      maxTemp: Math.round(weatherData.forecast.forecastday[0].day.maxtemp_c),
      minTemp: Math.round(weatherData.forecast.forecastday[0].day.mintemp_c),
    };
    hourlyWeatherData = {
      hourForcast,
    };
    forcastWeatherData = {
      dayForcast,
    };
  }
  return (
    <weatherContext.Provider
      value={{
        weatherData,
        getWeather,
        currentWeatherData,
        loading,
        error,
        hourlyWeatherData,
        forcastWeatherData,
      }}
    >
      {children}
    </weatherContext.Provider>
  );
};

export default Context;
