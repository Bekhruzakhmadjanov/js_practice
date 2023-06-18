import React from "react";
import { Container } from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider1 from "../assets/img/ban_slider_img.png";
import Slider2 from "../assets/img/ban_slider_img2.png";

const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};
 
const items = [
    <div className="item" data-value="1">
        <a href="#" className="ban_slider_img">
            <img src={Slider1} />
        </a>
    </div>,
    <div className="item" data-value="2">
        <a href="#" className="ban_slider_img">
            <img src={Slider2} />
        </a>
    </div>,
    <div className="item" data-value="3">
        <a href="#" className="ban_slider_img">
            <img src={Slider1} />
        </a>
    </div>,
];

const Banner_slider =() =>{
    return(
        <Container className="change_width">
            <div className="usefull_link_slider banner_slider">
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    infinite="loop" autoPlay="boolen" autoPlayInterval={5000} animationDuration={4000}
                />
            </div>
        </Container>
    )
}

export default Banner_slider;