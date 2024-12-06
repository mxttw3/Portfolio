import Header from './components/header/header';
import Home from './pages/home/Home';
import Exp from './pages/exp/exp';
import Menu from './components/menu/menu'
import Projects from './pages/projects/projects'
import Skills from './pages/skills/skills'
import Contact from './pages/contact/contact'
import { useEffect, useState } from "react";
import BurguerMenu from './components/burguerMenu/burguerMenu';
import './app.css';

function App() {
  const [varColorName, setColorName] = useState('#890035');
  const [varColorSurname, setColorSurname] = useState('black');
  const [varColorMenu, setvarColorMenu] = useState('#303030');
  const [varSecondaryColorMenu, setSecondaryColorMenu] = useState('white');
  const [varShadowMenu, setShadowMenu] = useState('rgba(255, 255, 255, 0.5) 0px 1px 8px');
  const [varComp, serVarComp] = useState(0)


  useEffect(() => {
    const path = window.location.pathname;
    const fullBody = document.getElementById("fullBody");

    switch (path) {
      case "/":
        fullBody.style.backgroundColor = "white";
        serVarComp(0)
        break;
      case "/experience":
        fullBody.style.backgroundColor = "#303030";
        setColorName('#C6004D')
        setColorSurname('white')
        setvarColorMenu('white')
        setSecondaryColorMenu('#303030')
        setShadowMenu('rgba(60, 60, 60, 0.7) 0px 1px 5px')
        serVarComp(1)
        break;
      case "/projects":
          fullBody.style.backgroundColor = "white";
          serVarComp(2)
          break;
      case "/skills":
          fullBody.style.backgroundColor = "#303030";
          setColorName('#C6004D')
          setColorSurname('white')
          setvarColorMenu('white')
          setSecondaryColorMenu('#303030')
          setShadowMenu('rgba(60, 60, 60, 0.7) 0px 1px 5px')
          serVarComp(3)
          break;
      case "/contact":
          fullBody.style.backgroundColor = "white";
          serVarComp(4)
          break;
      default:
        break
    }
  }, [])

  const renderComponent = () => {
    switch (varComp) {
      case 0:
        return <Home />;
      case 1:
        return <Exp />;
      case 2:
        return <Projects />
      case 3:
        return <Skills />
      case 4:
        return <Contact />
      default:
        // hacer pagina 404
        return <Home />;
    }
  };

  return (
    <div id='fullBody'>
      <Header colorName={varColorName} colorSurname={varColorSurname} />
      {renderComponent()}
      <Menu primaryColor={varColorMenu} secondaryColor={varSecondaryColorMenu} shadow={varShadowMenu}/>
      <BurguerMenu />
    </div>
  );
}

export default App;
