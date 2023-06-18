import React from "react";
import { Button, Col, Container, Form, Row, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Arrow_r_icon from "../assets/img/arrow_right.png";
import File_ic from "../assets/img/file_icon.png";

const Vac_doc_link =() =>{
    return(
        <div className="box_shadow box_shadow_in">
            <Container className="change_width">
                <Row className="left_right_b">
                    <Col md="4" className="pad_has">
                        <span className="title">Bo'sh ish o'rinlari</span>
                        <a href="#" className="all_see">Barcha ish o'rinlari <img src={Arrow_r_icon} /></a>
                        <ul className="news_list">
                            <li>
                                <a href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.733" height="22.831" viewBox="0 0 24.733 22.831">
                                            <g id="Icon_ionic-ios-briefcase" data-name="Icon ionic-ios-briefcase" transform="translate(-3.375 -4.5)">
                                                <path id="Контур_1641" data-name="Контур 1641" d="M5.278,29.068H26.206a1.9,1.9,0,0,0,1.9-1.9V15.75H3.375V27.165A1.9,1.9,0,0,0,5.278,29.068Z" transform="translate(0 -1.737)" fill="#c2c2c2"/>
                                                <path id="Контур_1642" data-name="Контур 1642" d="M26.206,8.305H25.73V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H21.211V6.4a1.908,1.908,0,0,0-1.9-1.9H12.174a1.908,1.908,0,0,0-1.9,1.9v1.9H8.607V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H5.278a1.9,1.9,0,0,0-1.9,1.9v2.378H28.108V10.208A1.9,1.9,0,0,0,26.206,8.305Zm-6.659,0h-7.61V6.64a.477.477,0,0,1,.476-.476h6.659a.477.477,0,0,1,.476.476Z" fill="#c2c2c2"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Maslahatchi
                                    <div className="vac_counter">
                                        Bo'sh ish o'rni:
                                        <i>1</i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.733" height="22.831" viewBox="0 0 24.733 22.831">
                                            <g id="Icon_ionic-ios-briefcase" data-name="Icon ionic-ios-briefcase" transform="translate(-3.375 -4.5)">
                                                <path id="Контур_1641" data-name="Контур 1641" d="M5.278,29.068H26.206a1.9,1.9,0,0,0,1.9-1.9V15.75H3.375V27.165A1.9,1.9,0,0,0,5.278,29.068Z" transform="translate(0 -1.737)" fill="#c2c2c2"/>
                                                <path id="Контур_1642" data-name="Контур 1642" d="M26.206,8.305H25.73V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H21.211V6.4a1.908,1.908,0,0,0-1.9-1.9H12.174a1.908,1.908,0,0,0-1.9,1.9v1.9H8.607V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H5.278a1.9,1.9,0,0,0-1.9,1.9v2.378H28.108V10.208A1.9,1.9,0,0,0,26.206,8.305Zm-6.659,0h-7.61V6.64a.477.477,0,0,1,.476-.476h6.659a.477.477,0,0,1,.476.476Z" fill="#c2c2c2"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Bosh mutaxassis
                                    <div className="vac_counter">
                                        Bo'sh ish o'rni:
                                        <i>20</i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.733" height="22.831" viewBox="0 0 24.733 22.831">
                                            <g id="Icon_ionic-ios-briefcase" data-name="Icon ionic-ios-briefcase" transform="translate(-3.375 -4.5)">
                                                <path id="Контур_1641" data-name="Контур 1641" d="M5.278,29.068H26.206a1.9,1.9,0,0,0,1.9-1.9V15.75H3.375V27.165A1.9,1.9,0,0,0,5.278,29.068Z" transform="translate(0 -1.737)" fill="#c2c2c2"/>
                                                <path id="Контур_1642" data-name="Контур 1642" d="M26.206,8.305H25.73V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H21.211V6.4a1.908,1.908,0,0,0-1.9-1.9H12.174a1.908,1.908,0,0,0-1.9,1.9v1.9H8.607V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H5.278a1.9,1.9,0,0,0-1.9,1.9v2.378H28.108V10.208A1.9,1.9,0,0,0,26.206,8.305Zm-6.659,0h-7.61V6.64a.477.477,0,0,1,.476-.476h6.659a.477.477,0,0,1,.476.476Z" fill="#c2c2c2"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Yetakchi mutaxassis
                                    <div className="vac_counter">
                                        Bo'sh ish o'rni:
                                        <i>8</i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.733" height="22.831" viewBox="0 0 24.733 22.831">
                                            <g id="Icon_ionic-ios-briefcase" data-name="Icon ionic-ios-briefcase" transform="translate(-3.375 -4.5)">
                                                <path id="Контур_1641" data-name="Контур 1641" d="M5.278,29.068H26.206a1.9,1.9,0,0,0,1.9-1.9V15.75H3.375V27.165A1.9,1.9,0,0,0,5.278,29.068Z" transform="translate(0 -1.737)" fill="#c2c2c2"/>
                                                <path id="Контур_1642" data-name="Контур 1642" d="M26.206,8.305H25.73V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H21.211V6.4a1.908,1.908,0,0,0-1.9-1.9H12.174a1.908,1.908,0,0,0-1.9,1.9v1.9H8.607V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H5.278a1.9,1.9,0,0,0-1.9,1.9v2.378H28.108V10.208A1.9,1.9,0,0,0,26.206,8.305Zm-6.659,0h-7.61V6.64a.477.477,0,0,1,.476-.476h6.659a.477.477,0,0,1,.476.476Z" fill="#c2c2c2"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Boshqarma rahbari o'rinbosari
                                    <div className="vac_counter">
                                        Bo'sh ish o'rni:
                                        <i>1</i>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24.733" height="22.831" viewBox="0 0 24.733 22.831">
                                            <g id="Icon_ionic-ios-briefcase" data-name="Icon ionic-ios-briefcase" transform="translate(-3.375 -4.5)">
                                                <path id="Контур_1641" data-name="Контур 1641" d="M5.278,29.068H26.206a1.9,1.9,0,0,0,1.9-1.9V15.75H3.375V27.165A1.9,1.9,0,0,0,5.278,29.068Z" transform="translate(0 -1.737)" fill="#c2c2c2"/>
                                                <path id="Контур_1642" data-name="Контур 1642" d="M26.206,8.305H25.73V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H21.211V6.4a1.908,1.908,0,0,0-1.9-1.9H12.174a1.908,1.908,0,0,0-1.9,1.9v1.9H8.607V7.829a.477.477,0,0,0-.476-.476h-1.9a.477.477,0,0,0-.476.476v.476H5.278a1.9,1.9,0,0,0-1.9,1.9v2.378H28.108V10.208A1.9,1.9,0,0,0,26.206,8.305Zm-6.659,0h-7.61V6.64a.477.477,0,0,1,.476-.476h6.659a.477.477,0,0,1,.476.476Z" fill="#c2c2c2"/>
                                            </g>
                                        </svg>
                                    </span>
                                    Tuzatuvchi
                                    <div className="vac_counter">
                                        Bo'sh ish o'rni:
                                        <i>2</i>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </Col>
                    <Col md="4" className="pad_has">
                        <span className="title">Hujjatlar</span>
                        <a href="#" className="all_see">Barcha hujjatlar<img src={Arrow_r_icon} /></a>
                        <ul className="file_list">
                            <li>
                                <img src={File_ic} />
                                <span>O'zbekiston Respublikasi Prezidentining qarori №PQ-356.</span>
                                <a href="#">“Faol tadbirkor” ko'krak nishonini ta'sis etish to'g'risida</a>
                                <i>20.08.2022</i>
                            </li>
                            <li>
                                <img src={File_ic} />
                                <span>O'zbekiston Respublikasi Vazirlar Mahkamasining qarori №458</span>
                                <a href="#">Atrof muhit va tabiatni muhofaza qilish texnologiyalari ilmiy-tadqiqot instituti faoliyatini yanada takomillashtirish chora-tadbirlari to'g'risida</a>
                                <i>19.08.2022</i>
                            </li>
                            <li>
                                <img src={File_ic} />
                                <span>O'zbekiston Respublikasining Qonuni №O'RQ-790.</span>
                                <a href="#">Aholini va hududlarni tabiiy hamda texnogen xususiyatli favqulodda vaziyatlardan muhofaza qilish to'g'risida</a>
                                <i>17.08.2022</i>
                            </li>
                        </ul>
                    </Col>
                    {/* <Col md="4" className="pad_has">
                        <span className="title">So'rovnomalar</span>
                        <Link to="/question_answer/page1" className="all_see">Barcha so'rovnomalar<img src={Arrow_r_icon} /></Link>
                        <Form className="questions_form">
                            <Form.Label>Yagona interaktiv davlat xizmatlari portali (my.gov.uz)dan foydalanasizmi?</Form.Label>
                            <div className="full_height flex-row">
                                <div>
                                    <Form.Check
                                    type="radio"
                                    label="Yo'q foydalanmayman"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios1"
                                    />
                                    <hr></hr>
                                    <Form.Check
                                    type="radio"
                                    label="Ha foydalanaman"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios2"
                                    />
                                    <hr></hr>
                                    <Form.Check
                                    type="radio"
                                    label="Bir marta foydalanganman"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios3"
                                    />
                                    <hr></hr>
                                    <Form.Check
                                    type="radio"
                                    label="Birinchi bor eshitishim"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios4"
                                    />
                                    <hr></hr>
                                    <Form.Check
                                    type="radio"
                                    label="Foydalanishni bilmayman"
                                    name="formHorizontalRadios"
                                    id="formHorizontalRadios5"
                                    />
                                </div>
                            </div>
                            <Form.Group className="has_marg_top">
                                <Button type="button" className="vote_btn">Ovoz berish</Button>
                                <a href="#" className="results_link">Natijalar</a>
                            </Form.Group>
                        </Form>
                    </Col> */}
                    <Col md="4" className="pad_has">
                        <span className="title">So'rovnoma natijasi</span>
                        <Link to="/question_answer/page1" className="all_see">Barcha natijalar<img src={Arrow_r_icon} /></Link>
                        <div className="progress_all">
                        <Form.Label>Yagona interaktiv davlat xizmatlari portali (my.gov.uz)dan foydalanasizmi?</Form.Label>
                            <div className="progress_b">
                                <span>Yo'q foydalanmayman</span>
                                <ProgressBar striped animated now={15} label="15%" />
                            </div>
                            <div className="progress_b">
                                <span>
                                    Ha foydalanaman
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20.722" height="19.789" viewBox="0 0 20.722 19.789">
                                        <g id="Icon_feather-check-square" data-name="Icon feather-check-square" transform="translate(-3 -3)">
                                            <path id="Контур_1" data-name="Контур 1" d="M16.3,16.827a1.5,1.5,0,0,1-1.061-.439l-2.8-2.8a1.5,1.5,0,1,1,2.121-2.121L16.3,13.206l8.267-8.267a1.5,1.5,0,0,1,2.121,2.121l-9.327,9.327A1.5,1.5,0,0,1,16.3,16.827Z" transform="translate(-3.404 -0.567)" fill="#53b36c"/>
                                            <path id="Контур_2" data-name="Контур 2" d="M19.424,22.789H6.365A3.369,3.369,0,0,1,3,19.424V6.365A3.369,3.369,0,0,1,6.365,3h10.26a1.5,1.5,0,0,1,0,3H6.365A.366.366,0,0,0,6,6.365V19.424a.366.366,0,0,0,.365.365H19.424a.366.366,0,0,0,.365-.365V12.895a1.5,1.5,0,1,1,3,0v6.529A3.369,3.369,0,0,1,19.424,22.789Z" fill="#53b36c"/>
                                        </g>
                                    </svg>
                                </span>
                                <ProgressBar variant="success" striped animated now={55} label="55%" />
                            </div>
                            <div className="progress_b">
                                <span>Bir marta foydalanganman</span>
                                <ProgressBar striped animated now={12} label="12%" />
                            </div>
                            <div className="progress_b">
                                <span>Birinchi bor eshitishim</span>
                                <ProgressBar striped animated now={11} label="11%" />
                            </div>
                            <div className="progress_b">
                                <span>Foydalanishni bilmayman</span>
                                <ProgressBar className="red_prog" striped animated now={7} label="7%" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Vac_doc_link;