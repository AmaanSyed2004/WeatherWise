import GetInput from "./components/GetInput.jsx";
import Context from "./Context.jsx";
import MainTemp from "./components/MainTemp.jsx";
import Hourly from './components/Hourly.jsx'
import Daily from './components/Daily.jsx'
export default function App() {
  return (
    <Context>
      <section className="bg-slate-950">
        <GetInput/>
      </section>
      <section className="bg-slate-950 h-screen md:grid md:grid-cols-2 md:grid-rows-2 flex flex-col justify-center items-center ">
          <MainTemp/>
        <div>
          <Hourly/>
        </div>
        <div>
          <Daily/>
        </div>
      </section>
    </Context>
  );
}
