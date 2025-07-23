import Navigation from "@/components/Navigation";
import PortfolioSection from "@/components/PortfolioSection";
import Footer from "@/components/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <PortfolioSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Portfolio;