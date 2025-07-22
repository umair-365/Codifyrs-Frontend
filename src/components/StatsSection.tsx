import { useEffect, useState } from "react";

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats = [
    { number: 250, suffix: "+", label: "Projects Delivered", description: "Successfully completed projects" },
    { number: 98, suffix: "%", label: "Client Satisfaction", description: "Happy clients worldwide" },
    { number: 50, suffix: "+", label: "Team Members", description: "Expert developers & designers" },
    { number: 5, suffix: "+", label: "Years Experience", description: "In digital innovation" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const AnimatedNumber = ({ end, suffix = "", duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      const increment = end / (duration / 16);
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
          setCurrent(end);
          clearInterval(timer);
        } else {
          setCurrent(Math.floor(current));
        }
      }, 16);

      return () => clearInterval(timer);
    }, [isVisible, end, duration]);

    return (
      <span className="text-4xl md:text-5xl font-bold text-foreground">
        {Math.floor(current)}{suffix}
      </span>
    );
  };

  return (
    <section id="stats-section" className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why choose <span className="text-primary">Codifyrs</span>?
          </h2>
          <p className="section-text max-w-2xl mx-auto">
            We deliver exceptional results that speak for themselves. Here's what we've achieved together with our clients.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-background rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 card-hover">
                <AnimatedNumber end={stat.number} suffix={stat.suffix} />
                <h3 className="text-lg font-semibold mt-4 mb-2 text-foreground">
                  {stat.label}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;