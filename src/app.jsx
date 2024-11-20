import Header from './components/header/header';
import Home from './pages/home/Home';
import Menu from './components/menu/menu'
import './app.css';

function App() {
    let varColorName = 'rgba(137, 0, 53, 1)'
    let varColorSurname = 'black'
  return (
    <div className="fullBody">
        <Header colorName={varColorName} colorSurname={varColorSurname}/>
        <Home/>
        <Menu/>
    </div>
  );
}

export default App;
