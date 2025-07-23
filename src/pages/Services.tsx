import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ServicesSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Services;