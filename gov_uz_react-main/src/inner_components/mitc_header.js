import React, { useState } from "react";
import { Button, Col, Container, Form, Navbar, Nav, NavDropdown, FormControl, FormGroup, Row } from "react-bootstrap";
import Masonry from "react-masonry-css";
import Icon_search from "../assets/img/search_n_icon2.png";
import { Affix } from "rsuite";
import { Link } from "react-router-dom";

const Mitc_header =() =>{

    const [active, setActive] = useState(false)
    const [show, setShow] = useState(false)
    const [line, setLine] = useState(false);
    const breakpointColumnsObj = {
        default: 5,
        1100: 3,
        700: 2,
        500: 1
      };
    
    return(
        <Container className="change_width">
            <Affix className="change_z_index" top={0}>
                <div className="has_pos">
                    <div className="min_com_header">
                        <Row>
                            <Col md="7">
                                <a href="#" className="akt_logo">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="114.236" height="114.269" viewBox="0 0 114.236 114.269">
                                            <path id="Объединение_6" data-name="Объединение 6" d="M-6580.963-39.6l.055-50.068a7.4,7.4,0,0,0,3.349-1.378l50.241,50.306h-21.75l-16.518,16.518Zm-24.511-1.18V-62.471l20.063-27.9a7.337,7.337,0,0,0,2.225.721l-.057,48.872Zm29.52-51.865A7.308,7.308,0,0,0-6574.593-96h50.068l15.346,15.354L-6525.7-64.133v21.741ZM-6622-80.665l15.346-15.346h17.222a7.473,7.473,0,0,0,2.169,4.3l-19.153,26.625Zm16.549-38.244,17.412,17.412a7.552,7.552,0,0,0-1.361,3.214l-16.051.023Zm30.835,20.618a7.449,7.449,0,0,0-.72-2.177l27.686-20.079h21.954v22.256Zm-6.275-6.166.015-17.325,15.291-15.291,15.481,15.489-26.577,19.265A7.453,7.453,0,0,0-6580.892-104.457Zm-22.96-16.091h20.681v16.1a7.487,7.487,0,0,0-3.269,1.313Z" transform="translate(6622.708 137.781)" fill="#244192" />
                                        </svg>
                                    </span>
                                    O'zbekiston Respublikasi Raqamli texnologiyalar vazirligi
                                </a>
                            </Col>
                            <Col md="5">
                                <div className="mitc_d_flex">
                                    <Form className={active ? "mitc_search mitc_search_active" : "mitc_search"}>
                                        <FormGroup className="mitc_form_group">
                                            <FormControl type="text" placeholder="Izlash..."></FormControl>
                                            <Button type="button" className="btn" onClick={() => setActive(!active)}><img src={Icon_search} /></Button>
                                        </FormGroup>
                                    </Form>
                                    <div className="hotlines">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24.395" height="91.45" viewBox="0 0 24.395 91.45">
                                                <g id="Сгруппировать_11276" data-name="Сгруппировать 11276" transform="translate(-1132.704 -124.5)">
                                                    <path id="Icon_awesome-phone-alt" data-name="Icon awesome-phone-alt" d="M23.7,17.239l-5.336-2.287a1.144,1.144,0,0,0-1.334.329l-2.363,2.887A17.661,17.661,0,0,1,6.223,9.725L9.11,7.362a1.141,1.141,0,0,0,.329-1.334L7.152.692A1.151,1.151,0,0,0,5.842.029L.886,1.173A1.144,1.144,0,0,0,0,2.287,22.106,22.106,0,0,0,22.108,24.4a1.144,1.144,0,0,0,1.115-.886l1.144-4.955a1.157,1.157,0,0,0-.668-1.315Z" transform="translate(1132.704 158.027)" fill="#244192"/>
                                                    <line id="Линия_245" data-name="Линия 245" y2="25.751" transform="translate(1144.763 125.5)" fill="none" />
                                                    <line id="Линия_246" data-name="Линия 246" y2="25.751" transform="translate(1144.763 189.199)" fill="none" />
                                                </g>
                                            </svg>
                                        </span>
                                        <p>Ishonch telefonlari</p>
                                        <a className="hotline_phone">11-99</a>
                                        <a href="#">Barcha raqamlar</a>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                    <div className="head_menu">
                        <Navbar bg="light" expand="lg">
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <NavDropdown title="О министерстве" id="basic-nav-dropdown" className="active">
                                        <NavDropdown.Item href="#">О министерстве</NavDropdown.Item>
                                        <NavDropdown.Item href="#" className="active">Rahbariyat</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Hay'at</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Vazirlik tuzilmasi</NavDropdown.Item>
                                        <NavDropdown.Item><Link to="/first_menu_mitc/page1">Markaziy apparat</Link></NavDropdown.Item>
                                        {/* <NavDropdown.Item href="/about_ministry/page6">Hududiy boshqarmalar</NavDropdown.Item> */}
                                        <NavDropdown.Item><Link to="/about_ministry/page6">Hududiy boshqarmalar</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#">Vazirlikka murojaat</NavDropdown.Item>
                                    </NavDropdown>
                                    <Nav.Link href="#home">Деятельность</Nav.Link>
                                    <Nav.Link href="#link">Государственные услуги</Nav.Link>
                                    <Nav.Link href="#link">Документы</Nav.Link>
                                    <Nav.Link href="#link">Открытые данные</Nav.Link>
                                    <NavDropdown title="Пресс-центр" id="basic-nav-dropdown2">
                                        <NavDropdown.Item href="#">Новости Министерства</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Пресс-релизы</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Пресс-конференции</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Заседания</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Заявления и выступления руководства</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Календарь событий</NavDropdown.Item>
                                        <NavDropdown.Item href="#">Контакты пресс-службы</NavDropdown.Item>
                                    </NavDropdown>
                                    <NavDropdown title="Контакты" id="basic-nav-dropdown3">
                                        <NavDropdown.Item><Link to="/ministry_contact/page1">Контакты</Link></NavDropdown.Item>
                                        <NavDropdown.Item href="#">Обращения граждан</NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                        <div className="right_map" onClick={() => setLine(!line)}><div className={line ? 'change_line change_line_active' : 'change_line'} onClick={() => setShow(!show)}><span className="first_line"></span><span className="second_line"></span><span className="third_line"></span></div></div>
                    </div>
                    <div className={show ? "mitc_map_site mitc_map_site_active" : "mitc_map_site"}>
                        <span className="map_site_title">Bosh sahifa bo'limlarining tuzilishi</span>
                        <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
                            <ul className="map_site_list">
                                <li>― Vazirlik haqida:</li>
                                <li><a href="#">Vazirlik haqida</a></li>
                                <li><a href="#">Hay`at</a></li>
                                <li><a href="#">Rahbariyat</a></li>
                                <li><a href="#">Vazirlik tuzilmasi</a></li>
                                <li><a href="#">Markaziy apparat</a></li>
                                <li><a href="#">Hududiy boshqarmalar</a></li>
                                <li><a href="#">Vazirlikka murojaat</a></li>
                                <li><a href="#">Tizimdagi tashkilotlar</a></li>
                            </ul>
                            <ul className="map_site_list">
                                <li>― Boshqaruv:</li>
                                <li><a href="#" target="_blank">Litsenziyalash</a></li>
                                <li><a href="#" target="_blank">Radiochastota spektridan foydalanishni boshqarish</a></li>
                                <li><a href="#" target="_blank">Davlat nazorati</a></li>
                                <li><a href="#" target="_blank">Sertifikatlashtirish</a></li>
                                <li><a href="#" target="_blank">Standartlashtirish</a></li>
                            </ul>
                            <ul className="map_site_list">
                                <li>― Axborot xizmati:</li>
                                <li><a href="#" target="_blank">Vazirlik yangiliklari</a></li>
                                <li><a href="#" target="_blank">Аnons</a></li>
                                <li><a href="#" target="_blank">E'lonlar</a></li>
                                <li><a href="#" target="_blank">Rahbariyatning chiqish va bayonotlari</a></li>
                                <li><a href="#" target="_blank">Soha nashrlari</a></li>
                                <li><a href="#" target="_blank">Nashrlar</a></li>
                                <li><a href="#">IT-xabarlari</a></li>
                                <li><a href="#">Videolavhalar</a></li>
                                <li><a href="#">Ommaviy tadbirlar anonsi</a></li>
                                <li><a href="#">OAV vakillarini akkreditasiyadan o'tkazish</a></li>
                                <li><a href="#">Axborot xizmati bilan bog'lanish</a></li>
                                <li><a href="#">Yoshlar siyosati</a></li>
                                <li><a href="#">Korrupsiyaga qarshi kurash</a></li>
                            </ul>
                            <ul className="map_site_list">
                                <li>― Faoliyat:</li>
                                <li><a href="#" target="_blank">Telekommunikatsiya</a></li>
                                <li><a href="#" target="_blank">Harakatlar strategiyasi</a></li>
                                <li><a href="#" target="_blank">Axborot texnologiyalari</a></li>
                                <li><a href="#" target="_blank">Pochta</a></li>
                                <li><a href="#" target="_blank">AKTda ta'lim</a></li>
                                <li><a href="#">Xalqaro aloqalar</a></li>
                                <li><a href="#">Jamoatchilik maslahat kengashi</a></li>
                                <li><a href="#">Davlat xizmatlari reestri</a></li>
                                <li><a href="#">AKTni rivojlantrish jamg`armasi</a></li>
                                <li><a href="#">Hisobotlar</a></li>
                                <li><a href="#">Budjet qonuniga muvofiq ochiq raqamlar</a></li>
                                <li><a href="#">Korrupsiyaga qarshi kurash</a></li>
                                <li><a href="#">AKTga investitsiyalar</a></li>
                                <li><a href="#">Interaktiv davlat xizmatlari ro'yxati</a></li>
                                <li><a href="#">Xodimlarning odob-axloq qoidalariga amal qilishi</a></li>
                                <li><a href="#">Murojaatlar tahlili</a></li>
                                <li><a href="#">Gender tengligi</a></li>
                            </ul>
                            <ul className="map_site_list">
                                <li>― Hujjatlar:</li>
                                <li><a href="#" target="_blank">Qonunlar</a></li>
                                <li><a href="#" target="_blank">Prezident qarorlari va farmonlari</a></li>
                                <li><a href="#">Hukumat qarori va farmoyishlari</a></li>
                                <li><a href="#">Tadbirkorlikka oid hujjatlar</a></li>
                                <li><a href="#">Adliya vazirligi tomonidan ro'yxatga olingan me'yoriy hujjatlar</a></li>
                                <li><a href="#">O'z kuchini yo'qotgan hujjatlar</a></li>
                                <li><a href="#">Normativ huquqiy hujjatlar loyihalari</a></li>
                            </ul>
                            <ul className="map_site_list">
                                <li>― Elektron hukumat:</li>
                                <li><a href="#" target="_blank">Elektron hukumatga oid me'yoriy-huquqiy hujjatlar</a></li>
                                <li><a href="#">Elektron hukumat bo'yicha loyihalar</a></li>
                                <li><a href="#">O'zbekistonda elektron hukumatni joriy etish va rivojlantirish holati</a></li>
                            </ul>
                            <ul className="map_site_list">
                                <li>― Ochiq ma'lumotlar:</li>
                                <li><a href="#" target="_blank">AKT sohasidagi moliyaviy yo'nalishdagi ochiq ma'lumotlar</a></li>
                                <li><a href="#" target="_blank">AKT sohasining budjet qonunchiligiga muvofiq ochiq ma'lumotlar</a></li>
                                <li><a href="#" target="_blank">AKT sohasining ijtimoiy ahamiyatga oid ochiq ma'lumotlar</a></li>
                                <li><a href="#" target="_blank">AKT vazirligi korxona va tashkilotlarining moliyaviy budjeti to'g'risidagi ochiq ma'lumotlar</a></li>
                                <li><a href="#" target="_blank">Ochiq ma'lumotlar reyestri</a></li>
                            </ul>
                        </Masonry>
                    </div>
                </div>
            </Affix>
            <ul className="social_network">
                <li>
                    <a href="https://www.youtube.com/c/MinistryofICTofUzbekistan" target="_blank">
                        <svg id="youtube" xmlns="http://www.w3.org/2000/svg" width="28.42" height="28.42" viewBox="0 0 28.42 28.42">
                            <path id="Контур_19" data-name="Контур 19" d="M224.113,213.714l4.926-2.837-4.926-2.837Zm0,0" transform="translate(-211.832 -196.666)"/>
                            <path id="Контур_20" data-name="Контур 20" d="M14.21,0A14.21,14.21,0,1,0,28.42,14.21,14.212,14.212,0,0,0,14.21,0Zm8.879,14.225a23.454,23.454,0,0,1-.366,4.272,2.225,2.225,0,0,1-1.565,1.565,54.01,54.01,0,0,1-6.948.366,52.077,52.077,0,0,1-6.948-.38A2.225,2.225,0,0,1,5.7,18.481a23.35,23.35,0,0,1-.366-4.271A23.438,23.438,0,0,1,5.7,9.939a2.27,2.27,0,0,1,1.565-1.58,54.009,54.009,0,0,1,6.948-.366,51.966,51.966,0,0,1,6.948.38,2.225,2.225,0,0,1,1.565,1.565A22.257,22.257,0,0,1,23.089,14.225Zm0,0"/>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.facebook.com/mininfocom" target="_blank">
                        <svg id="Facebook" xmlns="http://www.w3.org/2000/svg" width="28.42" height="28.578" viewBox="0 0 28.42 28.578">
                            <defs>
                                <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 0 0">
                                <image/>
                                </pattern>
                            </defs>
                            <g id="Vector_Smart_Object" data-name="Vector Smart Object" transform="translate(0 0)">
                                <g id="Vector_Smart_Object-2" data-name="Vector Smart Object" transform="translate(0.076 0)">
                                <path id="Контур_7" data-name="Контур 7" d="M67.891,79.92A14.135,14.135,0,1,0,82.025,94.055,14.134,14.134,0,0,0,67.891,79.92Zm4.151,8.575H70.078c-.694,0-.838.284-.838,1v1.732h2.8l-.27,3.042H69.24v9.085H65.612V94.308H63.725v-3.08h1.887V88.8c0-2.276,1.217-3.465,3.917-3.465h2.512Z" transform="translate(-53.756 -79.92)"/>
                                </g>
                                <path id="Color_Overlay" data-name="Color Overlay" d="M0,14.21A14.21,14.21,0,1,1,14.21,28.42,14.21,14.21,0,0,1,0,14.21Zm10.022.255h1.9v9.1h3.647V14.426h2.545l.271-3.058H15.567V9.626c0-.721.145-1.006.842-1.006h1.974V5.446H15.857c-2.714,0-3.938,1.2-3.938,3.484v2.438h-1.9Z" transform="translate(0 0.157)"/>
                            </g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/mitc.uz/" target="_blank">
                        <svg id="Instagram" xmlns="http://www.w3.org/2000/svg" width="28.933" height="28.689" viewBox="0 0 28.933 28.689">
                            <defs>
                                <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 0 0">
                                <image/>
                                </pattern>
                            </defs>
                            <g id="Delete_this_layer" data-name="Delete this layer" transform="translate(0 0)">
                                <g id="Delete_this_layer-2" data-name="Delete this layer" transform="translate(0.663 0.42)">
                                <g id="Сгруппировать_3" data-name="Сгруппировать 3" transform="translate(0 0)">
                                    <path id="Контур_9" data-name="Контур 9" d="M235.087,95.063a2.718,2.718,0,0,0-.643-1.008,2.662,2.662,0,0,0-.988-.655,4.682,4.682,0,0,0-1.6-.3c-.906-.042-1.178-.051-3.473-.051s-2.566.009-3.473.051a4.679,4.679,0,0,0-1.6.3,2.659,2.659,0,0,0-.988.655,2.723,2.723,0,0,0-.643,1.008,4.932,4.932,0,0,0-.3,1.627c-.041.924-.05,1.2-.05,3.541s.009,2.617.05,3.541a4.935,4.935,0,0,0,.3,1.627,2.723,2.723,0,0,0,.643,1.008,2.659,2.659,0,0,0,.988.655,4.679,4.679,0,0,0,1.6.3c.906.042,1.178.051,3.473.051s2.566-.009,3.473-.051a4.682,4.682,0,0,0,1.6-.3,2.662,2.662,0,0,0,.988-.655,2.718,2.718,0,0,0,.643-1.008,4.925,4.925,0,0,0,.3-1.627c.041-.924.05-1.2.05-3.541s-.009-2.617-.05-3.541A4.923,4.923,0,0,0,235.087,95.063Zm-6.7,9.668a4.5,4.5,0,1,1,4.413-4.5A4.457,4.457,0,0,1,228.388,104.731Zm4.587-8.126a1.052,1.052,0,1,1,1.031-1.051A1.041,1.041,0,0,1,232.975,96.6Z" transform="translate(-214.239 -85.82)"/>
                                    <path id="Контур_10" data-name="Контур 10" d="M230.827,99.8a2.921,2.921,0,1,0,2.865,2.921A2.893,2.893,0,0,0,230.827,99.8Z" transform="translate(-216.678 -88.293)"/>
                                    <path id="Контур_11" data-name="Контур 11" d="M223.072,79.92a14.135,14.135,0,1,0,14.135,14.135A14.135,14.135,0,0,0,223.072,79.92Zm8.138,17.8a6,6,0,0,1-.38,1.984,4.177,4.177,0,0,1-2.39,2.39,6,6,0,0,1-1.984.38c-.872.04-1.15.049-3.37.049s-2.5-.009-3.369-.049a6,6,0,0,1-1.984-.38,4.179,4.179,0,0,1-2.39-2.39,6,6,0,0,1-.38-1.984c-.04-.871-.049-1.15-.049-3.369s.009-2.5.049-3.369a6,6,0,0,1,.38-1.984,4.179,4.179,0,0,1,2.39-2.39,6,6,0,0,1,1.984-.38c.872-.04,1.15-.049,3.369-.049s2.5.009,3.37.049a6,6,0,0,1,1.984.38,4.177,4.177,0,0,1,2.39,2.39,6,6,0,0,1,.38,1.984c.04.872.049,1.15.049,3.369S231.249,96.848,231.21,97.72Z" transform="translate(-208.937 -79.92)"/>
                                </g>
                                </g>
                                <path id="Color_Overlay" data-name="Color Overlay" d="M0,14.287A14.287,14.287,0,1,1,14.287,28.573,14.287,14.287,0,0,1,0,14.287ZM10.9,6.376a6.065,6.065,0,0,0-2,.384A4.224,4.224,0,0,0,6.475,9.175a6.063,6.063,0,0,0-.384,2c-.04.881-.049,1.162-.049,3.405s.009,2.525.049,3.405a6.065,6.065,0,0,0,.384,2,4.224,4.224,0,0,0,2.416,2.416,6.064,6.064,0,0,0,2,.384c.881.04,1.162.05,3.405.05s2.525-.009,3.406-.05a6.064,6.064,0,0,0,2-.384A4.222,4.222,0,0,0,22.127,20a6.064,6.064,0,0,0,.384-2c.04-.881.05-1.162.05-3.405s-.009-2.524-.05-3.405a6.062,6.062,0,0,0-.384-2A4.222,4.222,0,0,0,19.712,6.76a6.065,6.065,0,0,0-2-.384c-.881-.04-1.162-.05-3.406-.05S11.777,6.335,10.9,6.376Zm.068,14.933a4.574,4.574,0,0,1-1.534-.284,2.736,2.736,0,0,1-1.568-1.568,4.574,4.574,0,0,1-.284-1.534c-.04-.871-.048-1.132-.048-3.338s.008-2.467.048-3.338a4.572,4.572,0,0,1,.284-1.534A2.736,2.736,0,0,1,9.43,8.147a4.574,4.574,0,0,1,1.534-.284c.871-.04,1.132-.048,3.338-.048s2.467.008,3.338.048a4.577,4.577,0,0,1,1.534.284A2.734,2.734,0,0,1,20.74,9.714a4.562,4.562,0,0,1,.284,1.534c.04.871.048,1.132.048,3.338s-.008,2.467-.048,3.338a4.564,4.564,0,0,1-.284,1.534,2.734,2.734,0,0,1-1.567,1.568,4.577,4.577,0,0,1-1.534.284c-.871.04-1.132.048-3.338.048S11.835,21.349,10.964,21.309Zm-.9-6.723A4.241,4.241,0,1,0,14.3,10.344,4.242,4.242,0,0,0,10.06,14.586Zm7.659-4.409a.991.991,0,1,0,.991-.991A.991.991,0,0,0,17.719,10.177Zm-6.171,4.409A2.753,2.753,0,1,1,14.3,17.339,2.753,2.753,0,0,1,11.548,14.586Z" transform="translate(0)"/>
                            </g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/uz_mitc" target="_blank">
                        <svg id="Twitter" xmlns="http://www.w3.org/2000/svg" width="28.573" height="28.964" viewBox="0 0 28.573 28.964">
                            <defs>
                                <pattern id="pattern" preserveAspectRatio="none" width="100%" height="100%" viewBox="0 0 0 0">
                                <image/>
                                </pattern>
                            </defs>
                            <g id="Vector_Smart_Object" data-name="Vector Smart Object" transform="translate(0 0)">
                                <g id="Vector_Smart_Object-2" data-name="Vector Smart Object" transform="translate(0.142 0.695)">
                                <path id="Контур_5" data-name="Контур 5" d="M144.56,79.92a14.135,14.135,0,1,0,14.135,14.135A14.135,14.135,0,0,0,144.56,79.92Zm7.37,11.59a9.267,9.267,0,0,1-14.256,8.229A6.549,6.549,0,0,0,142.5,98.39a3.26,3.26,0,0,1-3.043-2.263,3.259,3.259,0,0,0,1.471-.056,3.262,3.262,0,0,1-2.614-3.236,3.244,3.244,0,0,0,1.476.408,3.262,3.262,0,0,1-1.008-4.35,9.246,9.246,0,0,0,6.716,3.4,3.26,3.26,0,0,1,5.553-2.972,6.528,6.528,0,0,0,2.069-.791,3.263,3.263,0,0,1-1.432,1.8,6.509,6.509,0,0,0,1.871-.513A6.6,6.6,0,0,1,151.931,91.51Z" transform="translate(-130.425 -79.92)"/>
                                </g>
                                <path id="Color_Overlay" data-name="Color Overlay" d="M0,14.287A14.287,14.287,0,1,1,14.287,28.573,14.287,14.287,0,0,1,0,14.287Zm12.375,7.225a9.315,9.315,0,0,0,9.361-9.8,6.671,6.671,0,0,0,1.643-1.7,6.58,6.58,0,0,1-1.891.518,3.3,3.3,0,0,0,1.448-1.822,6.6,6.6,0,0,1-2.091.8,3.3,3.3,0,0,0-5.612,3A9.345,9.345,0,0,1,8.445,9.068a3.3,3.3,0,0,0,1.019,4.4,3.278,3.278,0,0,1-1.492-.412,3.3,3.3,0,0,0,2.642,3.271,3.294,3.294,0,0,1-1.487.056A3.3,3.3,0,0,0,12.2,18.668a6.619,6.619,0,0,1-4.876,1.363A9.321,9.321,0,0,0,12.375,21.511Z"/>
                            </g>
                        </svg>
                    </a>
                </li>
                <li>
                    <a href="https://t.me/mitcuz" target="_blank">
                        <svg id="Artboard" xmlns="http://www.w3.org/2000/svg" width="28.42" height="28.42" viewBox="0 0 28.42 28.42">
                            <path id="Контур_18" data-name="Контур 18" d="M14.21,0A14.21,14.21,0,1,0,28.42,14.21,14.211,14.211,0,0,0,14.21,0ZM20.8,9.664c-.213,2.246-1.139,7.7-1.609,10.216-.2,1.066-.592,1.422-.971,1.457-.825.076-1.452-.546-2.251-1.069-1.25-.819-1.957-1.33-3.171-2.13-1.4-.925-.494-1.433.306-2.263.21-.218,3.845-3.525,3.916-3.825a.288.288,0,0,0-.066-.251.328.328,0,0,0-.294-.028q-.188.043-5.994,3.961a2.7,2.7,0,0,1-1.542.57,10.082,10.082,0,0,1-2.208-.523c-.889-.289-1.6-.443-1.536-.933q.048-.384,1.056-.785,6.213-2.707,8.287-3.57c3.947-1.641,4.766-1.927,5.3-1.936C20.69,8.543,20.851,9.1,20.8,9.664Z"/>
                        </svg>
                    </a>
                </li>
            </ul>
        </Container>
    )
}

export default Mitc_header;