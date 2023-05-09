import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";



const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", left: "20px", zIndex: "1" }}
        onClick={onClick}
      >
        <FaArrowLeft className="text-[30px]"/>
      </div>
    );
  };

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", right: "20px", zIndex: "1" }}
      onClick={onClick}
    >
      <FaArrowRight />
    </div>
  );
};


class SlideshowImages extends Component {
    render() {
      const slideImages = [
        "https://i.imgur.com/FtOMdvf.png",
        "https://i.imgur.com/sZsP5zV.jpg",
        "https://i.imgur.com/Ood0kMi.png",
      ];
  
      const settings = {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow className="slick-prev" />,
        nextArrow: <NextArrow className="slick-next" />,
        autoplay: true,
        autoplaySpeed: 5000,
      };

    return (
      <Slider {...settings}>
        {slideImages.map((each, index) => (
          <img
            className="w-[100%] md:h-[95%] h-[100%] md:rounded-sm"
            style={{ objectFit: "left" }}
            src={each}
            key={index}
            alt="sample"
          />
        ))}
      </Slider>
    );
  }
}

class SlideShow extends Component {
  constructor() {
    super();
    this.slideRef = React.createRef();
  }

  render() {
    return (
      <div className="z-1 md:mt-4 flex">
        <div className="w-[100%] md:w-[70%] p-2 rounded-md md:rounded-lg overflow-hidden">
          <SlideshowImages ref={this.slideRef} />
        </div>
        <div className="w-[30%] hidden md:block pt-2 pb-2">
          <div className="mb-3">
            <img
              className="w-[100%] h-[100%] rounded-md"
              src="https://i.imgur.com/toPyown.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[100%] h-[100%] rounded-md"
              src="https://i.imgur.com/I1bSewT.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default SlideShow;
