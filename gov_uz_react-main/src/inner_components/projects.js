import React from "react";
import { Container } from "react-bootstrap";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Slider1 from "../assets/img/reestr_icon.png";
import Slider2 from "../assets/img/slider_img2.png";
import Slider3 from "../assets/img/decla_icon.png";

const responsive = {
    0: { items: 1 },
    767: { items: 1 },
    1100: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <a href="https://reestr.uz/" target="_blank"><img src={Slider1} />
            Elektron hukumatning axborot tizimlari va resurslari yagona reestri
        </a>
    </div>,
    <div className="item" data-value="2">
        <a href="https://my.soliq.uz/main/?lang=uz" target="_blank">
            <img src={Slider2} />
            Soliq va moliyaviy hisobotlarni elektron shaklda taqdim etish tizimi
        </a>
    </div>,
    <div className="item" data-value="3">
        <a href="https://customs.uz/oz" target="_blank">
            <img src={Slider3} />
            Deklarant portali
        </a>
    </div>,
];

const Project =() =>{
    return(
        <Container className="change_width">
            <span className="title">Amalga oshirilayotgan loyihalar</span>
            <div className="usefull_link_slider project_slider">
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

export default Project;