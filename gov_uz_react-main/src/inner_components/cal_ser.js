import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Arrow_r_icon from "../assets/img/arrow_right.png";

const Calendar_service =() =>{
    return(
        <div className="box_shadow cal_ser">
            <Container className="change_width">
                <Row className="left_right_b">
                <Col md="4" className="pad_has">
                        <span className="title">Interaktiv xizmatlar</span>
                        <a href="#" className="all_see">Barcha xizmatlar <img src={Arrow_r_icon} /></a>
                        <ul className="state_bodies_list">
                            <li><a href="#">Statistika</a></li>
                            <li><a href="#">Litsenziyalash</a></li>
                            <li><a href="#">Radiochastota jadvali</a></li>
                            <li><a href="#">Soha interaktiv xizmatlari reyestri</a></li>
                            <li><a href="#">Elektron to'lovlar</a></li>
                            {/* <li><a href="#">Elektron hisobot</a></li>
                            <li><a href="#">Statistika</a></li>
                            <li><a href="#">Elektron raqamli imzo</a></li> */}
                        </ul>
                    </Col>
                    
                    <Col md="4" className="pad_has">
                        <span className="title">Voqealar taqvimi</span>
                        <a href="#" className="all_see">Barcha voqealar <img src={Arrow_r_icon} /></a>
                        <ul className="news_list cal_ser_list">
                            <li>
                                <span><span><i>30</i>Noy</span></span>
                                <a href="#">
                                    “Ipak yo'lida turizm-2022” yarmarkasi bo'lib o'tadi
                                </a>
                            </li>
                            <li>
                                <span><span><i>3</i>Noy</span></span>
                                <a href="#">
                                    II Uzbekistan Economic Forum
                                </a>
                            </li>
                            <li>
                                <span><span><i>27</i>Okt</span></span>
                                <a href="#">
                                    Turkiy davlatlar tashkiloti Transport vazirlari majlisi bo'lib o'tadi
                                </a>
                            </li>
                            <li>
                                <span><span><i>24</i>Okt</span></span>
                                <a href="#">
                                    INNOWEEK haftaligi
                                </a>
                            </li>
                            <li>
                                <span><span><i>7</i>Okt</span></span>
                                <a href="#">
                                    Samarqandda 7–8-oktabr kunlari Xalqaro gastronomik festival bo'lib o'tadi
                                </a>
                            </li>
                            {/* <li>
                                <span><span><i>15</i>Sen</span></span>
                                <a href="#">
                                    O'zbekistonda Shanxay hamkorlik tashkilotining sammiti bo'lib o'tadi
                                </a>
                            </li> */}
                        </ul>
                    </Col>
                    <Col md="4" className="pad_has">
                        <span className="title">Foydali havolalar</span>
                        <a href="#" className="all_see">Barcha havolalar <img src={Arrow_r_icon} /></a>
                        <ul className="state_bodies_list">
                            <li><a href="#">Ochiq budjet</a></li>
                            <li><a href="#">Ochiq hukumat</a></li>
                            <li><a href="#">Xususiylashtirish</a></li>
                            <li><a href="#">Gender statistikasi</a></li>
                            <li><a href="#">Korrupsiyaga qarshi kurash</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Calendar_service;