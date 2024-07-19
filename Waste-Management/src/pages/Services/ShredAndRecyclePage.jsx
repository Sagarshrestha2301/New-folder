import React from 'react';
import './ShredAndRecyclePage.css';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';

const ShredAndRecyclePage = () => {
  const serviceDetails = {
    title: "Shred and Recycle",
    description: "On-site shredding services for banks, co-operatives, and corporate clients.",
    image: "../../public/assets/shredding.png",
    benefits: [
      "Secure document destruction",
      "Environmentally friendly disposal",
      "Compliance with data protection regulations"
    ]
  };

  return (
    <>
      <Header />
      <div className="shred-and-recycle-page">
        <div className="service-content">
          <h1>{serviceDetails.title}</h1>
          <div className="service-image-container">
            <img src={serviceDetails.image} alt={serviceDetails.title} className="service-image" />
          </div>
          <p className="service-description">{serviceDetails.description}</p>
          <div className="benefits-section">
            <h2>Benefits</h2>
            <ul className="benefits-list">
              {serviceDetails.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className="cta-section">
            <h2>Ready to secure your sensitive documents?</h2>
            <button className="cta-button">Schedule a Shredding Service</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ShredAndRecyclePage;