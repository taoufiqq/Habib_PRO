// SlideVideo.js
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const slideContents = [
    <div key={1}>
      <img
        src="https://i3.ytimg.com/vi/sGvh-WJjK60/hqdefault.jpg"
        alt="Slide 1"
      />
    </div>,
    <div key={2}>
      <img
        src="https://i3.ytimg.com/vi/sGvh-WJjK60/hqdefault.jpg"
        alt="Slide 2"
      />
    </div>,
    <div key={3}>
      <img
        src="https://i3.ytimg.com/vi/sGvh-WJjK60/hqdefault.jpg"
        alt="Slide 3"
      />
    </div>,
    // Add more slides as needed
  ];

  return (
    <Slider {...settings}>
      {slideContents.map((slide, index) => (
        <div key={index}>{slide}</div>
      ))}
    </Slider>
  );
};

export default Carousel;
