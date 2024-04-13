import { useContext } from "react";
import { weatherContext } from "../Context";
import DefaultView from "./DefaultView";
import MainTemp from "./MainTemp";
import Hourly from "./Hourly";
import Daily from "./Daily";
import LoadingView from "./LoadingView";
export default function ContentView() {
  const { weatherData, loading, error } = useContext(weatherContext);
  if (weatherData === null && !loading) { // show the default when DATA IS NOT LOADING
    return <DefaultView />;
  } else if (loading) {
    return <LoadingView/>;
  } else {
    return (
      <section className=" h-screen md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col justify-center items-center  ">
        <MainTemp />
        <Hourly />
        <Daily />
      </section>
    );
  }
}
