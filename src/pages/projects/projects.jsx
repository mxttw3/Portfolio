import { useRef } from "react";
import "./projects.css";
import Image1 from "../../components/images/project1.png";
import Image2 from "../../components/images/project2.png";
import Image3 from "../../components/images/project3.png";

const Projects = () => {
    const carouselRef = useRef(null);
    
    const projects = [
        {
            id: 1,
            title: "Nicstorm.com (Music producer)",
            description: "Creative portfolio website for a music producer.",
            image: Image1,
            link: "https://nicstorm.com",
        },
        {
            id: 2,
            title: "Conregfluid.com (Solenoid Valves)",
            description: "Currently under development in Next.js with SQL.",
            image: Image2,
            link: "http://localhost:3000/projects",
        },
        {
            id: 3,
            title: "Gaming simple page",
            description: "G2B ( Class small project )",
            image: Image3,
            link: "https://github.com/GerardPolloRebozado/g2b.git",
        },
    ];

        const handleScroll = (direction) => {
        if (carouselRef.current) {
            const scrollAmount = 1000; // Cantidad de desplazamiento en píxeles
            if (direction === "left") {
                carouselRef.current.scrollLeft -= scrollAmount;
            } else {
                carouselRef.current.scrollLeft += scrollAmount;
            }
        }
    };

    const handleProjectClick = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    return (
        <main className="mainGrid4">
            <section className="carousel-container">
                <div className="carousel" ref={carouselRef}>
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            className="carousel-item"
                            id="carrouselpaddingLeft"
                            onClick={() => handleProjectClick(project.link)}
                            style={{
                                cursor: "pointer",
                                marginRight: index === projects.length - 1 ? "5vw" : "0", // Margen solo para el último elemento
                            }}
                        >
                            <div className="projectImages">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="text-container">
                                <h2 className="carrouseltitle">{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}

                </div>
            </section>
            <section className="container2">
                <div 
                    className="left"                    
                    onClick={() => handleScroll("left")}
                    style={{ cursor: "pointer" }}>
                    <p>{'<'}</p>
                </div>
                <div className="center">
                    <p>PROJECTS</p>
                </div>
                <div 
                    className="right"
                    onClick={() => handleScroll("right")}
                    style={{ cursor: "pointer" }}>
                    <p>{'>'}</p>
                </div>
            </section>
        </main>
    );
};

export default Projects;
