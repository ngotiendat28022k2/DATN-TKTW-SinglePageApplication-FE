import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
// import "./styles.css";
import "react-slideshow-image/dist/styles.css";

class SlideShow extends Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
    }

    render() {
        const properties = {
            duration: 1000,
            autoplay: true,
            transitionDuration: 500,
            arrows: false,
            infinite: true,
            easing: "ease",
            cssClass: "height: 70px"
        };
        const slideImages = [
            "https://i.imgur.com/FtOMdvf.png",
            "https://i.imgur.com/sZsP5zV.jpg",
            "https://i.imgur.com/Ood0kMi.png",
        ];
        return (
            <div className="md:mt-4 flex z-0">
                <div className="mr-0 w-[100%] md:w-[70%] p-2" style={{ height: "1%", paddingBottom: "10px" }}>
                    <Slide ref={this.slideRef} {...properties}>
                        {slideImages.map((each, index) => (
                            <img
                                className="md:rounded-lg md:w-[100%] w-[100%] rounded-md md:h-[95%] h-[100%]"
                                style={{ objectFit: "left"}}
                                src={each}
                                key={index}
                                alt="sample"
                            />
                        ))}

                    </Slide>

                </div>
                <div className="w-[30%] hidden md:block pt-2 pb-2">
                    <div className="mb-3">
                        <img className="w-[100%] h-[100%] rounded-md" src="https://i.imgur.com/toPyown.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-[100%] h-[100%] rounded-md" src="https://i.imgur.com/I1bSewT.jpg" alt="" />
                    </div>
                </div>
            </div>
        );
    }
}

export default SlideShow;
