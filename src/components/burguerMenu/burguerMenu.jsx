import React, { useState } from 'react';
import menuIcon from '../images/menuIcon.svg';
import './burguerMenu.css';

const BurguerMenu = ({ primaryColor = '#fff', secondaryColor = '#333', shadow = '0px 4px 6px rgba(0,0,0,0.1)' }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navigate = (path) => {
        window.location.href = path;
    };

    return (
        <div className="burguerMenuWrapper">
            {/* Botón para abrir/cerrar el menú */}
            <button
                className={`burguerButton ${menuOpen ? 'open' : 'close'}`}
                onClick={toggleMenu}
                
            >
                <img src={menuIcon} alt="Menu" className='burguerIcon'/>
            </button>

            <nav
                className={`burguerMenu ${menuOpen ? 'open' : ''}`}
                style={{ backgroundColor: secondaryColor }}
            >
                <ul>
                    <li onClick={() => navigate('/home')}>Home</li>
                    <li onClick={() => navigate('/experience')}>Experience</li>
                    <li onClick={() => navigate('/projects')}>Projects</li>
                    <li onClick={() => navigate('/skills')}>Skills</li>
                    <li onClick={() => navigate('/contact')}>Contact</li>
                </ul>
            </nav>
        </div>
    );
};

export default BurguerMenu;
