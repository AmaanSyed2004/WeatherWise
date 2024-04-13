import { useContext } from "react";
import { weatherContext } from "../Context";
export default function Daily() {
  const { forcastWeatherData } = useContext(weatherContext);
  const forecast = forcastWeatherData.dayForcast;
  return (
    <div className="bg-slate-700 rounded-md font-mono md:w-11/12 md:ml-6 w-96 md:p-8 p-4 mt-12 text-slate-400">
      <h3 className="text-3xl">Weather Forecast</h3>
      <hr className="mb-2 h-[2px]  bg-slate-900 border-0" />
      <div className="flex gap-3 flex-col">
        {forecast.map((day) => {
          return (
            <div className="flex justify-between" key={day.date}>
              <h3 className="text-xl">
                {new Date(day.date).toLocaleDateString("en-US", {
                  weekday: "long",
                })}
              </h3>
                <p> Max:{day.maxtemp}°C Min:{day.mintemp}°C </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
