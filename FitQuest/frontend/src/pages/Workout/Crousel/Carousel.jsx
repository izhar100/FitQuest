// import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousal.css";

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="CarouselContainer">
      <Slider {...settings} className="slider">
        <div className="slide">
          <img
            src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?cs=srgb&dl=pexels-leon-ardho-1552242.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://hips.hearstapps.com/hmg-prod/images/people-running-on-a-treadmill-in-health-club-royalty-free-image-478859478-1534780309.jpg?resize=1200:*"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://wallpapers.com/images/hd/gym-background-dr08hyjw70y464su.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://wallpaperboat.com/wp-content/uploads/2020/03/fitness-10.jpg"
            alt=""
          />
        </div>
      </Slider>

      <button className="workout-carousal-btn" style={{ backgroundColor: "#f3ffd4", padding: "10px 20px" }}>
        Get Started
      </button>
      <button className="workout-carousal-btn"
        style={{
          backgroundColor: "#292626",
          color: "#f3ffd4",
          padding: "10px 20px",
          left: "19%",
        }}
      >
        Preview
      </button>
    </div>
  );
};

export default Carousel;
