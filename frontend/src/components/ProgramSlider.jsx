import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProgramCard from "./ProgramCard";
import "../styles/MajorPage.css";

const ProgramCarousel = ({ programs, uniLink }) => {
  return (
    <div className="slider-cont">
      <h2 className="title">Other Programs</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="program-slider"
      >
        {programs.map((program) => (
          <SwiperSlide key={program._id} className="slide">
            <ProgramCard
              title={program.name}
              duration={program.duration}
              image={program.photo}
              learnMoreLink={`/program/${program._id}`} 
              applyNowLink={uniLink}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProgramCarousel;
