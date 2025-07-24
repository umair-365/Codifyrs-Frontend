import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Web Apps", "Mobile Apps", "E-commerce", "SaaS"];

  const projects = [
    {
      id: 1,
      title: "Analytics Dashboard",
      description: "A comprehensive analytics platform that helps businesses track and visualize their key performance metrics in real-time.",
      image: portfolio1,
      category: "Web Apps",
      technologies: ["React", "TypeScript", "D3.js", "Node.js"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "E-commerce Mobile App",
      description: "A feature-rich mobile shopping application with seamless user experience and advanced filtering capabilities.",
      image: portfolio2,
      category: "Mobile Apps",
      technologies: ["React Native", "Redux", "Firebase", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Corporate Website",
      description: "A modern corporate website with responsive design, optimized for performance and search engine visibility.",
      image: portfolio3,
      category: "Web Apps",
      technologies: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "SaaS Platform",
      description: "A scalable software-as-a-service platform for project management with team collaboration features.",
      image: portfolio1,
      category: "SaaS",
      technologies: ["Vue.js", "Laravel", "MySQL", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Online Marketplace",
      description: "A multi-vendor marketplace platform connecting buyers and sellers with secure payment processing.",
      image: portfolio2,
      category: "E-commerce",
      technologies: ["React", "Express.js", "MongoDB", "PayPal API"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Fitness Tracking App",
      description: "A comprehensive fitness application with workout tracking, nutrition planning, and social features.",
      image: portfolio3,
      category: "Mobile Apps",
      technologies: ["Flutter", "Dart", "Firebase", "Health Kit"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Our Work</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Featured
            <span className="block text-primary">Portfolio</span>
          </h2>
          <p className="section-text max-w-2xl mx-auto">
            Discover some of our recent projects and see how we've helped businesses 
            transform their digital presence and achieve their goals.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-background rounded-2xl overflow-hidden border border-border hover:border-primary/20 transition-all duration-300 card-hover"
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <ExternalLink className="w-5 h-5 text-primary" />
                  </a>
                  <a
                    href={project.githubUrl}
                    className="w-10 h-10 bg-background rounded-full flex items-center justify-center hover:scale-110 transition-transform"
                  >
                    <Github className="w-5 h-5 text-primary" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary">
                  View Details
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button variant="hero" size="xl" className="group">
            View All Projects
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;