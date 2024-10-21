import Header from "./components/header/header";
import Home from "./components/pages/home/Home";
import "./app.css";

function App() {
  return (
    <div className="fullBody">
        <Header />
        <Home/>
    </div>
  );
}

export default App;
