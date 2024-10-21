import React from "react";
import "./home.css";
// import image from public
import image1 from "../../images/Image1.png"

const Home = () => {
    return (
        <main className="mainGrid">
            <section className="section1">
                <article className="textCube">
                    <h2 className="homeTittle">WHO?</h2>
                    <p className="homeText">A Full-Stack Web Developer and Designer.</p>
                    <p className="homeText">With over three years of experience, my primary focus is on full stack development, working with technologies such as JavaScript, PHP, React, and Next.js. While I have a strong background in web design, using tools like Figma and the Adobe Creative Suite, my expertise lies in building dynamic and efficient web applications from front to back.</p>
                    <p className="homeText">I hold a High-Level Technical Degree in Web Development (DAW) from La Salle Gràcia, Barcelona, and currently work as a freelancer, helping businesses bring their web projects to life.</p>
                </article>
            </section>
            <section className="section2">
                <img src={image1} className="aboutImage" alt="mxttw"/>
            </section>
        </main>
    )
};

export default Home;