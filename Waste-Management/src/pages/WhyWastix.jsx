import React, { useState, useEffect } from "react";
import "./WhyWastix.css";

const WhyWastix = () => {
  useEffect(() => {
    function animateOnScroll() {
      function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      const elements = document.querySelectorAll(
        ".why-khaalisisi, .header, h1, .content, .illustration, .text-content, .stat"
      );

      elements.forEach((element) => {
        if (isInViewport(element) && !element.classList.contains("animated")) {
          if (element.classList.contains("why-khaalisisi")) {
            element.classList.add("animate-fadeIn");
          } else if (element.classList.contains("illustration")) {
            element.classList.add("animate-fadeIn", "animate-pulse");
          } else {
            element.classList.add("animate-slideIn");
          }
          element.classList.add("animated");
        }
      });
    }

    window.addEventListener("scroll", animateOnScroll);
    animateOnScroll(); // Initial check

    return () => window.removeEventListener("scroll", animateOnScroll);
  }, []);

  return (
    <>
      <div className="why-wastix">
        <div className="header">
          <h1>Why Choose US?</h1>
        </div>
        <br />
        <hr />

        <div className="content">
          <div className="illustration">
            <img
              src="../../public/assets/why.png"
              alt=" Character"
            />
          </div>

          <div className="text-content">
            <p>
              The current waste situation in Nepal is frustrating. Despite the
              huge number of waste entrepreneurs, tons of recyclable waste still
              ends up in the Landfill each year. Our mission is to gap this
              bridge between waste entrepreneurs and waste sellers. Help us help
              our environment and join our revolution by selling your
              recyclables!
            </p>

            <div className="statistics">
              <div className="stat">
                <h2>13,000</h2>
                <p>KSFs inside Kathmandu Valley.</p>
              </div>
              <div className="stat">
                <h2>70,000</h2>
                <p>Tons of Waste Produced daily inside Kathmandu Valley.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhyWastix;