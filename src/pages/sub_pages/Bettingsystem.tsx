import Navigation from "@/components/Navigation";
import BettingsystemSection from "@/components/portfolio_subpages/BettingsystemSection";
import Footer from "@/components/Footer";

const Bettingsystem = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <BettingsystemSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Bettingsystem;