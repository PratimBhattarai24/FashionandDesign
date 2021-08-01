import Heading from "./components/Heading";
import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Heading />
        <div className="teams">
          <div className="row">
            <Card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
