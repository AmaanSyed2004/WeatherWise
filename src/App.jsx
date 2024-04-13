import GetInput from "./components/GetInput.jsx";
import Context from "./Context.jsx";
import MainTemp from "./components/MainTemp.jsx";
import Hourly from './components/Hourly.jsx'
import Daily from './components/Daily.jsx'
import ContentView from "./components/ContentView.jsx";
export default function App() {
  return (
    <Context>
      <section className="bg-slate-950">
        <GetInput/>
      </section>
      <section className="bg-slate-950 h-screen">
        <ContentView/>
      </section>
    </Context>
  );
}
