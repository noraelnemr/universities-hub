// UniversitySlider.jsx
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "../styles/UniSlide.css";

const UniversitySlider = () => {
  const [universities, setUniversities] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUniversities = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/universities");
        const data = await res.json();
        setUniversities(data);
      } catch (error) {
        console.error("Failed to fetch universities:", error);
      }
    };

    fetchUniversities();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/university/${id}`);
  };

  return (
    <div className="slider-container">
      <h2 className="title">Featured Universities</h2>
      <div className="title-line"></div>
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        navigation
        modules={[Navigation]}
        className="university-slider"
      >
        {universities.map((uni) => (
          <SwiperSlide key={uni._id} className="slide">
            <div className="university-card" onClick={() => handleCardClick(uni._id)}>
              <img src={uni.image} alt={uni.name} />
              <div className="overlay">
                <p>{uni.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default UniversitySlider;
