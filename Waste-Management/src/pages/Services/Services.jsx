import React from 'react';
import './ServicesPage.css';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';


const ServicesPage = () => {
  const services = [
    {
      title: "Shred and Recycle",
      description: "On-site shredding services for banks, co-operatives, and corporate clients.",
      image: "../../public/assets/shredding.png",
      benefits: ["Secure document destruction", "Environmentally friendly disposal", "Compliance with data protection regulations"]
    },
    {
      title: "Waste Pick-Up",
      description: "Simplify your waste management with our convenient pick-up service. We'll come to your doorstep and collect your recyclables, compostables, and other waste, ensuring it's properly processed and diverted from landfills.",
      image: "../../public/assets/pickup.jpg",
      benefits: ["Convenient door-to-door service", "Reduces landfill waste", "Promotes proper waste segregation"]
    },
    {
      title: "E-waste Nepal",
      description: "Our e-waste recycling service collects and recycles electronic waste such as computers, televisions, and other electronic devices, ensuring that hazardous materials are properly disposed of.",
      image: "../../public/assets/ewaste.jpg",
      benefits: ["Prevents toxic materials from entering landfills", "Recovers valuable metals and materials", "Reduces environmental impact of electronics"]
    },
    {
      title: "Compost Collection",
      description: "Our compost collection service collects organic waste and processes it into nutrient-rich compost, which can be used in gardening and agriculture to improve soil health and reduce the need for chemical fertilizers.",
      image: "../../public/assets/compost.jpg",
      benefits: ["Reduces methane emissions from landfills", "Creates valuable soil amendment", "Supports local agriculture"]
    },
    {
      title: "Construction and Demolition Waste",
      description: "Our construction and demolition waste management service collects and processes construction and demolition waste, ensuring that materials are properly sorted and recycled whenever possible.",
      image: "../../public/assets/demolition.jpg",
      benefits: ["Reduces landfill waste", "Recovers valuable materials for reuse", "Supports sustainable construction practices"]
    },
  ];

  return (
    <>
      <Header/>
      <div className="services-page">
        <h1>Our Services</h1>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <img src={service.image} alt={service.title} />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              <h3>Benefits:</h3>
              <ul>
                {service.benefits.map((benefit, benefitIndex) => (
                  <li key={benefitIndex}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServicesPage;