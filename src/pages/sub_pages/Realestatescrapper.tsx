import Navigation from "@/components/Navigation";
import RealestateSection from "@/components/portfolio_subpages/RealestateSection";
import Footer from "@/components/Footer";

const Realestatescrapper = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <RealestateSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Realestatescrapper;