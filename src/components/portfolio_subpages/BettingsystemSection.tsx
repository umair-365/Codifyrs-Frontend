import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import portfolio1 from "@/assets/portfolio_assets/betting.png";
import portfolio2 from "@/assets/portfolio_assets/betting1.png";
import portfolio3 from "@/assets/portfolio_assets/betting2.png";
import portfolio4 from "@/assets/portfolio_assets/betting3.png";
import portfolio5 from "@/assets/portfolio_assets/betting4.png";

const BettingsystemSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Single project data
  const project = {
    id: 3,
    name: "Betting sites scrapping system",
    description:
      "Our system is built to aggregate and centralize sports data from leading betting and score platforms including Oddest, Unibet, Sportsbet, Tipico, Draftking, Bovada, Gtbets, Mybookie, Fanduel, Betfair, Bewin, Flashscore, Sofascore, Oddsportal, Sbobet, Veikkaus, and Nubet. The data is collected through a robust scraping mechanism, standardized to ensure consistency, and stored in MongoDB for reliable access. To enhance performance and scalability, we use Redis for caching, SNS & SQS for event-driven messaging and task management, Scrapyd for distributed crawling, and CloudWatch for monitoring. This ensures a seamless, fault-tolerant pipeline that delivers clean and unified match data from multiple sources into a single document, avoiding any conflicts or duplication.",
    images: [
      portfolio1,
      portfolio2,
      portfolio3,
      portfolio4,
      portfolio5
    ],
    techStack: ["Redis", "MongoDB", "SNS", "SQS", "Scrapyd", "CloudWatch", "Scrapy", "Porxies", "GIT"],
  };

  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) =>
          prev === project.images.length - 1 ? 0 : prev + 1
        );
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [project.images.length, isAutoPlay]);

  const nextImage = () => {
    setCurrentImageIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-4">
            Featured Project
          </h1>
          <p className="text-muted-foreground text-xl">
            Empowering the Innovations
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Slider Section */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl border border-border p-1">
              <div className="relative bg-muted rounded-xl overflow-hidden" style={{ minHeight: '400px' }}>
                <div className="w-full h-full relative flex items-center justify-center">
                  <img
                    src={project.images[currentImageIndex]}
                    alt={`${project.name} - Image ${currentImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain transition-all duration-700 ease-in-out rounded-xl"
                    style={{ maxHeight: '500px', width: 'auto', height: '400px' }}
                  />
                </div>

                {/* Image Navigation Arrows */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-all duration-300 text-white z-10"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-all duration-300 text-white z-10"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Auto-play control */}
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className="absolute top-4 right-4 p-3 rounded-full bg-black/40 hover:bg-black/60 transition-all duration-300 text-white z-10"
                >
                  {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
                </button>

                {/* Image indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                  {project.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentImageIndex
                          ? "bg-white scale-125"
                          : "bg-white/50 hover:bg-white/75"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Project Details Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 leading-tight text-primary">
                {project.name}
              </h2>
              <div className="w-24 h-1 bg-foreground rounded-full" />
            </div>

            <p className="text-muted-foreground text-lg leading-relaxed">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-background text-foreground rounded-full border border-border hover:border-primary/40 transition-all duration-300 cursor-default font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BettingsystemSection;
