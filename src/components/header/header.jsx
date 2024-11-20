import React from "react";
import "./header.css";

const Header = ({ colorName, colorSurname }) => {

    return (
        <header className="headerCube">
            <h1 className="tittle" id="tittleSpace" style={{color: colorName}}>MATTHEW</h1>
            <h1 className="subtittle" id="lastName1" style={{color: colorSurname}}>ANGULO</h1>
            <h1 className="subtittle" id="lastName2" style={{color: colorSurname}}>CABALLERO</h1>
        </header>
    )
}

export default Header;