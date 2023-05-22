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
            <FaArrowLeft className="text-[30px]" />
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

    return (
      <Slider {...settings}>
        {slideImages.map((each, index) => (
          <img
            className="w-[100%] md:h-[95%] h-[100%] md:rounded-sm py-[15px] md:py-0"
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
      <div className="z-1 flex gap-[10px] md:py-[20px]">
        <div className="w-[100%] md:w-[70%] rounded-md md:rounded-lg overflow-hidden">
          <SlideshowImages ref={this.slideRef} />
        </div>
        <div className="w-[30%] hidden md:block">
          <div className="mb-[10px]">
            <img
              className="w-[100%] h-[164.5px] rounded-md"
              src="https://i.imgur.com/toPyown.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-[100%] h-[164.5px] rounded-md"
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
