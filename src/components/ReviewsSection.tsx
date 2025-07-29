import { useState } from "react";
import { Star, Quote, X } from "lucide-react";
import Solomoon from "../assets/Solomoon image.jpg";
import Yevgen from "../assets/yevgen image.jpg";
import Fink from "../assets/Fink.jpg";
import Carlos from "../assets/Carlos.jpg";

const ReviewsSection = () => {
  const [modalReview, setModalReview] = useState<null | {
    name: string;
    review: string;
  }>(null);

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
      review:
        "Working with Codifyrs has been an absolute pleasure. Their expertise in Python is truly impressive—they deliver clean, efficient, and well-documented code that consistently exceeds expectations. One of Codifyrs’ standout strengths is their ability to design and implement powerful web scraping solutions. They handle complex data extraction tasks with ease, even from dynamic and challenging sources, making them an invaluable partner on any data-driven project. What truly sets Codifyrs apart, however, is their deep understanding of the sports domain. Whether it's analyzing performance data, building sports models, or working with real-time data feeds, their insight into the sports industry adds an extra layer of intelligence and context to their work. This rare combination of technical expertise and domain knowledge is incredibly valuable. I highly recommend Codifyrs for any project requiring advanced Python development, data scraping, or sports-related analytics. They are professional, reliable, and always go the extra mile to ensure success.",
      avatar: Fink,
    },
    {
      id: 4,
      name: "Carlos Gutierrez",
      role: "President, Beast Communications LLC",
      rating: 5,
      review:
        "This testimonal confirms the services provided by Codifyrs. I have worked with their team for close to two years, and they have consistently proven to be a dependable and skilled partner. Communication has always been clear and proactive. If there were any delays, Codifyrs alerted me immediately. When scripts encountered issues—often due to external website changes—they were quick to adapt, update the code, and implement reliable workarounds, ensuring minimal disruption to operations. Beyond their technical capabilities, Codifyrs brings a strong sense of ownership to every task. They take the time to understand project goals, offer suggestions for improvement, and deliver scalable, efficient solutions that go beyond expectations. Their reliability, expertise in automation and data scraping, and commitment to quality make Codifyrs a trusted partner. I highly recommend them for any data-driven or backend development project where precision, speed, and accountability matter.",
      avatar: Carlos,
    },
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
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our amazing clients have to say about working with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          {reviews.map((review) => {
            const words = review.review.split(" ");
            const showReadMore = words.length > 80;
            const truncatedText = words.slice(0, 80).join(" ");

            return (
              <div
                key={review.id}
                className="bg-card rounded-2xl p-4 sm:p-6 shadow-lg border border-border flex flex-col justify-between transition-all duration-300 overflow-hidden min-h-[400px] sm:min-h-[500px] h-[420px] sm:h-[580px]"
              >
                <div>
                  <div className="mb-4">
                    <Quote className="w-7 h-7 text-primary/60" />
                  </div>
                  <div className="flex items-center mb-3">{renderStars(review.rating)}</div>
                  <p
                    className="leading-relaxed text-muted-foreground text-xs sm:text-base mb-3 sm:mb-4"
                    style={{ wordBreak: "break-word" }}
                  >
                    "{truncatedText}..."
                    {showReadMore && (
                      <button
                        type="button"
                        onClick={() => setModalReview({ name: review.name, review: review.review })}
                        className="text-primary font-medium text-xs sm:text-sm hover:underline ml-1 inline align-middle"
                      >
                        Read More
                      </button>
                    )}
                  </p>
                </div>

                <div className="flex items-center pt-4 border-t border-border mt-2">
                  <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 border border-border"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground text-sm sm:text-base">{review.name}</h4>
                    <p className="text-xs sm:text-sm text-muted-foreground">{review.role}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {modalReview && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 px-4 py-12 flex justify-center items-center">
          <div className="bg-white dark:bg-card w-full max-w-2xl p-6 rounded-xl relative text-sm sm:text-base max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setModalReview(null)}
            >
              <X className="w-6 h-6" />
            </button>

            <p className="pt-10 text-muted-foreground leading-relaxed whitespace-pre-wrap">
              {modalReview.review}
            </p>

            <div className="flex items-center pt-6 mt-6 border-t border-border">
              <img
                src={
                  reviews.find((r) => r.name === modalReview.name)?.avatar || ""
                }
                alt={modalReview.name}
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 border border-border"
              />
              <div>
                <h4 className="font-semibold text-foreground text-sm sm:text-base">{modalReview.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  {reviews.find((r) => r.name === modalReview.name)?.role || "Client"}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ReviewsSection;
