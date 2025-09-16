import Navigation from "@/components/Navigation";
import EmailmarketSection from "@/components/portfolio_subpages/EmailmarketSection";
import Footer from "@/components/Footer";

const Emailmarket = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <EmailmarketSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Emailmarket;