import  { useContext } from "react";
import { weatherContext } from "../Context";

const MainTemp = () => {
  const { currentWeatherData } = useContext(weatherContext);
  if (!currentWeatherData) {
    return <div>Loading...</div>; 
  }

  const {
    location,
    time,
    icon,
    condition,
    currentTemp,
    maxTemp,
    minTemp,
  } = currentWeatherData;

  return (
    <div className="md:row-span-2 bg-slate-700  rounded-md flex flex-col justify-end md:h-1/2 md:w-11/12 ml-6 w-96">
        <h2 className="text-slate-400 text-5xl md:text-7xl">{currentTemp}</h2>


    </div>
  );
};

export default MainTemp;
