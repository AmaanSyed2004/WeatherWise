import { useContext } from "react";
import { weatherContext } from "../Context";
export default function Hourly(){
    const {hourlyWeatherData}= useContext(weatherContext);
    const myData= hourlyWeatherData.hourForcast;
    return(
        <div className="bg-slate-700 rounded-md font-mono md:w-11/12 md:ml-6 w-96 md:p-8 p-4 mt-12">
            <h2 className="text-slate-400 text-4xl mb-2"> {myData[1].condition} around {myData[1].time}:00 </h2>
            <hr className="mb-2 h-[2px]  bg-slate-900 border-0"/>
            <div className="flex justify-center gap-2 ">
            {myData.map((hour)=>{
                return(
                    <div className="flex flex-col w-20 border-2 rounded-md border-slate-950" key={hour.time}> 
                        <h3 className="text-slate-400 text-center">{hour.time}:00 </h3>
                        <img src={hour.icon} alt= {hour.condition} />
                        <h3 className="text-slate-400 text-center"> {hour.temp}°C</h3>
                    </div>
                )
            })}
            </div>
        </div>
    )
    
}