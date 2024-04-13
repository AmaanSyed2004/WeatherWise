import { useState } from "react";
import { useContext } from "react";
import { weatherContext } from "../Context";
const GetInput = () => {
  const [userInput, setUserInput] = useState("");
  const { getWeather } = useContext(weatherContext);
  return (
    <>
    <div className="flex justify-center pt-2 md:pt-8 lg:pt-16">
      <input
        className="w-1/3 bg-slate-300"
        onChange={(input) => setUserInput(input.target.value)}
      />
      <button
        className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bg-slate-700 rounded group ml-4 w-20  "
        onClick={() => {
          getWeather(userInput);
        }}
      >
        <span className="w-0 h-0 rounded bg-slate-600 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
        <span className="w-full text-slate-400 text-3xl  font-mono rounded-md  transition-colors duration-300 ease-in-out group-hover:text-white z-10">
          Go!
        </span>
      </button>
      
    </div>
    <p className="text-slate-400 text-center mt-2 font-mono">For best results, input in the format: <code className="font-normal"> place, location, country</code></p>
    </>
  );
};
export default GetInput;
