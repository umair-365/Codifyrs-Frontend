import Navigation from "@/components/Navigation";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

const Reviews = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16">
        <ReviewsSection />
        <Footer/>
      </div>
    </div>
  );
};

export default Reviews;