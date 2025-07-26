
import { Star, Quote } from "lucide-react";
import Solomoon from "../assets/Solomoon image.jpg";
import Yevgen from "../assets/yevgen image.jpg";
import  Fink from "../assets/Fink.jpg"
import Carlos from "../assets/Carlos.jpg"

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: "Solomon Amos",
      role: "Founder, HomePortfolio.",
      rating: 5,
      review:
        "Codifyrs demonstrated a deep understanding of the intricate challenges involved in managing and automating data flows. Their team was instrumental in designing and implementing a robust and scalable data pipeline architecture that significantly enhanced HomePortfolio's data processing efficiency and reliability. Their ability to troubleshoot and resolve complex data injection issues was exceptional, saving our team countless hours. The contributions from Codfyrs were critical to the success of our projects, and I’m confident they will be a tremendous asset to any organization.",
      avatar: Solomoon,
    },
    {
      id: 2,
      name: "Yevgen Sholudchenko ",
      role: "CEO, Data-Hub Sholudchenko FlexKapG",
      rating: 5,
      review:
        "Working with Codifyrs has been a great experience — tasks are completed quickly and with high quality. The team consistently brings valuable ideas, especially on how to reduce costs on proxies and other tools. They also supported us in building a robust pipeline for scheduling scrapers and monitoring performance. If you're looking to build a scalable and efficient crawling infrastructure, I can highly recommend Codfyrs.",
      avatar: Yevgen,
    },
    {
      id: 3,
      name: "Christian Fink",
      role: "Founder, CEO, cmf Gmbh",
      rating: 5,
      review: "Working with Codifyrs has been an absolute pleasure. Their expertise in Python is truly impressive—they deliver clean, efficient, and well-documented code that consistently exceeds expectations. One of Codifyrs’ standout strengths is their ability to design and implement powerful web scraping solutions. They handle complex data extraction tasks with ease, even from dynamic and challenging sources, making them an invaluable partner on any data-driven project. What truly sets Codifyrs apart, however, is their deep understanding of the sports domain. Whether it's analyzing performance data, building sports models, or working with real-time data feeds, their insight into the sports industry adds an extra layer of intelligence and context to their work. This rare combination of technical expertise and domain knowledge is incredibly valuable. I highly recommend Codifyrs for any project requiring advanced Python development, data scraping, or sports-related analytics. They are professional, reliable, and always go the extra mile to ensure success.",
      avatar: Fink,
    },
    {
      id: 4,
      name: "Carlos Gutierrez",
      role: "President, Beast Communications LLC",
      rating: 5,
      review: "This testimonal confirms the services provided by Codifyrs. I have worked with their team for close to two years, and they have consistently proven to be a dependable and skilled partner. Communication has always been clear and proactive. If there were any delays, Codifyrs alerted me immediately. When scripts encountered issues—often due to external website changes—they were quick to adapt, update the code, and implement reliable workarounds, ensuring minimal disruption to operations. Beyond their technical capabilities, Codifyrs brings a strong sense of ownership to every task. They take the time to understand project goals, offer suggestions for improvement, and deliver scalable, efficient solutions that go beyond expectations. Their reliability, expertise in automation and data scraping, and commitment to quality make Codifyrs a trusted partner. I highly recommend them for any data-driven or backend development project where precision, speed, and accountability matter.",
      avatar: Carlos
    },
    // {
    //   id: 5,
    //   name: "Lisa Wang",
    //   role: "Product Manager, NextGen Solutions",
    //   rating: 5,
    //   review: "Outstanding work! The user experience they created for our platform is intuitive and beautiful. Our users love the new design.",
    //   avatar: "LW"
    // },
    // {
    //   id: 6,
    //   name: "Robert Martinez",
    //   role: "Owner, Local Business Co.",
    //   rating: 5,
    //   review: "CODIFYRS helped us go digital and reach more customers than ever before. Their SEO and digital marketing strategies have been incredibly effective.",
    //   avatar: "RM"
    // }
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
    <section id="reviews" className="py-20 bg-gradient-to-br from-background to-muted/30">
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
              className="bg-card rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-border hover:border-primary/20 group flex flex-col"
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
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
                "{review.review}"
              </p>

              {/* Client Info (Footer) */}
              <div className="flex items-center pt-6 mt-auto border-t border-border">
                {typeof review.avatar === "string" && review.avatar.includes(".jpg") ? (
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border border-border"
                  />
                ) : (
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                    <span className="text-primary font-semibold text-sm">
                      {review.avatar}
                    </span>
                  </div>
                )}
                <div>
                  <h4 className="font-semibold text-foreground">{review.name}</h4>
                  <p className="text-sm text-muted-foreground">{review.role}</p>
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
