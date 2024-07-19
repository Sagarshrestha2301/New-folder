import React, { useState, useEffect } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "./Testimonials.css";

const Testimonial = ({ name, role, image, rating, text }) => (
  <div className="testimonial-card">
    <div className="star-rating">
      {[...Array(5)].map((_, i) => (
        <FaStar key={i} className={i < rating ? "star-filled" : "star-empty"} />
      ))}
    </div>
    <p className="testimonial-text">{text}</p>
    <img src={image} alt={name} className="testimonial-image" />
    <h3 className="testimonial-name">{name}</h3>
    <p className="testimonial-role">{role}</p>
  </div>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonials = [
    {
      name: "Anmol KC",
      role: "Environmental Activist",
      image: "../../public/assets/person4.png",
      rating: 5,
      text: "Wastix has revolutionized our community's approach to recycling. Their innovative solutions have made it easier than ever for residents to properly sort and recycle their waste.",
    },
    {
      name: "Binod Chaudhary",
      role: "City Planner",
      image: "../../public/assets/person5.png",
      rating: 4,
      text: "Implementing Wastix's recycling program in our city has led to a 40% increase in recycling rates. Their user-friendly app and educational resources have really engaged our citizens.",
    },
    {
      name: "Ram Bahadhur Shrestha",
      role: "School Principal",
      image: "../../public/assets/person2.png",
      rating: 5,
      text: "Wastix's school recycling program has been a game-changer. Our students are now passionate about recycling and have even initiated their own eco-projects.",
    },
    {
      name: "Sarah Johnson",
      role: "Sustainability Consultant",
      image: "../../public/assets/person1.png",
      rating: 5,
      text: "Wastix's data-driven approach to waste management has provided invaluable insights for our clients. Their platform is transforming how we think about and handle waste.",
    },
    {
      name: "Michael Chen",
      role: "Business Owner",
      image: "../../public/assets/person2.png",
      rating: 4,
      text: "As a small business owner, I was amazed at how easy Wastix made it for us to implement a comprehensive recycling program. It's been great for our image and our bottom line.",
    },
  ];

  const nextTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % (testimonials.length - 2)
      );
    }
  };

  const prevTestimonial = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(
        (prevIndex) =>
          (prevIndex - 1 + (testimonials.length - 2)) %
          (testimonials.length - 2)
      );
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match this with your CSS transition time

    return () => clearTimeout(timer);
  }, [currentIndex]);

  useEffect(() => {
    const autoSlideTimer = setInterval(() => {
      nextTestimonial();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(autoSlideTimer);
  }, [currentIndex]);

  return (
    <section className="testimonials">
      <h2 className="testimonials-title">Testimonials</h2>
      <hr />
      <br />
      <h3 className="testimonials-subtitle">
        What our clients say about Wastix
      </h3>

      <div className="testimonials-carousel">
        <div
          className="testimonials-slider"
          style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-slide">
              <Testimonial {...testimonial} />
            </div>
          ))}
        </div>
      </div>

      <div className="testimonials-nav">
        <button onClick={prevTestimonial} className="nav-button">
          <FaChevronLeft className="nav-icon" />
        </button>
        <button onClick={nextTestimonial} className="nav-button">
          <FaChevronRight className="nav-icon" />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
