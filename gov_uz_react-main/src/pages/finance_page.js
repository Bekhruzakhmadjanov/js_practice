import React, { useEffect, useState } from "react";
import { Breadcrumb, Row, Col } from "react-bootstrap";
import min_img3 from "../assets/img/image_min3.jpg";
import { Link } from "react-router-dom";
import View_icon from "../assets/img/view_black.png";
import News_img1 from "../assets/img/news_img1.jpg";
import News_img2 from "../assets/img/news_img2.png";
import News_img3 from "../assets/img/news_img3.jpg";

const Finance =() =>{
    return(
        <div>
            <div className="breadcrumb_b">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Faoliyat</Breadcrumb.Item>
                    <Breadcrumb.Item active>Iqtisodiyot va moliya</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <span className="inner_title">Iqtisodiyot va moliya</span>
            <div className="ministry_box">
                <div className="d_flex">
                    <span className="ministry_img"><img src={min_img3} /></span>
                    <span className="min_full_name">
                        Qo'chqarov Jamshid Anvarovich
                        <i>O'zbekiston Respublikasi Bosh vazirining moliya-iqtisodiyot va kambag'allikni qisqartirish masalalari bo'yicha o'rinbosari</i>
                        <i>O'zbekiston Respublikasi Iqtisodiy taraqqiyot va kambag'allikni qisqartirish vaziri</i>
                    </span>
                    <ul className="min_list">
                        <li>
                            <a href="#">
                                <span>
                                    <svg id="bold" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.25 24h-12.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-1.517 1.233-2.75 2.75-2.75h12.5c1.517 0 2.75 1.233 2.75 2.75v18.5c0 1.517-1.233 2.75-2.75 2.75zm-12.5-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h12.5c.689 0 1.25-.561 1.25-1.25v-18.5c0-.689-.561-1.25-1.25-1.25z"/><path d="m16.25 16h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m16.25 20h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><circle cx="12" cy="5" r="2"/><path d="m15.25 12h-6.5c-.414 0-.75-.336-.75-.75v-.5c0-1.517 1.233-2.75 2.75-2.75h2.5c1.517 0 2.75 1.233 2.75 2.75v.5c0 .414-.336.75-.75.75z"/></svg>
                                </span>
                                Biografiya
                            </a>
                        </li>
                        <li>
                            <span>
                                <svg id="telephone" data-name="483947" xmlns="http://www.w3.org/2000/svg" width="17.2" height="17.2" viewBox="0 0 17.2 17.2">
                                    <g id="telephone" data-name="telephone">
                                        <path id="telephone" data-name="telephone" d="M15.82,11.29a9.766,9.766,0,0,1-3.067-.488,1.4,1.4,0,0,0-1.363.287l-1.934,1.46a10.688,10.688,0,0,1-4.805-4.8L6.067,5.861a1.39,1.39,0,0,0,.342-1.409,9.78,9.78,0,0,1-.49-3.072A1.382,1.382,0,0,0,4.539,0H1.38A1.382,1.382,0,0,0,0,1.38,15.838,15.838,0,0,0,15.82,17.2a1.382,1.382,0,0,0,1.38-1.38V12.67A1.382,1.382,0,0,0,15.82,11.29Z"></path>
                                    </g>
                                </svg>
                            </span>
                            Juma, 15:00 - 17:00  
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path id="clock" data-name="clock" d="M-11474.534-715.414a8.943,8.943,0,0,1-2.636-6.363,8.95,8.95,0,0,1,2.636-6.366,8.949,8.949,0,0,1,6.366-2.636,8.94,8.94,0,0,1,6.362,2.636,8.95,8.95,0,0,1,2.636,6.366,8.943,8.943,0,0,1-2.636,6.363,8.94,8.94,0,0,1-6.362,2.636A8.949,8.949,0,0,1-11474.534-715.414Zm-.867-6.4v.035a7.24,7.24,0,0,0,7.233,7.233,7.241,7.241,0,0,0,7.232-7.233,7.241,7.241,0,0,0-7.232-7.233h-.1A7.238,7.238,0,0,0-11475.4-721.811Zm7.766,5.5a.533.533,0,0,0-.532-.533.534.534,0,0,0-.533.533v.674a6.178,6.178,0,0,1-5.614-5.637h.579a.534.534,0,0,0,.533-.533.534.534,0,0,0-.533-.533h-.576a6.176,6.176,0,0,1,5.539-5.579v.544a.531.531,0,0,0,.53.533.534.534,0,0,0,.533-.533v-.559a6.178,6.178,0,0,1,5.677,5.522h-.64a.534.534,0,0,0-.535.533.534.534,0,0,0,.535.533h.657a6.178,6.178,0,0,1-5.62,5.709Zm-4.006-8.944a.531.531,0,0,0,0,.752l3.1,3.1a.544.544,0,0,0,.378.156.544.544,0,0,0,.377-.156l1.777-1.78a.531.531,0,0,0,0-.755.532.532,0,0,0-.752,0l-1.4,1.4-2.72-2.719a.535.535,0,0,0-.378-.156A.529.529,0,0,0-11471.642-725.25Z" transform="translate(11477.17 730.778)"></path>
                                </svg>
                            </span>
                            +998 97 000-00-00
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.154" height="16.28" viewBox="0 0 23.154 16.28">
                                    <path id="message" data-name="message" d="M-10785.966-168.44a2,2,0,0,1-.872-.2l7.023-6.977.993.994a3.4,3.4,0,0,0,4.795,0l.994-.994,7.023,6.977a2.014,2.014,0,0,1-.872.2Zm13.892-8.139,7.023-6.977a2.008,2.008,0,0,1,.2.872v12.211a2.017,2.017,0,0,1-.2.872Zm-15.928,6.105v-12.211a2.01,2.01,0,0,1,.206-.872l7.021,6.977-7.021,6.977A2.019,2.019,0,0,1-10788-170.473Zm10.14-5.112-8.976-8.932a2.043,2.043,0,0,1,.872-.2h19.085a2.053,2.053,0,0,1,.872.2l-8.976,8.932a2.029,2.029,0,0,1-1.439.595A2.028,2.028,0,0,1-10777.862-175.585Z" transform="translate(10788.002 184.72)"></path>
                                </svg>
                            </span>
                            master@gmail.com
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.89" height="20.734" viewBox="0 0 18.89 20.734">
                                    <path id="network" data-name="network" d="M-10777.981-345.263a2.982,2.982,0,0,1,.044-.515l-8.016-4.57a2.985,2.985,0,0,1-1.935.709,3,3,0,0,1-3-3,3,3,0,0,1,3-3,2.985,2.985,0,0,1,1.935.709l8.016-4.57a2.982,2.982,0,0,1-.044-.515,3,3,0,0,1,2.992-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3,2.981,2.981,0,0,1-2.088-.85l-7.9,4.506a2.97,2.97,0,0,1,.088.72,2.97,2.97,0,0,1-.088.72l7.9,4.506a2.98,2.98,0,0,1,2.087-.85,3,3,0,0,1,3,3,3,3,0,0,1-3,3A2.994,2.994,0,0,1-10777.981-345.263Z" transform="translate(10790.884 363.001)"/>
                                </svg>
                            </span>
                        </li>
                    </ul>
                </div>
                <div className="job_pos">
                    Mutasaddilik qiladigan yo'nalishlari
                    <i>Makroiqtisodiy tahlil, tarkibiy o'zgartirishlar, moliya-bank tizimi, davlat aktivlarini boshqarish, raqobatni rivojlantirish, tadbirkorlikni qo'llab-quvvatlash va kambag'allikni qisqartirish masalalari kotibiyati</i>
                </div>
            </div>
            <div className="ab_portal_text">
                <p>
                    2020-yil yakunlari bo'yicha yurtimiz iqtisodiyoti 2019-yilga nisbatan 1,6 foizga o'sgan bo'lib, yalpi ichki mahsulot hajmi 580,2 trln. so'mni tashkil etdi. 
                    Yalpi ichki mahsulot o'sishining 0,76 foizi qishloq xo'jaligiga (sohadagi yalpi qo'shilgan qiymatining o'sishi 3,0 foiz), 0,55 foizi qurilishga (9,2 foiz), 
                    0,18 foizi sanoatga (0,7 foiz) hamda 0,04 foizi xizmatlar ko'rsatish sohasi (0,1 foiz) hissasiga to'g'ri keldi. Shu bilan birga, hisobot davrida yalpi 
                    qo'shilgan qiymat tarkibida xizmatlar 36,3 foizni (2019-yilda 36,1 foiz), qishloq, o'rmon va baliqchilik xo'jaligi 28,2  foizni (28,0 foiz), sanoat 28,5 
                    foizni (29,3 foiz), qurilish 7,0 foizni (6,6 foiz) tashkil etdi.
                </p>
                <p>
                    Koronavirus pandemiyasi xalqaro bozorlarga o'z ta'sirini ko'rsatganligi oqibatida mamlakatimiz tashqi savdo aylanmasi 36,3 mlrd. AQSH dollarini tashkil etib, 2019-yilga 
                    nisbatan 13,1 foizga qisqargan. Bunda eksport 13,4 foizga, import esa 12,8 foizga kamaygan.
                </p>
                <p>
                    Bundan tashqari, 2020-yilda investitsion faollik pasayishi hisobiga asosiy kapitalga o'zlashtirilgan investitsiyalar hajmi 2019-yilga nisbatan 
                    8,2 foizga qisqardi va 202,0 trln. so'mni tashkil etdi.
                </p>
                <p>
                    Pandemiyaning salbiy ta'siriga qaramay, Davlat byudjeti daromadlari 2020-yilda 132,9 trln. so'mni tashkil etib, belgilangan 128,7 trln. so'm prognoz 
                    103,3 foizga yoki 4,2 trln. so'mga oshirib bajarildi. Daromadlar 2019-yil ma'lumotlari bilan solishtirilganda 20,8 trln. so'mga o'sdi.
                </p>
            </div>
            <div className="all_news_b">
                <Row>
                    <Col lg="4" md="6" sm="6" className="news_box">
                        <span className="news_img"><img src={News_img1} /></span>
                        <div className="news_text_box">
                            <Link to="/view_news_page" className="news_link">
                                <i>O'zbekiston Respublikasi Prezidenti Rossiya Federatsiyasi Hukumati Raisining o'rinbosarini qabul qildi</i>
                            </Link>
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
                            <Link to="/view_news_page2" className="news_link">
                                <i>O'zbekistonda Xalqaro Ziyorat turizmi haftaligi o'tkaziladi</i>
                            </Link>
                            <a href="#" className="news_type">Turizm va madaniyat</a>
                            <i className="news_date">24.10.2022</i>
                            <ul className="view_counter">
                                <li><img src={View_icon} /> 25</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg="4" md="6" sm="6" className="news_box">
                        <span className="news_img"><img src={News_img3} /></span>
                        <div className="news_text_box">
                            <Link to="/view_news_page" className="news_link">
                                <i>«Energosamaradorlik va uglerodsiz kelajak energetikasi yo'lida» mavzusida xalqaro konferentsiya</i>
                            </Link>
                            <a href="#" className="news_type">Energetika</a>
                            <i className="news_date">24.10.2022</i>
                            <ul className="view_counter">
                                <li><img src={View_icon} /> 25</li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Finance;