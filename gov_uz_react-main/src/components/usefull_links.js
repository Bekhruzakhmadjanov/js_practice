import React from "react";
import { Container } from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider1 from "../assets/img/slider_img1.png";
import Slider2 from "../assets/img/slider_img2.png";
import Slider3 from "../assets/img/slider_img3.png";

const responsive = {
    0: { items: 1 },
    767: { items: 1 },
    1100: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <a href="https://murojaat.gov.uz/oz" target="_blank">
            <img src={Slider1} />
            Murojaatlar bilan ishlash yagona onlayn platformasi
        </a>
    </div>,
    <div className="item" data-value="2">
        <a href="https://my.soliq.uz/" target="_blank">
            <img src={Slider2} />
            Elektron soliq<br></br> xizmatlari
        </a>
    </div>,
    <div className="item" data-value="3">
        <a href="https://license.gov.uz/" target="_blank">
            <img src={Slider3} />
            Elektron litsenziyalash tizimi
        </a>
    </div>,
];

const Usefull_links =() =>{
    return(
        <Container className="change_width">
            <div className="usefull_link_slider">
                <AliceCarousel
                    items={items}
                    responsive={responsive}
                    controlsStrategy="alternate"
                    infinite="loop" autoPlay="boolen" autoPlayInterval={4000} animationDuration={2000}
                />
            </div>
        </Container>
    )
}

export default Usefull_links;