import Navigation from "@/components/Navigation";
import BetalyzerSection from "@/components/portfolio_subpages/BetalyzarSection";
import Footer from "@/components/Footer";

const Betalyzer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <BetalyzerSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Betalyzer;