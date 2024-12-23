import "./skills.css";
import jsLogo from "../../components/images/jsLogo.png";
import phpLogo from "../../components/images/phpLogo.png";
import reactLogo from "../../components/images/reactLogo.png";
import nextLogo from "../../components/images/nextLogo.png";
import nodeLogo from "../../components/images/nodeLogo.png";
import sqlLogo from "../../components/images/sqlLogo.png";
import mongoLogo from "../../components/images/mongoLogo.png";
import figmaLogo from "../../components/images/figmaLogo.png";

const Skills = () => {
    return (
        <main className="mainGrid5">
            <section className="skillsContainer">
                <div className='centerSkills'>
                    <div className="logosContainer">
                        <img src={jsLogo} alt="" className="logoImage" id='jsLogo'/>
                        <img src={phpLogo} alt="" className="logoImage" id='phpLogo' />
                        <img src={reactLogo} alt="" className="logoImage" id='reactLogo'/>
                        <img src={nextLogo} alt="" className="logoImage" id='nextLogo' />
                        <img src={nodeLogo} alt="" className="logoImage" id='nodeLogo'/>
                        <img src={sqlLogo} alt="" className="logoImage" id='sqlLogo'/>
                        <img src={mongoLogo} alt="" className="logoImage" id='mongoLogo'/>
                        <img src={figmaLogo} alt="" className="logoImage" id='figmaLogo'/>
                    </div>
                    <h2 className="skillsTitle">SKILLS</h2>
                </div>
            </section>
        </main>
    )
};

export default Skills;