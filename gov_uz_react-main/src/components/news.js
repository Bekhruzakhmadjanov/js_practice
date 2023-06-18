import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import News_img1 from "../assets/img/news_img1.jpg";
import News_img2 from "../assets/img/news_img2.png";
import Arrow_r_icon from "../assets/img/arrow_right.png";
import View_icon from "../assets/img/view_black.png";
import { Link } from "react-router-dom";

const News =() =>{
    return(
        <Container className="change_width">
            <div className="news_b">
                <span className="title">Yangiliklar</span>
                <Row>
                    <Col lg="4" md="6" sm="6" className="news_box">
                        <span className="news_img"><img src={News_img1} /></span>
                        <div className="news_text_box">
                            <Link className="news_link" to="/view_news_page">
                            <span><i>24</i>Oktabr</span>
                                <i>O'zbekiston Respublikasi Prezidenti Rossiya Federatsiyasi Hukumati Raisining o'rinbosarini qabul qildi</i>
                            </Link>
                            <p>O'zbekiston Respublikasi Prezidenti Shavkat Mirziyoyev 24-oktabr kuni Rossiya Federatsiyasi Hukumati Raisining o'rinbosari, sanoat va savdo vaziri, qo'shma Hukumatlararo komissiya hamraisi Denis Manturov boshchiligidagi delegatsiyani qabul qildi.</p>
                            <Link to="/activity_page/page1" className="news_type"><i>Iqtisodiyot va moliya</i></Link>
                            <i className="news_date">24.10.2022</i>
                            <ul className="view_counter">
                                <li><img src={View_icon} /> 25</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="6" className="news_box">
                        <span className="news_img"><img src={News_img2} /></span>
                        <div className="news_text_box">
                            <Link className="news_link" to="/view_news_page2">
                                <span><i>24</i>Oktabr</span>
                                <i>O'zbekistonda Xalqaro Ziyorat turizmi haftaligi o'tkaziladi</i>
                            </Link>
                            <p>Joriy yilning 1–3-noyabr kunlari O'zbekistonda Xalqaro Ziyorat turizmi haftaligi bo'lib o'tadi.</p>
                            <a href="#" className="news_type">Turizm va madaniyat</a>
                            <i className="news_date">24.10.2022</i>
                            <ul className="view_counter">
                                <li><img src={View_icon} /> 25</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4" md="12">
                        <ul className="news_list">
                            <li>
                                <span><i>24</i>Okt</span>
                                <Link to="/all_news_page">
                                    24-oktabr – Birlashgan Millatlar Tashkiloti kuni
                                </Link>
                            </li>
                            <li>
                                <span><i>24</i>Okt</span>
                                <Link to="/all_news_page">
                                    O'zbekistonda ilk bor MDH Parlamentlararo assambleyasining sessiyasi bo'lib o'tadi
                                </Link>
                            </li>
                            <li>
                                <span><i>24</i>Okt</span>
                                <Link to="/all_news_page">
                                    Toshkentda O'zbekiston va Rossiya o'rtasidagi iqtisodiy hamkorlik bo'yicha Hukumatlararo komissiyaning 23-yig'ilishi bo'lib o'tdi
                                </Link>
                            </li>
                            <li>
                                <span><i>24</i>Okt</span>
                                <Link to="/all_news_page">
                                    Adliya organlari tomonidan o'tgan 9 oy davomida sudlarga kiritilgan 266 mlrd. so'mdan ortiq da'volar (arizalar) qanoatlantirilgan
                                </Link>
                            </li>
                            <li>
                                <span><i>24</i>Okt</span>
                                <Link to="/all_news_page">
                                    Xotin-qizlarni qo'llab-quvvatlash borasida amalga oshirilgan ishlar yuzasidan hisobot yig'ilishi
                                </Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
                <Link to="/all_news_page" className="all_see">Barcha yangiliklar <img src={Arrow_r_icon} /></Link>
            </div>
        </Container>
    )
}

export default News;