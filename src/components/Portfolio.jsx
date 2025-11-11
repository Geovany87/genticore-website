import "../styles/portfolio.css";
import projectPlaceholder from "../assets/images/projects/portfolio-v1.png";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Genetic Algorithm Visualizer",
      image: projectPlaceholder,
      description: "A visualization tool for simulating genetic evolution algorithms.",
    },
    {
      id: 2,
      title: "AI Medical Scanner",
      image: projectPlaceholder,
      description: "A deep learning-based web app for early disease detection and analysis.",
    },
    {
      id: 3,
      title: "DNA Data Dashboard",
      image: projectPlaceholder,
      description: "A bioinformatics dashboard for visualizing and analyzing genomic datasets.",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <h2>My Portfolio</h2>
      <p>Explore some of my featured research and projects.</p>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div className="portfolio-item" key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
