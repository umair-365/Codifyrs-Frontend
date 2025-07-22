import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const TeamsSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "CEO & Founder",
      bio: "Visionary leader with 10+ years in digital transformation. Former VP at leading tech companies.",
      image: "https://images.unsplash.com/photo-1494790108755-2616c6aebaa3?w=400&h=400&fit=crop&crop=face",
      skills: ["Strategy", "Leadership", "Product Vision"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "sarah@flicken.io"
      }
    },
    {
      id: 2,
      name: "Alex Rodriguez",
      role: "Lead Developer",
      bio: "Full-stack engineer passionate about creating scalable solutions. Expert in modern web technologies.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      skills: ["React", "Node.js", "AWS"],
      social: {
        github: "#",
        linkedin: "#",
        email: "alex@flicken.io"
      }
    },
    {
      id: 3,
      name: "Maya Patel",
      role: "Head of Design",
      bio: "Creative director with expertise in user experience and visual design. Award-winning designer.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      skills: ["UI/UX", "Figma", "Design Systems"],
      social: {
        linkedin: "#",
        twitter: "#",
        email: "maya@flicken.io"
      }
    },
    {
      id: 4,
      name: "David Kim",
      role: "Tech Lead",
      bio: "Architecture specialist focused on building robust, scalable systems. Open source contributor.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      skills: ["System Architecture", "DevOps", "Security"],
      social: {
        github: "#",
        linkedin: "#",
        email: "david@flicken.io"
      }
    },
    {
      id: 5,
      name: "Emily Johnson",
      role: "Project Manager",
      bio: "Agile expert ensuring seamless project delivery. Certified Scrum Master with proven track record.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
      skills: ["Agile", "Scrum", "Team Leadership"],
      social: {
        linkedin: "#",
        email: "emily@flicken.io"
      }
    },
    {
      id: 6,
      name: "Marcus Thompson",
      role: "Mobile Developer",
      bio: "React Native specialist with expertise in iOS and Android development. Performance optimization guru.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
      skills: ["React Native", "iOS", "Android"],
      social: {
        github: "#",
        linkedin: "#",
        email: "marcus@flicken.io"
      }
    }
  ];

  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'github':
        return Github;
      case 'linkedin':
        return Linkedin;
      case 'twitter':
        return Twitter;
      case 'email':
        return Mail;
      default:
        return Mail;
    }
  };

  return (
    <section id="teams" className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>Our Team</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Meet the
            <span className="block text-primary">Experts</span>
          </h2>
          <p className="section-text max-w-2xl mx-auto">
            Our diverse team of passionate professionals brings together years of experience 
            in design, development, and digital strategy to deliver exceptional results.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 card-hover text-center"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-primary/10 group-hover:border-primary/30 transition-colors">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
              </div>

              {/* Member Info */}
              <h3 className="text-xl font-semibold mb-2 text-foreground group-hover:text-primary transition-colors">
                {member.name}
              </h3>
              
              <p className="text-primary font-medium text-sm mb-4">
                {member.role}
              </p>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {member.bio}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex justify-center space-x-3">
                {Object.entries(member.social).map(([platform, url]) => {
                  const IconComponent = getSocialIcon(platform);
                  return (
                    <a
                      key={platform}
                      href={url}
                      className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center group/icon"
                    >
                      <IconComponent className="w-4 h-4 group-hover/icon:scale-110 transition-transform" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">20+</div>
            <div className="text-sm text-muted-foreground">Team Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-sm text-muted-foreground">Countries</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-sm text-muted-foreground">Time Zones</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Coverage</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;