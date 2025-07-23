import Navigation from "@/components/Navigation";
import TeamsSection from "@/components/TeamsSection";
import Footer from "@/components/Footer";

const Teams = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <TeamsSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Teams;