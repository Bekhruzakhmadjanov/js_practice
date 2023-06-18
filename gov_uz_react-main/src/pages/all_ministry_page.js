import React from "react";
import { Container, Row, Col, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import Icon_print from "../assets/img/print_icon.png";
import Footer from "../components/footer";
import Header from "../components/header";

const All_page_ministry =() =>{
    return(
        <div>
            <Header />
            <Container className="change_width">
                <Row>
                    <Col xxl="3" xl="3" lg={{ order: 'last' }} className="lg_width_3">
                        <div className="right_menu_b">
                            <ul className="right_menu_list">
                                <li className="active"><a href="#">Vazirliklar</a></li>
                                <li><a href="#">Davlat qo'mitalar</a></li>
                                <li><a href="#">Davlat inspeksiyalari</a></li>
                                <li><a href="#">Agentliklar</a></li>
                                <li><a href="#">Qo'mitalar</a></li>
                                <li><a href="#">Markazlar</a></li>
                                <li><a href="#">Hokimiyatlar</a></li>
                                <li><a href="#">Assotsiatsiyalar</a></li>
                                <li><a href="#">Fondlar</a></li>
                                <li><a href="#">Boshqalar</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <div className="white_bg">
                            <div className="breadcrumb_b">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                                    <Breadcrumb.Item active>Vazirliklar</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <button type="button" className="btn print_btn absol_print_btn"><img src={Icon_print} /></button>
                            <span className="inner_title">Vazirliklar</span>
                            <ul className="state_bodies_list all_min_state">
                                <li>
                                    <Link to="/miniistry_com_page"><span>O'zbekiston Respublikasi Axborot texnologiyalari va kommunikatsiyalarini rivojlantirish vazirligi</span></Link>
                                </li>
                                <li>
                                    <a href="https://mineconomy.uz/" target="_blank"><span>O'zbekiston Respublikasi Iqtisodiy taraqqiyot va kambag'allikni qisqartirish vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://www.mf.uz/" target="_blank"><span>O'zbеkistоn Rеspublikаsi Mоliya vаzirligi</span> </a>
                                </li>
                                <li>
                                    <a href="https://www.mintrans.uz/" target="_blank"><span>O'zbekiston Respublikasi Transport vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://mehnat.uz/oz" target="_blank"><span>O'zbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://www.edu.uz/uz" target="_blank"><span>O'zbеkistоn Rеspublikаsi Оliy vа o'rtа mахsus tа'lim vаzirligi</span> </a>
                                </li>
                                <li>
                                    <a href="https://www.uzedu.uz/y3" target="_blank"><span>O'zbekistоn Respublikаsi Хаlq ta'limi vаzirligi</span> </a>
                                </li>
                                <li>
                                    <a href="https://ssv.uz/" target="_blank"><span>O'zbеkistоn Rеspublikаsi Sоg'liqni sаqlаsh vаzirligi</span> </a>
                                </li>
                                <li>
                                    <a href="https://iiv.uz/" target="_blank"><span>O'zbеkiston Rеspublikаsi Ichki ishlаr vаzirligi</span></a>
                                </li> 
                                <li>
                                    <a href="http://www.mudofaa.uz/" target="_blank"><span>O'zbekiston Respublikasi Mudofaa vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://www.fvv.uz/" target="_blank"><span>O'zbеkistоn Rеspublikаsi Fаvqulоddа vаziyatlаr vаzirligi</span></a>
                                </li>
                                <li>
                                    <a href="http://www.mc.uz/" target="_blank"><span>O'zbekiston Respublikasi Qurilish vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://mfa.uz/uz" target="_blank"><span>O'zbеkistоn Rеspublikаsi Tаshqi ishlаr vаzirligi</span></a>
                                </li>
                                <li>
                                    <a href="http://www.mift.uz/" target="_blank"><span>O'zbekiston Respublikasi investitsiyalar va tashqi savdo vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://www.minjust.uz/uz/" target="_blank"><span>O'zbekiston Respublikasi Adliya vazirligi</span> </a>
                                </li>
                                <li>
                                    <a href="https://madaniyat.uz/uz/" target="_blank"><span>O'zbekiston Respublikasi Madaniyat vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://uzbektourism.uz/" target="_blank"><span>O'zbekiston Respublikasi Turizm va madaniy meros vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://minsport.uz/" target="_blank"><span>O'zbekiston Respublikasi Sportni rivojlantirish vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="http://https//kommunal.uz/uz" target="_blank"><span>O'zbekiston Respublikasi Uy-joy kommunal xizmat ko'rsatish vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://www.mpe.uz/" target="_blank"><span>O'zbekiston Respublikasi Maktabgacha ta'lim vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://mininnovation.uz/" target="_blank"><span>O'zbekiston Respublikasi Innovatsion rivojlanish vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="http://www.agro.uz/" target="_blank"><span>O'zbekiston Respublikasi Qishlоq хo'jаligi vаzirligi</span></a>
                                </li>
                                <li>
                                    <a href="http://www.water.gov.uz/" target="_blank"><span>O'zbekiston Respublikasi Suv хo'jаligi vаzirligi</span></a>
                                </li>
                                <li>
                                    <a href="https://minenergy.uz/uz" target="_blank"><span>O'zbekiston Respublikasi Energetika vazirligi</span></a>
                                </li>
                                <li>
                                    <a href="http://moqqv.uz/" target="_blank"><span>O'zbekiston Respublikasi mahalla va nuroniylarni qo'llab-quvvatlash vazirligi</span></a>
                                </li>
                            </ul>
                            <ul className="share_list">
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9.991" height="18.655" viewBox="0 0 9.991 18.655">
                                            <path id="Icon_awesome-facebook-f" data-name="Icon awesome-facebook-f" d="M10.946,10.493l.518-3.376H8.225V4.926a1.688,1.688,0,0,1,1.9-1.824H11.6V.228A17.959,17.959,0,0,0,8.986,0C6.319,0,4.575,1.617,4.575,4.544V7.117H1.609v3.376H4.575v8.161h3.65V10.493Z" transform="translate(-1.609)"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.524" height="15.857" viewBox="0 0 19.524 15.857">
                                            <path id="Icon_awesome-twitter" data-name="Icon awesome-twitter" d="M17.517,7.333c.012.173.012.347.012.52A11.307,11.307,0,0,1,6.145,19.238,11.308,11.308,0,0,1,0,17.441a8.278,8.278,0,0,0,.966.05,8.014,8.014,0,0,0,4.968-1.71,4.008,4.008,0,0,1-3.741-2.775,5.046,5.046,0,0,0,.756.062A4.232,4.232,0,0,0,4,12.932,4,4,0,0,1,.793,9.005v-.05A4.03,4.03,0,0,0,2.6,9.463,4.007,4.007,0,0,1,1.363,4.112,11.374,11.374,0,0,0,9.613,8.3a4.517,4.517,0,0,1-.1-.917,4.005,4.005,0,0,1,6.925-2.738,7.878,7.878,0,0,0,2.54-.966A3.991,3.991,0,0,1,17.22,5.883a8.022,8.022,0,0,0,2.3-.619,8.6,8.6,0,0,1-2.007,2.069Z" transform="translate(0 -3.381)"/>
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20.418" height="17.123" viewBox="0 0 20.418 17.123">
                                            <path id="Icon_awesome-telegram-plane" data-name="Icon awesome-telegram-plane" d="M20.361,6.087,17.28,20.618c-.232,1.026-.839,1.281-1.7.8l-4.695-3.46L8.62,20.135a1.179,1.179,0,0,1-.944.46l.337-4.781,8.7-7.863c.378-.337-.082-.524-.588-.187L5.37,14.538.739,13.088c-1.007-.315-1.026-1.007.21-1.49L19.062,4.619c.839-.315,1.573.187,1.3,1.468Z" transform="translate(-0.001 -4.528)"/>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default All_page_ministry;