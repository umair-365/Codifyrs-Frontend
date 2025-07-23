import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Code, 
  Network, 
  Sliders, 
  Globe, 
  Rocket, 
  Users,
  ArrowRight 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices for optimal performance.",
      features: ["React & Next.js", "D Jango", "Node.js Backend", "Database Design", "API Integration"]
    },
    {
      icon: Network,
      title: " Scrapping",
      description: "Get real-time, structured data from any website with our efficient and secure scraping solutions.",
      features: ["Real-Time Data Extraction", "Customizable Scraping", "High-Speed Performance", "Scalable Solutions", " Multi-Source Scraping", "Ongoing Support"]
    },
    {
      icon: Sliders,
      title: " Selenium Automation",
      description: "Selenium Automation enables fast, reliable browser testing and interaction through scripted control, helping teams streamline QA, detect bugs early, and ensure cross-browser compatibility.",
      features: ["Cross-Browser Testing", "Headless Execution", "DOM Interaction", "Form Filling", "Screenshot Capture", "Real-Time Monitoring", "Custom Test Scripts", "Parallel Execution", "Data Extraction", "CI/CD Integration"]
    },
    {
      icon: Globe,
      title: "Python Scripting",
      description: "Python scripting offers a powerful and flexible way to automate tasks, process data, build tools, and integrate systems using simple, readable code.",
      features: ["Easy Syntax", "Rapid Development", "Cross-Platform Support", "Extensive Libraries", "File Handling", "API Integration", "Data Processing", "Automation Capabilities", "Error Handling", "Third-Party Module Support"]
    },
    {
      icon: Rocket,
      title: "Product Launch",
      description: "End-to-end product development from ideation to successful market launch.",
      features: ["MVP Development", "Market Testing", "Launch Strategy", "Post-Launch Support"]
    },
    // {
    //   icon: Users,
    //   title: "Team Augmentation",
    //   description: "Dedicated remote teams that integrate seamlessly with your existing workforce.",
    //   features: ["Remote Teams", "Skill Matching", "Project Management", "Quality Assurance"]
    // }
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Our Expertise</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Digital product design
            <span className="block text-primary">agency</span>
          </h2>
          <p className="section-text max-w-2xl mx-auto">
            Create live segments and target the right people for messages based on their behaviors. 
            We provide comprehensive digital solutions to transform your business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 card-hover"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              {/* <Button variant="ghost" size="sm" className="group/btn p-0 h-auto font-medium text-primary hover:text-primary">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button> */}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
        <Link to="/contact">
          <Button variant="hero" size="xl" className="group">
            Start Your Project
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;