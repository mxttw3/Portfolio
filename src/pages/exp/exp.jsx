import React from "react";
import "./exp.css";

const Exp = () => {
    return (
        <main className="mainGrid2">
            <section className="expSection1">
                <div className="expImage">
                    <p className='expTittle'>EXPERIENCE</p>
                </div>
            </section>
            <section className="expSection2">
                <div className="paddingTopExp">
                    <div className="timeLine1">
                        <div className="round"></div>
                        <div className="textCubeExp">
                            <p className="timeTittle"><a>Z</a>aibr Innovations (Berlin)</p>
                            <p className="timeText">5 Months focused on AI-driven web application development.</p>
                        </div>
                    </div>
                    <div className="timeLine1" id="paddingTopExp">
                        <div className="round"></div>
                        <div className="textCubeExp">
                            <p className="timeTittle"><a>W</a>ebsite for Conregfluid (Terrassa)</p>
                            <p className="timeText">Currently developing a new website for a solenoid valve business.</p>
                        </div>
                    </div>
                    <div className="timeLine1" id="paddingTopExp">
                        <div className="round"></div>
                        <div className="textCubeExp">
                            <p className="timeTittle"><a>W</a>ebsite for Nicstorm (Berlin)</p>
                            <p className="timeText">Creative portfolo website for a music producer, <a href="https://www.nicstorm.com">nicstorm.com</a></p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="positionExp">
                <a href="https://www.linkedin.com/in/matthew-angulo-caballero/" className="linkedin">{'< FIND ME ON LINKEDIN />'}</a>
            </section>
        </main>
    )
};

export default Exp;