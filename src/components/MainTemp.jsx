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
    <div className="md:row-span-2 bg-slate-700  rounded-md flex flex-col justify-end md:w-11/12 ml-6 w-96 md:p-8 p-4">
        <div className="flex">
          <h2 className="text-slate-400 text-9xl font-mono">{currentTemp}<sup className="text-7xl">°c</sup></h2>
          <img className="w-24" src= {icon}/>
        </div>
        
        {condition.length<15 ? <h2 className="text-5xl my-4 text-slate-400 font-mono">{condition}</h2> : <h2 className="text-3xl my-4 text-slate-400 font-mono">{condition}</h2>  }
        <h2 className="text-3xl text-slate-400 font-mono mb-4">{location.name}, {location.country}</h2>
        <h3 className="text-3xl text-slate-400 font-mono">{time}|H: {maxTemp}<sup>°c</sup> L: {minTemp}<sup >°c</sup></h3>


    </div>
  );
};

export default MainTemp;
