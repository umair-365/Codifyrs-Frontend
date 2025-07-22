import Navigation from "@/components/Navigation";
import TeamsSection from "@/components/TeamsSection";

const Teams = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <TeamsSection />
      </div>
    </div>
  );
};

export default Teams;