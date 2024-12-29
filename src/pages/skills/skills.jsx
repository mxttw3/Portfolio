import "./skills.css";
import jsLogo from '../../components/images/jsLogo.svg';
import phpLogo from '../../components/images/phpLogo.svg';
import reactLogo from '../../components/images/reactLogo.svg';
import nextLogo from '../../components/images/nextLogo.svg';
import nodeLogo from '../../components/images/nodeLogo.svg';
import sqlLogo from '../../components/images/sqlLogo.svg';
import firebaseLogo from '../../components/images/firebaseLogo.svg';
import figmaLogo from '../../components/images/figmaLogo.svg';


const Skills = () => {

    const handleNavigate = (url) => {
        window.open( url, '_blank');
    }

    return (
        <main className="mainGrid5">
            <section className="skillsContainer">
                <div className='centerSkills'>
                    <div className="logosContainer">
                        <img src={jsLogo} alt="javascript logo" className="logoImage" id='jsLogo' onClick={() => handleNavigate('https://en.wikipedia.org/wiki/JavaScript')}/>
                        <img src={phpLogo} alt="php logo" className="logoImage" id='phpLogo' onClick={() => handleNavigate('https://www.php.net') } />
                        <img src={reactLogo} alt="react logo" className="logoImage" id='reactLogo' onClick={() => handleNavigate('https://react.dev') }/>
                        <img src={nextLogo} alt="next logo" className="logoImage" id='nextLogo' onClick={() => handleNavigate('https://nextjs.org') }/>
                        <img src={nodeLogo} alt="node logo" className="logoImage" id='nodeLogo'onClick={() => handleNavigate('https://nodejs.org/en') }/>
                        <img src={sqlLogo} alt="sql logo" className="logoImage" id='sqlLogo' onClick={() => handleNavigate('https://en.wikipedia.org/wiki/SQL') }/>
                        <img src={firebaseLogo} alt="firebase logo" className="logoImage" id='firebaseLogo' onClick={() => handleNavigate('https://firebase.google.com') }/>
                        <img src={figmaLogo} alt="figma logo" className="logoImage" id='figmaLogo' onClick={() => handleNavigate('https://www.figma.com') }/>
                    </div>
                    <h2 className="skillsTitle">SKILLS</h2>
                </div>
            </section>
        </main>
    )
};

export default Skills;