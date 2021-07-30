import logo from "./logo.svg";
import "./App.css";
import Sandbox from "./components/Sandbox";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="w-screen h-screen flex flex-col">
      <Banner></Banner>
      <Sandbox></Sandbox>
    </div>
  );
}

export default App;
