import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const firstName = "";
  return (
    <div className="card">
      {firstName ? (
        <>
          `hello ${firstName}` <Card />
        </>
      ) : (
        "hello there"
      )}
    </div>
  );
}

export default App;
