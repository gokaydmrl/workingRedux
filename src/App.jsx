import "./App.css";
import Dene from "./components/Dene";
import Loading from "./components/Loading";
import Twit from "./components/Twit";

function App() {
  return (
    <div className="App">
      <Twit />
      <Dene />
      <Loading/>
    </div>
  );
}

export default App;
