import { Star, Quote } from "lucide-react";

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, TechStartup Inc.",
      rating: 5,
      review: "CODIFYRS transformed our digital presence completely. Their team delivered beyond our expectations with incredible attention to detail and innovative solutions.",
      avatar: "SJ"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Marketing Director, GrowthCorp",
      rating: 5,
      review: "Working with CODIFYRS was a game-changer for our business. They delivered a stunning website that increased our conversion rates by 150%.",
      avatar: "MC"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Founder, CreativeAgency",
      rating: 5,
      review: "The team at CODIFYRS is exceptional. They understood our vision perfectly and created a brand identity that truly represents who we are.",
      avatar: "ER"
    },
    {
      id: 4,
      name: "David Thompson",
      role: "CTO, InnovateLabs",
      rating: 5,
      review: "Professional, reliable, and incredibly talented. CODIFYRS delivered our complex web application on time and exceeded all our technical requirements.",
      avatar: "DT"
    },
    {
      id: 5,
      name: "Lisa Wang",
      role: "Product Manager, NextGen Solutions",
      rating: 5,
      review: "Outstanding work! The user experience they created for our platform is intuitive and beautiful. Our users love the new design.",
      avatar: "LW"
    },
    {
      id: 6,
      name: "Robert Martinez",
      role: "Owner, Local Business Co.",
      rating: 5,
      review: "CODIFYRS helped us go digital and reach more customers than ever before. Their SEO and digital marketing strategies have been incredibly effective.",
      avatar: "RM"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-24 bg-gradient-to-br from-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about working with us.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 group"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-primary/60 group-hover:text-primary transition-colors" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                {renderStars(review.rating)}
              </div>

              {/* Review Text */}
              <p className="text-muted-foreground mb-6 leading-relaxed">
                "{review.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-semibold text-sm">
                    {review.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">
                    {review.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8 border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Join Our Happy Clients?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's create something amazing together and add your success story to our collection.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Start Your Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;