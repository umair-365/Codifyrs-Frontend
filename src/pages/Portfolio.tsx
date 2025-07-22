import Navigation from "@/components/Navigation";
import PortfolioSection from "@/components/PortfolioSection";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <PortfolioSection />
      </div>
    </div>
  );
};

export default Portfolio;