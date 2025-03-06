import "./projects.css";
import { useRef, useEffect } from "react";
import Image1 from "../../components/images/project1.avif";
import Image2 from "../../components/images/project2.avif";
import Image3 from "../../components/images/image3.png";
import Image4 from "../../components/images/image4.png";

const Projects = () => {
    const carouselRef = useRef(null);

    const projects = [
        {
            id: 1,
            title: "Kosmosites.com ( My freelancer work )",
            description: "A portfolio website to showcase my freelance work and services.",
            image: Image4,
            link: "https://kosmosites.com",
        },
        {
            id: 2,
            title: "Artimetall.cat ( Jewerly school )",
            description: "A website showcasing metalwork and a jewerly school",
            image: Image3,
            link: "https://artimetall.cat",
        },
        {
            id: 3,
            title: "Nicstorm.com ( Music producer )",
            description: "Creative portfolio website for a music producer.",
            image: Image1,
            link: "https://nicstorm.com",
        },
        {
            id: 4,
            title: "Conregfluid.com ( Solenoid Valves )",
            description: "Currently under development in Next.js",
            image: Image2,
            link: "http://matthewangulo.com/projects",
        },

    ];

    const handleProjectClick = (link) => {
        window.open(link, "_blank", "noopener,noreferrer");
    };

    useEffect(() => {
        if (window.outerWidth > 1024){
            const carouselElement = carouselRef.current;
            
            const speed = 0.3;
            carouselElement.addEventListener("wheel", (evt) => {
                evt.preventDefault();
                carouselElement.scrollLeft += evt.deltaY * speed;
                carouselElement.scrollLeft += evt.deltaX * speed;
            });
        }
    }, []);

    return (
        <main className="mainGrid4">
            <section className="carousel" ref={carouselRef}>
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
                </section>
        </main>
    );
};

export default Projects;
