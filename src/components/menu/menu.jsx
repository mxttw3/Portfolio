import './menu.css';

const menu = ({ primaryColor, secondaryColor, shadow, primaryColorText }) => {
    const navigate = (path) => {
        window.location.href = path;
    };
    
    return (
        <nav className='menuCube' style={{backgroundColor: primaryColor}}>
            <ul>
                <li className='navButton' onClick={() => navigate('/')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColorText}}>Home</span>
                </li>
                <li className='navButton' onClick={() => navigate('/experience')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColorText}}>Experience</span>
                </li>
                <li className='navButton' onClick={() => navigate('/projects')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColorText}}>Projects</span>
                </li>
                <li className='navButton' onClick={() => navigate('/skills')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColorText}}>Skills</span>
                </li>
                <li className='navButton' onClick={() => navigate('/contact')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColorText}}>Contact</span>
                </li>
            </ul>
        </nav>
    );
};

export default menu;
