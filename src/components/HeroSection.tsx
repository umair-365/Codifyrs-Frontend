import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import herobanner1 from "@/assets/banner1.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-primary/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-1/3 w-24 h-24 bg-primary/4 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Empowering Digital Innovation</span>
            </div>

            <h1 className="hero-text text-black dark:text-white">
              Empowering the
              <span className="block text-primary">Innovations</span>
            </h1>

            <p className="section-text max-w-lg">
              Codifyrs provides dedicated remote teams that work closely with you to design and build your idea. 
              Transform your vision into reality with our expert development and design services.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/contact">
                <Button variant="hero" size="xl" className="group">
                  Get Started Today
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>

              <Link to="/portfolio">
                <Button variant="outline" size="xl">
                  View Our Work
                </Button>
              </Link>
            </div>  

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-border">
              <div>
                <div className="text-2xl font-bold text-foreground">100+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">50+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right Column - Hero Image with Cards */}
        <div className="relative pt-36"> {/* Increased padding-top from pt-24 to pt-36 */}
  {/* Floating Cards at top-right */}
  {/* <div className="absolute top-2 right-0 flex space-x-4 z-20"> 
    <div className="bg-background rounded-xl p-4 shadow-lg border border-border card-hover">
      <div className="flex items-center space-x-3">
        <div className="w-5 h-5 bg-primary/15 rounded-lg flex items-center justify-center">
          <span className="text-primary font-bold">99%</span>
        </div>
        <div>
          <div className="text-sm font-semibold">Success Rate</div>
          <div className="text-xs text-muted-foreground">Client Satisfaction</div>
        </div>
      </div>
    </div>

    <div className="bg-background rounded-xl p-4 shadow-lg border border-border card-hover">
      <div className="flex items-center space-x-3">
        <div className="w-5 h-5 bg-primary/15 rounded-lg flex items-center justify-center">
          <span className="text-primary font-bold">24/7</span>
        </div>
        <div>
          <div className="text-sm font-semibold">Support</div>
          <div className="text-xs text-muted-foreground">Always Available</div>
        </div>
      </div>
    </div>
  </div> */}

  {/* Banner Image */}
  <img
    src={herobanner1}
    alt="Digital Innovation"
    className="relative z-10 w-[85%] mx-auto mb-10 rounded-3xl shadow-2xl transform hover:scale-105 transition-transform duration-700"
  />
</div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
