import React from "react";
import "./home.css";

const Home = () => {
    return (
        <main className="mainGrid">
            <section className="section1">
                <h2 className="homeTittle">WHO?</h2>
                <p className="homeText">A <a className="redBold">Full-Stack Web Developer</a> and <a className="redBold">Designer.</a></p>
                <p className="homeText">With over three years of experience, my primary focus is on full stack development, working with technologies such as <a className="bold">JavaScript, PHP, React,</a> and <a className="bold">Next.js.</a> While I have a strong background in web design, using tools like Figma and the Adobe Creative Suite, my expertise lies in building dynamic and efficient web applications from front to back.</p>
                <p className="homeText">I hold a <a className="bold">High-Level Technical Degree in Web Development ( DAW )</a> from La Salle Gràcia, Barcelona, and currently work as a <a className="bold">freelancer</a>, helping businesses bring their web projects to life.</p>
            </section>
            <section className="section2">
                <div className="aboutImage" alt="mxttw" />
            </section>
        </main>
    )
};

export default Home;