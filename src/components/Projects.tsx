import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import Crewnix from "../assets/Crewnix.png";
import green from "../assets/Greenleaf.png";
import lensbook from "../assets/Lensbook.png";

const projects = [
  {
    title: "Crewnix Recruitment Services",
    description:
      "A recruitment agency based in Luton, UK, connecting businesses with reliable warehouse operatives, pick & pack staff, cleaning workers, and skilled general crew members for flexible workforce solutions.",
    technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
    image: Crewnix,
    liveUrl: "https://crewnix.co.uk",
    githubUrl: "#",
  },
  {
    title: "Green Leaf Spices",
    description:
      "A spices distribution venture focused on delivering high-quality and authentic spices to customers, retailers, and businesses with a commitment to freshness and flavor.",
    technologies: ["React", "TypeScript", "D3.js", "Node.js"],
    image: green,
    liveUrl: "https://green-leaf-plum.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Lensbook",
    description:
      "A platform that connects photography and videography freelancers with clients, making it easy to discover creative professionals, showcase portfolios, and manage bookings seamlessly.",
    technologies: ["React", "Mapbox", "Express", "MongoDB"],
    image: lensbook,
    liveUrl: "https://lensbook-six.vercel.app/",
    githubUrl: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-card/30">
      <div className="container px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-sm font-mono mb-4">
              &lt;projects /&gt;
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured Work
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A selection of projects I've worked on. Each one presented unique challenges and learning opportunities.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`group grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative overflow-hidden rounded-2xl ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                  <div className="aspect-video bg-muted rounded-2xl overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className={`space-y-4 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <h3 className="text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  {/* <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div> */}
                  <div className="flex gap-3 pt-4">
                    <Button variant="hero" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Visit
                      </a>
                    </Button>
                    {/* <Button variant="heroOutline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                        Source
                      </a>
                    </Button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
