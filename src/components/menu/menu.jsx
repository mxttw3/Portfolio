import React from "react";
import "./menu.css";

const Header = ({ primaryColor, secondaryColor }) => {

    return (
        <nav className="menuCube">
            <ul>
                <li className="navButton"/>
                <li className="navButton"/>
                <li className="navButton"/>
                <li className="navButton"/>
                <li className="navButton"/>
            </ul>
        </nav>
    )
}

export default Header;