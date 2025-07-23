import React from "react";
import { Button } from "@/components/ui/button";
import { Zap, Mail, Phone, MapPin, Github, Twitter, Linkedin } from "lucide-react";
import codifyrsLogo from "@/assets/C icon.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Web Development</a>,
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Scraping</a>,
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Selenium Automation</a>,
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Python Scripting</a>,
        <a href="#services" className="text-muted-foreground hover:text-primary transition-colors text-sm">Product Launch</a>
      ]
    },
    {
      title: "Company",
      links: [
        { name: "Services", to: "/services" },
        { name: "Portfolio", to: "/portfolio" },
        { name: "Reviews", to: "/reviews" },
        { name: "Contact Us", to: "/contact" },
        { name: "Our Team", to: "/team" },
        { name: "Careers", to: "/careers" }
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "Help Center",
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "Sitemap"
      ]
    }
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <img className="w-8 h-8 flex items-center justify-center" src={codifyrsLogo} alt="codifyrsLogo" />
              <span className="text-xl font-bold text-foreground">CODIFYRS</span>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering digital innovation through dedicated remote teams.
              We design and build exceptional digital products that transform businesses.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary" />
                <span>muhammadumair@codifyrs.com</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>(+92) 3204664643 </span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Lahore, Punjab Pakistan</span>
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-foreground mb-6">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    {typeof link === "string" ? (
                  <a
                    href="#"
                    className="text-muted-foreground text-sm hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                ) : React.isValidElement(link) ? (
                  link
                ) : (
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                )}

                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay updated with our latest insights</h3>
            <p className="text-muted-foreground mb-6">
              Get the latest news, articles, and resources delivered to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <Button variant="hero" size="lg">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-muted-foreground mb-4 md:mb-0">
              © 2025 Codifyrs. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
