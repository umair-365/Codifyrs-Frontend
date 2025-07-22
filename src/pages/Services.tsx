import Navigation from "@/components/Navigation";
import ServicesSection from "@/components/ServicesSection";

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ServicesSection />
      </div>
    </div>
  );
};

export default Services;