import './menu.css';

const Header = ({ primaryColor, secondaryColor, shadow }) => {
    const navigate = (path) => {
        window.location.href = path;
    };
    
    return (
        <nav className='menuCube' style={{backgroundColor: primaryColor}}>
            <ul>
                <li className='navButton' onClick={() => navigate('/')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColor}}>Home</span>
                </li>
                <li className='navButton' onClick={() => navigate('/experience')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColor}}>Experience</span>
                </li>
                <li className='navButton' onClick={() => navigate('/projects')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColor}}>Projects</span>
                </li>
                <li className='navButton' onClick={() => navigate('/skills')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColor}}>Skills</span>
                </li>
                <li className='navButton' onClick={() => navigate('/contact')} style={{backgroundColor: secondaryColor, boxShadow: shadow}}>
                    <span className='navText' style={{color: primaryColor}}>Contact</span>
                </li>
            </ul>
        </nav>
    );
};

export default Header;
