import React from "react";
import { Button, Col, Container, Row, Breadcrumb, Form, FormControl, FormGroup, FormLabel, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import Events1 from "../assets/img/events_img1.jpg";
import Events2 from "../assets/img/events_img2.jpg";
import Events3 from "../assets/img/events_img3.jpg";
import Icon_search from "../assets/img/search_n_icon.png";
import View_icon from "../assets/img/view_black.png";
import Header from "../components/header";
import Footer from "../components/footer";

const Events =() =>{
    return(
        <div className="all_news_b">
            <Header />
            <Container className="change_width">
                <Row>
                    <Col xxl="3" xl="3" lg={{ order: 'last' }} className="lg_width_3">
                        <div className="right_menu_b">
                            <ul className="right_menu_list">
                                <li><Link to="/all_news_page">Yangiliklar</Link></li>
                                <li><a>Majlislar</a></li>
                                <li><a>Nutqlar</a></li>
                                <li><a>So'rovlar</a></li>
                                <li><a>Taqdimotlar</a></li>
                                <li className="active"><a>Voqealar</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <div className="white_bg">
                            <div className="breadcrumb_b">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                                    <Breadcrumb.Item active>Barcha voqealar</Breadcrumb.Item>
                                </Breadcrumb>
                            </div>
                            <Form className="news_form_search">
                                <Row>
                                    <Col>
                                        <FormGroup className="form_group" >
                                            <FormLabel>Kalit so'zlar</FormLabel>
                                            <FormControl type="text" placeholder="Kalit so'zlar "></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup className="form_group">
                                            <FormLabel>Nashr qilish davri</FormLabel>
                                            <FormControl type="date" placeholder="Nashr qilish davri"></FormControl>
                                        </FormGroup>
                                    </Col>
                                    <Col>
                                        <FormGroup  className="form_group">
                                            <FormLabel>Yo'nalish</FormLabel>
                                            <Form.Select>
                                                <option>Tanlanmagan</option>
                                                <option>Iqtisodiyot va moliya</option>
                                                <option>Ta'lim</option>
                                                <option> Sog'liqni saqlash</option>
                                                <option>Sport</option>
                                                <option>Ekologiya</option>
                                                <option>Xavfsizlik</option>
                                                <option>Transport va aloqa</option>
                                                <option>Uy-joy va shaharlar</option>
                                                <option>Bandlik va mehnat</option>
                                                <option>Qishloq xo`jaligi</option>
                                                <option>Investitsiyalar va innovatsiyalar</option>
                                                <option>Hududiy rivojlanish</option>
                                                <option>Turizm va madaniyat</option>
                                                <option>Energetika</option>
                                                <option>Huquq va qonunchilik</option>
                                            </Form.Select>
                                        </FormGroup>
                                    </Col>
                                    <Col lg="1" md="2" xs="2" className="flex_end"><Button type="button" className="btn news_search_btn"><i>Поиск</i> <img src={Icon_search} /></Button></Col>
                                </Row>
                            </Form>
                            <Row>
                                <Col lg="4" md="6" sm="6" className="news_box">
                                    <span className="news_img"><img src={Events1} /></span>
                                    <div className="news_text_box">
                                        <Link to="/events_view" className="news_link">
                                            <i>“Ipak yo'lida turizm-2022” yarmarkasi</i>
                                        </Link>
                                        <a href="#" className="news_type"><i>Turizm va madaniyat</i></a>
                                        <i className="news_date">30.11.2022</i>
                                        <ul className="view_counter">
                                            <li><img src={View_icon} /> 12</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="6" className="news_box">
                                    <span className="news_img"><img src={Events2} /></span>
                                    <div className="news_text_box">
                                        <Link to="/events_view" className="news_link">
                                            <i>II O'zbekiston Iqtisodiy Forumi</i>
                                        </Link>
                                        <a href="#" className="news_type">Iqtisodiyot va moliya</a>
                                        <i className="news_date">3.11.2022</i>
                                        <ul className="view_counter">
                                            <li><img src={View_icon} /> 15</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="6" className="news_box">
                                    <span className="news_img"><img src={Events3} /></span>
                                    <div className="news_text_box">
                                        <Link to="/events_view" className="news_link">
                                            <i>Turkiy davlatlar tashkiloti Transport vazirlari majlisi</i>
                                        </Link>
                                        <a href="#" className="news_type">Energetika</a>
                                        <i className="news_date">27.10.2022</i>
                                        <ul className="view_counter">
                                            <li><img src={View_icon} /> 25</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="6" className="news_box">
                                    <span className="news_img"><img src={Events1} /></span>
                                    <div className="news_text_box">
                                        <Link to="/events_view" className="news_link">
                                            <i>O'zbekiston Respublikasi Prezidenti Rossiya Federatsiyasi Hukumati Raisining o'rinbosarini qabul qildi</i>
                                        </Link>
                                        <a href="#" className="news_type"><i>Iqtisodiyot va moliya</i></a>
                                        <i className="news_date">24.10.2022</i>
                                        <ul className="view_counter">
                                            <li><img src={View_icon} /> 25</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col lg="4" md="6" sm="6" className="news_box">
                                    <span className="news_img"><img src={Events2} /></span>
                                    <div className="news_text_box">
                                        <Link to="/events_view" className="news_link">
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
                                    <span className="news_img"><img src={Events3} /></span>
                                    <div className="news_text_box">
                                        <Link to="/events_view" className="news_link">
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
                            <div className="pagination_b">
                                <Pagination>
                                    <Pagination.Prev />
                                    <Pagination.Item>{1}</Pagination.Item>
                                    <Pagination.Item active>{2}</Pagination.Item>
                                    <Pagination.Ellipsis />
                                    <Pagination.Item>{22}</Pagination.Item>
                                    <Pagination.Next />
                                </Pagination>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Events;