// src/components/CardSlider.jsx
import React, { useRef, useEffect, useState } from "react";
import "../Styles/CardSlider.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CardSlider = ({ title, subtitle, items }) => {
  const sliderRef = useRef(null);
  const [direction, setDirection] = useState(1);

  const scrollSlider = (step) => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: step, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;

        if (scrollLeft + clientWidth >= scrollWidth - 10) {
          setDirection(-1);
        } else if (scrollLeft <= 10) {
          setDirection(1);
        }

        scrollSlider(350 * direction);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [direction]);

  return (
    <div className="card-slider-container">
      <h2 className="card-slider-title">{title}</h2>
      {subtitle && <p className="card-slider-subtitle">{subtitle}</p>}

      <div className="card-slider-wrapper" ref={sliderRef}>
        {items.map((item, index) => (
          <div key={index} className="card">
            <div className="card-icon">{item.icon}</div>
            <h3 className="card-title">{item.title}</h3>
            <p className="card-description">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <div className="nav-buttons-container">
        <button className="nav-button" onClick={() => scrollSlider(-350)}>
          <ChevronLeft size={26} />
        </button>
        <button className="nav-button" onClick={() => scrollSlider(350)}>
          <ChevronRight size={26} />
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
