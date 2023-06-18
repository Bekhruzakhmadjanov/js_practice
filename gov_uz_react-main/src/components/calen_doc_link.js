import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Arrow_r_icon from "../assets/img/arrow_right.png";
import File_ic from "../assets/img/file_icon.png";

const Doc_cal_link =() =>{
    return(
        <div className="box_shadow">
            <Container className="change_width">
                <Row className="left_right_b">
                    <Col md="4" className="pad_has">
                        <span className="title">Voqealar taqvimi</span>
                        <Link to="/events_info" className="all_see">Barcha voqealar <img src={Arrow_r_icon} /></Link>
                        <ul className="news_list">
                            <li><span><i>30</i>Noy</span><Link to="/events_view">“Ipak yo'lida turizm-2022” yarmarkasi bo'lib o'tadi</Link></li>
                            <li><span><i>3</i>Noy</span><a href="https://gov.uz/oz/events/view/783" target="_blank">II O'zbekiston Iqtisodiy Forumi</a></li>
                            <li><span><i>27</i>Okt</span><a href="https://gov.uz/oz/events/view/786" target="_blank">Turkiy davlatlar tashkiloti Transport vazirlari majlisi</a></li>
                            <li><span><i>24</i>Okt</span><a href="https://gov.uz/oz/events/view/785" target="_blank">INNOWEEK haftaligi</a></li>
                            <li><span><i>7</i>Okt</span><a href="https://gov.uz/oz/events/view/781" target="_blank">Samarqandda 7–8-oktabr kunlari Xalqaro gastronomik festival</a></li>
                        </ul>
                    </Col>
                    <Col md="4" className="pad_has">
                        <span className="title">Hujjatlar</span>
                        <a href="https://lex.uz/uz/search/nat?body_id=819" className="all_see" target="_blank">Barcha hujjatlar <img src={Arrow_r_icon} /></a>
                        <ul className="file_list">
                            <li>
                                <img src={File_ic} />
                                <span>O'zbekiston Respublikasi Prezidentining qarori №PQ-356.</span>
                                <a href="https://lex.uz/uz/docs/-6163351" target="_blank">“Faol tadbirkor” ko'krak nishonini ta'sis etish to'g'risida</a>
                                <i>20.08.2022</i>
                            </li>
                            <li>
                                <img src={File_ic} />
                                <span>O'zbekiston Respublikasi Vazirlar Mahkamasining qarori №458</span>
                                <a href="https://lex.uz/uz/docs/-6162576" target="_blank">Atrof muhit va tabiatni muhofaza qilish texnologiyalari ilmiy-tadqiqot instituti faoliyatini yanada takomillashtirish chora-tadbirlari to'g'risida</a>
                                <i>19.08.2022</i>
                            </li>
                            <li>
                                <img src={File_ic} />
                                <span>O'zbekiston Respublikasining Qonuni №O'RQ-790.</span>
                                <a href="https://lex.uz/uz/docs/-6161244" target="_blank">Aholini va hududlarni tabiiy hamda texnogen xususiyatli favqulodda vaziyatlardan muhofaza qilish to'g'risida</a>
                                <i>17.08.2022</i>
                            </li>
                        </ul>
                    </Col>
                    <Col md="4" className="pad_has">
                        <span className="title">Foydali havolalar</span>
                        <Link to="/usefulllinks_all" className="all_see">Barcha havolalar <img src={Arrow_r_icon} /></Link>
                        <ul className="state_bodies_list">
                            <li><a href="https://openbudget.uz/" target="_blank">Ochiq budjet</a></li>
                            <li><a href="https://data.gov.uz/rus" target="_blank">Ochiq hukumat</a></li>
                            <li><a href="https://davaktiv.uz/oz/" target="_blank">Xususiylashtirish</a></li>
                            <li><a href="https://www.stat.uz/uz/" target="_blank">Gender statistikasi</a></li>
                            <li><a href="https://anticorruption.uz/uz" target="_blank">Korrupsiyaga qarshi kurash</a></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Doc_cal_link;