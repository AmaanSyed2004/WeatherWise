import { useState } from 'react'
import { useContext } from 'react';
import { weatherContext } from '../Context';
const GetInput=()=>{
    const[userInput, setUserInput]= useState("");
    const {getWeather}= useContext(weatherContext);
    return(
        <div className="flex justify-center pt-2 md:pt-8 lg:pt-16">
            <input className="w-72 bg-slate-200" onChange={input=> setUserInput(input.target.value)}/>
            <button className="text-slate-400 text-2xl pl-4" onClick={()=>{getWeather(userInput)}}>Go!</button>
        </div>
    )
}
export default GetInput;