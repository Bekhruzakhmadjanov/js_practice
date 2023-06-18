import React from "react";
import { Button, Col, Container, Row, Breadcrumb, Form, FormControl, FormGroup, FormLabel, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import News_img1 from "../assets/img/news_img1.jpg";
import News_img2 from "../assets/img/news_img2.png";
import News_img3 from "../assets/img/news_img3.jpg";
import Icon_search from "../assets/img/search_n_icon.png";
import View_icon from "../assets/img/view_black.png";
import Footer from "../components/footer";
import Header from "../components/header";

const All_news =() =>{
    return(
        <div className="all_news_b">
            <Header />
            <Container className="change_width">
                <Row>
                    <Col xxl="3" xl="3" lg={{ order: 'last' }} className="lg_width_3">
                        <div className="right_menu_b">
                            <ul className="right_menu_list">
                                <li className="active"><a href="#">Yangiliklar</a></li>
                                <li><a>Majlislar</a></li>
                                <li><a>Nutqlar</a></li>
                                <li><a>So'rovlar</a></li>
                                <li><a>Taqdimotlar</a></li>
                                <li><Link to="/events_info">Voqealar</Link></li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <div className="white_bg">
                            <div className="breadcrumb_b">
                                <Breadcrumb>
                                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                                    <Breadcrumb.Item active>Barcha yangiliklar</Breadcrumb.Item>
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
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup className="form_group">
                                                    <FormLabel>Nashr qilish davri</FormLabel>
                                                    <FormControl type="date" placeholder="Nashr qilish davri"></FormControl>
                                                </FormGroup>
                                            </Col>
                                            <Col lg="6">
                                                <FormGroup className="form_group">
                                                    <FormLabel>Nashr qilish davri</FormLabel>
                                                    <FormControl type="date" placeholder="Nashr qilish davri"></FormControl>
                                                </FormGroup>
                                            </Col>
                                        </Row>
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

export default All_news;