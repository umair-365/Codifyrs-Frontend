import Navigation from "@/components/Navigation";
import ReviewsSection from "@/components/ReviewsSection";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ReviewsSection />
      </div>
    </div>
  );
};

export default Reviews;