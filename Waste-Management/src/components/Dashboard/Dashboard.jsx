import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import WhyWastix from "../../pages/WhyWastix";
import HowItWorks from "../../pages/HowItWorks";
import WhatWeBuy from "../../pages/WhatWeBuy";
import Testimonials from "../../components/testimonials";
import Footer from "../../components/Layout/Footer";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/RecyclingForm");
  };

  return (
    <>
      <div className="dashboard">
        <div className="frontPage">
          <Header />
          <div className="welcome-content">
            <h1 className="text-4xl font-bold text-white mb-4 animate-fadeIn">
              Welcome to Wastix
            </h1>
            <p className="text-xl text-white mb-8 animate-slideUp">
              Revolutionizing waste management for a cleaner, greener future!
            </p>
            <button
              className="bg-[#00a86b] text-white font-bold py-3 px-6 rounded-full hover:bg-[#008c5a] transition-colors duration-300 animate-scaleIn"
              onClick={handleGetStarted}
            >
              Get Started Now
            </button>
          </div>
        </div>
      </div>
          <WhyWastix />
          <HowItWorks />
          <WhatWeBuy />
          <Testimonials />
          <Footer />
    </>
  );
};

export default Dashboard;
