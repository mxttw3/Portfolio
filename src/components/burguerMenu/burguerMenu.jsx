import { useState, useEffect } from 'react';
import menuIcon from '../images/menuIcon.svg';
import './burguerMenu.css';

const BurguerMenu = ({ primaryColor = '#fff', secondaryColor = '#333', shadow = '0px 4px 6px rgba(0,0,0,0.1)' }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [selected, setSelected] = useState(1);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navigate = (path) => {
        window.location.href = path;
    };
    
    useEffect(() => {
        const routeToSelectedMap = {
            "/home": 1,
            "/experience": 2,
            "/projects": 3,
            "/skills": 4,
            "/contact": 5,
        };

        const currentPath = window.location.pathname;
        const newSelected = routeToSelectedMap[currentPath] || 0;
        setSelected(newSelected);
    }, []);

    return (
        <div className="burguerMenuWrapper">
            <button
                className={`burguerButton ${menuOpen ? 'open' : 'close'}`}
                onClick={toggleMenu}
            >
                <img src={menuIcon} alt="Menu" className={`burguerIcon ${menuOpen ? 'open2' : ''}`} />
            </button>

            <nav
                className={`burguerMenu ${menuOpen ? 'open' : ''}`}
                style={{ backgroundColor: secondaryColor }}
            >
                <ul>
                    <li
                        onClick={() => {navigate('/home');}}
                        className={selected === 1 || selected === 0 ? 'active' : ''}
                    >
                        Home
                    </li>
                    <li
                        onClick={() => {navigate('/experience');}}
                        className={selected === 2 ? 'active' : ''}
                    >
                        Experience
                    </li>
                    <li
                        onClick={() => {navigate('/projects');}}
                        className={selected === 3 ? 'active' : ''}
                    >
                        Projects
                    </li>
                    <li
                        onClick={() => {navigate('/skills');}}
                        className={selected === 4 ? 'active' : ''}
                    >
                        Skills
                    </li>
                    <li
                        onClick={() => {navigate('/contact');}}
                        className={selected === 5 ? 'active' : ''}
                    >
                        Contact
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default BurguerMenu;
