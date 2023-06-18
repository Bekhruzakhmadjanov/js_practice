import React from "react";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Form, FormControl } from "react-bootstrap";
import Slider_1 from "../assets/img/image2.jpg";
import Slider_3 from "../assets/img/image4.jpg";
import Slider_2 from "../assets/img/samarqand.jpeg";
import icon_search from "../assets/img/search_icon.png";
import { Link } from "react-router-dom";

const items = [
    <div className="item" data-value="1">
        <img src={Slider_1} />
        <div  className="description">
            <span className="slider_title">
                O'zbekiston<br></br>
                <Link to="/info_uzb/pages7">Umumiy ma'lumot</Link>
            </span>
            <ul className="slider_list">
                <li><a href="#">Davlat hokimiyati</a></li>
                <li><a href="#">Davlat ramzlari</a></li>
                <li><a href="#">Geografik joylashuvi</a></li>
                <li><a href="#">Hudud</a></li>
                <li><a href="#">Aholi</a></li>
                <li><a href="#">Milliy bayramlar</a></li>
                <li><a href="#">Foydali havolalar</a></li>
                <li><a href="#">Ob-havo</a></li>
            </ul>
        </div>
    </div>,
    <div className="item" data-value="2">
        <img src={Slider_2} />
        <div className="description">
            <span className="slider_title">
                O'zbekiston<br></br>
                <a href="#">Madaniyat</a>
            </span>
            <ul className="slider_list">
                <li><a href="#">Til</a></li>
                <li><a href="#">Oshxona</a></li>
                <li><a href="#">Musiqa</a></li>
                <li><a href="#">An'analar</a></li>
                <li><a href="#">Milliy sport turlari</a></li>
                <li><a href="#">Bayramlar</a></li>
                <li><a href="#">Arxitektura</a></li>
                <li><a href="#">Adabiyot</a></li>
                <li><a href="#">Milliy liboslar</a></li>
            </ul>
        </div>
    </div>,
    <div className="item" data-value="3">
        <img src={Slider_3} />
        <div className="description">
            <span className="slider_title">
                O'zbekiston<br></br>
                <a href="#">Turizm</a>
            </span>
            <ul className="slider_list">
                <li><a href="#">Davlat hokimiyati</a></li>
                <li><a href="#">Davlat ramzlari</a></li>
                <li><a href="#">Geografik joylashuvi</a></li>
                <li><a href="#">Hudud</a></li>
                <li><a href="#">Aholi</a></li>
                <li><a href="#">Milliy bayramlar</a></li>
                <li><a href="#">Foydali havolalar</a></li>
                <li><a href="#">Ob-havo</a></li>
            </ul>
        </div>
    </div>
];

const Main_slider =() =>{
    return(
        <div className="slider_main">
            <AliceCarousel
                items={items}
                controlsStrategy="alternate"
                infinite="loop" autoPlay="boolen"
                autoPlayInterval={6000}
                animationDuration={2000}
            />
            <div className="container change_width">
                <Form className="form_search">
                    <div>
                        <FormControl type="text" placeholder="Portal bo'yicha qidiruv..."></FormControl>
                        <Button type="button" className="search_btn"><img src={icon_search} /></Button>
                        <div className="full_width">
                            <a href="#"><Button type="button">Oila</Button></a>
                            <a href="#"><Button type="button">Hukumat</Button></a>
                            <a href="#"><Button type="button">Xizmatlar</Button></a>
                            <a href="#"><Button type="button">Voqealar</Button></a>
                            <a href="#"><Button type="button">Yordam</Button></a>
                        </div>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Main_slider;