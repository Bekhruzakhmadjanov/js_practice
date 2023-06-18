import React, { useState } from "react";
import { Accordion, Modal, Breadcrumb } from "react-bootstrap";
import pdf_icon from "../assets/img/pdf_icon.png";
import Mitc_img from "../assets/img/mitc_image.jpg";

const Reg_office =() =>{

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="white_bg">
            <div className="breadcrumb_b">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Vazirlik haqida</Breadcrumb.Item>
                    <Breadcrumb.Item active>Hududiy boshqarmalar</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <span className="inner_title">Hududiy boshqarmalar</span>
            <div className="presidium_text">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Qoraqalpog'iston Respublikasi hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"><img src={Mitc_img} /></span>
                                    <span className="min_full_name">
                                        <p onClick={handleShow}>Baekeev Timur Reimbaevich</p>
                                        <i>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="19.633" height="16.361" viewBox="0 0 19.633 16.361">
                                                    <g id="suitcase" transform="translate(0 -2)">
                                                        <path id="Контур_1" data-name="Контур 1" d="M13.726,5.681a.818.818,0,0,1-.818-.818V3.636H9.636V4.863A.818.818,0,0,1,8,4.863V3.636A1.638,1.638,0,0,1,9.636,2h3.272a1.638,1.638,0,0,1,1.636,1.636V4.863A.818.818,0,0,1,13.726,5.681Z" transform="translate(-1.456)"/>
                                                        <path id="Контур_2" data-name="Контур 2" d="M10.4,14.7a1.685,1.685,0,0,1-.581.1,1.793,1.793,0,0,1-.63-.115L0,11.62v6.242a2.248,2.248,0,0,0,2.25,2.25H17.384a2.248,2.248,0,0,0,2.25-2.25V11.62Z" transform="translate(0 -1.75)"/>
                                                        <path id="Контур_3" data-name="Контур 3" d="M19.633,7.25V9.123l-9.62,3.207a.605.605,0,0,1-.393,0L0,9.123V7.25A2.248,2.248,0,0,1,2.25,5H17.384A2.248,2.248,0,0,1,19.633,7.25Z" transform="translate(0 -0.546)"/>
                                                    </g>
                                                </svg>
                                            </span>
                                            Boshqarma boshlig'i
                                        </i>
                                        <i>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17.578" height="20" viewBox="0 0 17.578 20">
                                                    <g id="location" transform="translate(-31)">
                                                        <g id="Сгруппировать_2" data-name="Сгруппировать 2" transform="translate(33.344)">
                                                        <g id="Сгруппировать_1" data-name="Сгруппировать 1">
                                                            <path id="Контур_4" data-name="Контур 4" d="M97.445,0a6.442,6.442,0,0,0-5.239,10.2L96.952,17.6a.586.586,0,0,0,.986,0L102.7,10.17A6.445,6.445,0,0,0,97.445,0Zm0,9.375a2.93,2.93,0,1,1,2.93-2.93A2.933,2.933,0,0,1,97.445,9.375Z" transform="translate(-91)"/>
                                                        </g>
                                                        </g>
                                                        <g id="Сгруппировать_4" data-name="Сгруппировать 4" transform="translate(31 13.465)">
                                                        <g id="Сгруппировать_3" data-name="Сгруппировать 3">
                                                            <path id="Контур_5" data-name="Контур 5" d="M44.37,344.7l-2.95,4.613a1.937,1.937,0,0,1-3.261,0L35.2,344.7c-2.6.6-4.2,1.7-4.2,3.018,0,2.284,4.528,3.516,8.789,3.516s8.789-1.232,8.789-3.516C48.578,346.4,46.973,345.3,44.37,344.7Z" transform="translate(-31 -344.695)"/>
                                                        </g>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </span>
                                            230103, Nukus. Qoraqalpog'iston ko'chasi 7.
                                        </i>
                                        <i>
                                            <span><svg data-name="483947" xmlns="http://www.w3.org/2000/svg" width="17.2" height="17.2"><path data-name="telephone" d="M15.82 11.29a9.766 9.766 0 0 1-3.067-.488 1.4 1.4 0 0 0-1.363.287l-1.934 1.46a10.688 10.688 0 0 1-4.805-4.8l1.416-1.888a1.39 1.39 0 0 0 .342-1.409 9.78 9.78 0 0 1-.49-3.072A1.382 1.382 0 0 0 4.539 0H1.38A1.382 1.382 0 0 0 0 1.38 15.838 15.838 0 0 0 15.82 17.2a1.382 1.382 0 0 0 1.38-1.38v-3.15a1.382 1.382 0 0 0-1.38-1.38Z"></path></svg></span>
                                            +998 (0) 361 222-14-41 Faks: 222-14-51;
                                        </i>
                                        <i>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18"><path id="clock" data-name="clock" d="M-11474.534-715.414a8.943,8.943,0,0,1-2.636-6.363,8.95,8.95,0,0,1,2.636-6.366,8.949,8.949,0,0,1,6.366-2.636,8.94,8.94,0,0,1,6.362,2.636,8.95,8.95,0,0,1,2.636,6.366,8.943,8.943,0,0,1-2.636,6.363,8.94,8.94,0,0,1-6.362,2.636A8.949,8.949,0,0,1-11474.534-715.414Zm-.867-6.4v.035a7.24,7.24,0,0,0,7.233,7.233,7.241,7.241,0,0,0,7.232-7.233,7.241,7.241,0,0,0-7.232-7.233h-.1A7.238,7.238,0,0,0-11475.4-721.811Zm7.766,5.5a.533.533,0,0,0-.532-.533.534.534,0,0,0-.533.533v.674a6.178,6.178,0,0,1-5.614-5.637h.579a.534.534,0,0,0,.533-.533.534.534,0,0,0-.533-.533h-.576a6.176,6.176,0,0,1,5.539-5.579v.544a.531.531,0,0,0,.53.533.534.534,0,0,0,.533-.533v-.559a6.178,6.178,0,0,1,5.677,5.522h-.64a.534.534,0,0,0-.535.533.534.534,0,0,0,.535.533h.657a6.178,6.178,0,0,1-5.62,5.709Zm-4.006-8.944a.531.531,0,0,0,0,.752l3.1,3.1a.544.544,0,0,0,.378.156.544.544,0,0,0,.377-.156l1.777-1.78a.531.531,0,0,0,0-.755.532.532,0,0,0-.752,0l-1.4,1.4-2.72-2.719a.535.535,0,0,0-.378-.156A.529.529,0,0,0-11471.642-725.25Z" transform="translate(11477.17 730.778)"></path></svg>
                                            </span>
                                            dushanba-juma 09:00 - 12:00
                                        </i>
                                        <i>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="23.154" height="16.28"><path data-name="message" d="M2.036 16.28a2 2 0 0 1-.872-.2l7.023-6.977.993.994a3.4 3.4 0 0 0 4.795 0l.994-.994 7.023 6.977a2.014 2.014 0 0 1-.872.2Zm13.892-8.139 7.023-6.977a2.008 2.008 0 0 1 .2.872v12.211a2.017 2.017 0 0 1-.2.872ZM0 14.246V2.035a2.01 2.01 0 0 1 .206-.872L7.227 8.14.206 15.117a2.019 2.019 0 0 1-.204-.87Zm10.14-5.112L1.164.202a2.043 2.043 0 0 1 .872-.2h19.085a2.053 2.053 0 0 1 .872.2l-8.976 8.932a2.029 2.029 0 0 1-1.439.595 2.028 2.028 0 0 1-1.438-.594Z"></path></svg>
                                            </span>
                                            depnukus@mitc.uz
                                        </i>
                                        <i>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path id="web_site" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048a10.211,10.211,0,0,1,.476,3ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17ZM14.6,21.644A19.676,19.676,0,0,0,17.426,17h3.221a10.031,10.031,0,0,1-6.042,4.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z"></path></svg>
                                            </span>
                                            www.uztelecom.uz
                                        </i>
                                        <i>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="18.89" height="20.734" viewBox="0 0 18.89 20.734"><path id="network" data-name="network" d="M-10777.981-345.263a2.982,2.982,0,0,1,.044-.515l-8.016-4.57a2.985,2.985,0,0,1-1.935.709,3,3,0,0,1-3-3,3,3,0,0,1,3-3,2.985,2.985,0,0,1,1.935.709l8.016-4.57a2.982,2.982,0,0,1-.044-.515,3,3,0,0,1,2.992-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3,2.981,2.981,0,0,1-2.088-.85l-7.9,4.506a2.97,2.97,0,0,1,.088.72,2.97,2.97,0,0,1-.088.72l7.9,4.506a2.98,2.98,0,0,1,2.087-.85,3,3,0,0,1,3,3,3,3,0,0,1-3,3A2.994,2.994,0,0,1-10777.981-345.263Z" transform="translate(10790.884 363.001)"></path></svg>
                                            </span>
                                        </i>
                                    </span>
                                    <ul className="min_list reg_min_list">
                                        <li>
                                            <i>Nizomi</i>
                                            <span>
                                                <a href="#"><img src={pdf_icon} alt="" /></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <Modal show={show} onHide={handleClose} className="modal_b">
                                <Modal.Header closeButton>
                                <Modal.Title></Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <span className="modal_title">
                                        <i className="change_color_grey">Qoraqalpog'iston Respublikasi hududiy boshqarmasi </i>
                                        <span className="left_border_style"></span>
                                        <span className="right_border_style"></span>
                                    </span>
                                    <span className="modal_name_title">Baekeev Timur Reimbaevich</span>
                                    <p>- hududda axborot texnologiyalarini va telekommunikatsiyalarini rivojlantirish dasturining amalga oshirilishini tahlil qilish, litsenziya kelishuviga oid talab va shartlarni amalga oshirish, radiochastotadan foydalanishni tashkil qilish;</p>
                                    <p>- <i>davlat organlarida Milliy axborot tizimi va " elektron hukumat "  platformasini shakllantirish va rivojlantirishni muvofiqlashtirish;</i></p>
                                    <p>- <i>hududda telekommunikatsiya sohasida litsenziya olish, boshqa hujjatlarni almashish, mazkur sohada faoliyat yuritish istagida bo`lgan shaxslar bilan o`zaro munosabatlarni elektron munosabat, interaktiv xizmatlar yordamida amalga oshirilishini ta'minlaydi.</i></p>
                                </Modal.Body>
                            </Modal>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Andijon viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Samatov Ziyodulla Abdumajidovich
                                        <i>Lavozimi - Boshqarma boshlig'i </i>
                                        <i>Manzil - 170121, Andijon, Lermontov ko'chasi, 12 В.</i>
                                        <i>Telefon - +998 (0) 374 226-03-55, Факс: 226-22-90;</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - depandijan@mitc.uz</i>
                                    </span>
                                    <ul className="min_list reg_min_list">
                                        <li>
                                            <i>Nizomi</i>
                                            <span>
                                                <a href="#"><img src={pdf_icon} alt="" /></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Buxoro viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Yaxshiyev Alijon Axrorovich
                                        <i>Lavozimi - Boshqarma boshlig'i </i>
                                        <i>Manzil - 105000, Buxoro, I.Mo'minov ko'chasi, 2.</i>
                                        <i>Telefon - +998 (0) 365 223-04-40, Faks: 223-14-84</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - depbukhara@mitc.uz</i>
                                    </span>
                                    <ul className="min_list reg_min_list">
                                        <li>
                                            <i>Nizomi</i>
                                            <span>
                                                <a href="#"><img src={pdf_icon} alt="" /></a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Jizzax viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Qurbonov G'ulom Karimovich
                                        <i>Lavozimi - Boshqarma boshlig'i </i>
                                        <i>Manzil - 130100, Jizzax, Sh.Rashidov ko'chasi, 46.</i>
                                        <i>Telefon - +998 (0) 372 226-21-84, Faks: 226-62-81</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - depdjizak@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Qashqadaryo viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Aripov Sandjar Kamalovich
                                        <i>Lavozimi - Boshqarma boshlig'i </i>
                                        <i>Manzil - 180100, Qarshi, Mustaqillik ko'chasi 19.</i>
                                        <i>Telefon - +998 (0) 375 221-12-08, Faks: 221-80-00;</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - depkarshi@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Navoiy viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Buronov Alisher Xolmurodovich
                                        <i>Lavozimi - Boshqarma boshlig'i</i>
                                        <i>Manzil - 210100, Navoiy shahar, Islom Karimov ko'chasi. 3-a uy</i>
                                        <i>Telefon - +998 (0) 436 223-82-82, Факс: 223-04-34;</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - depnavoi@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Namangan viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Boboxonov Xurshid Bakirovich
                                        <i>Lavozimi - Boshqarma boshlig'i</i>
                                        <i>Manzil - 160136, Namangan, A.Rahimov ko'chasi, 57.</i>
                                        <i>Telefon - +998 (69) 227-24-24, Faks: 227-24-36;</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - depnamangan@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Samarqand viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Xo'jamberdiyev Dilmurod Erkinovich
                                        <i>Lavozimi - Boshqarma boshlig'i</i>
                                        <i>Manzil - 140103, Samarqand, M.Ulug'bek ko'chasi, 62.</i>
                                        <i>Telefon - +998 66 234-69-69. , Факс: +998 66 234-42-12</i>
                                        <i>Qabul kunlari - seshanba 16:00 - 18:00, juma 15:00 - 17:00</i>
                                        <i>Elektron pochta - depsamarkand@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Surxondaryo viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Shaymardanov Saidaxmad Pardayevich
                                        <i>Lavozimi - Boshqarma boshlig'i</i>
                                        <i>Manzil - 132008, Termiz, F.Xo'jayev ko'chasi. 13.</i>
                                        <i>Telefon - +998 (0) 376 223-46-84 Faks: 223-46-39;</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - deptermez@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Sirdaryo viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Babayev Abduqodir Maxamadjonovich
                                        <i>Lavozimi - Boshqarma boshlig'i</i>
                                        <i>Manzil - 120100, Guliston, Navoiy ko'chasi, 45.</i>
                                        <i>Telefon - +998 (0) 367 235 00 10, Faks: 225-32-99;</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - depgulistan@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>Farg`ona viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Gafurov Yusufbek Ikramovich
                                        <i>Lavozimi - Boshqarma boshlig'i</i>
                                        <i>Manzil - 150100, Farg'ona, Kashtanzor ko'chasi, 35.</i>
                                        <i>Telefon - +998 (0) 373 244-44-44, Faks: 244 44 45</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - depfergana@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="11">
                        <Accordion.Header>Toshkent viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Yo'ldoshev Hursan Hakimovich
                                        <i>Lavozimi - Boshqarma boshlig'i</i>
                                        <i>Manzil - 111500, Nurafshon shahri, Bobur ko'chasi. 84 uy</i>
                                        <i>Telefon - +998 (0) 371 259-70-70</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - deptashkent@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="12">
                        <Accordion.Header>Xorazm viloyati hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Karimov Zafar Qamaraddinovich
                                        <i>Lavozimi - Boshqarma boshlig'i</i>
                                        <i>Manzil - 220106, Urganch, N.Kubro ko'chasi, 7 uy.</i>
                                        <i>Telefon - +998 (0) 362 224-52-52, Faks: 225-57-17</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - depurgench@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="13">
                        <Accordion.Header>Toshkent shahar hududiy boshqarmasi</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Tursunov Nodir Baxodirovich
                                        <i>Lavozimi - Boshqarma boshlig'i</i>
                                        <i>Manzil - Toshkent shahri, Olmazor tumani, Sebzor dahasi 18a-uy.</i>
                                        <i>Telefon - (+998 71) 240-33-88</i>
                                        <i>Qabul kunlari - dushanba-juma 09:00 - 12:00</i>
                                        <i>Elektron pochta - deppoytaxt@mitc.uz</i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    )
}
export default Reg_office;