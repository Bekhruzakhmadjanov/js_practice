import React, { useState } from 'react';
import {Accordion, Breadcrumb } from "react-bootstrap";

const AboutPortalPage5 =() =>{

    const [active, setActive] = useState(false);

    return(
        <div className="white_bg">
            <div className="breadcrumb_b">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Hukumat</Breadcrumb.Item>
                    <Breadcrumb.Item active>Departamentlar</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <span className="inner_title">Departamentlar</span>
            <div className="presidium_text">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Ma'naviyat va davlat tilini rivojlantirish masalalari departamenti</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Shukurov Sobir Sayfiyevich
                                        <i>Departament mudiri </i>
                                    </span>
                                </div>
                                <span className={active ? 'deputy_in_b deputy_in_b_active' : 'deputy_in_b'} onClick={() => setActive(!active)}>Bo'limlari</span>
                                <div className='presidium_text'>
                                    <div className={active ? 'accordion_box accordion_box_active' : 'accordion_box'}>
                                        <Accordion>
                                            <Accordion.Item eventKey="0">
                                                <Accordion.Header>Bosh vazir kotibiyati</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="ministry_box">
                                                        <div className="d_flex">
                                                            <span className="ministry_img">
                                                                {/* <img src={image1} alt="" /> */}
                                                                </span>
                                                            <span className="min_full_name">
                                                                Djurabaev Abdurashid Abduvoxidovich
                                                                <i>Bosh vazir kotibiyati rahbari </i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                            <Accordion.Item eventKey="1">
                                                <Accordion.Header>Bosh vazir o'rinbosari A.J.Ramatovning kotibiyati</Accordion.Header>
                                                <Accordion.Body>
                                                    <div className="ministry_box">
                                                        <div className="d_flex">
                                                            <span className="ministry_img"></span>
                                                            <span className="min_full_name">
                                                                Rajabboyev Sharof Rahimberdiyevich
                                                                <i>Departament mudiri </i>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    </div>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>IT-texnologiyalar, telekommunikatsiyalar va ilmiy faoliyatni rivojlantirish masalalari departamenti</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Rajabboyev Sharof Rahimberdiyevich
                                        <i>Departament mudiri </i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Geologiya, energetika, sanoat va uning bazaviy tarmoqlarini rivojlantirish masalalari departamenti</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Jumanazarov Akmal Ro`ziqulovich
                                        <i>Departament mudiri </i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Xorijda vaqtinchalik mehnat faoliyatini amalga oshirayotgan O'zbekiston Respublikasi fuqarolari huquqlarini himoya qilish va xalqaro iqtisodiy hamkorlik masalalari departamenti</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"></span>
                                    <span className="min_full_name">
                                        Sanayev Bolidin Elamonovich
                                        <i>Departament mudiri </i>
                                    </span>
                                </div>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
                {/* <ul className="cab_min_list">
                    <li>Ma'naviyat va davlat tilini rivojlantirish masalalari departamenti</li>
                    <li>IT-texnologiyalar, telekommunikatsiyalar va ilmiy faoliyatni rivojlantirish masalalari departamenti</li>
                    <li>Geologiya, energetika, sanoat va uning bazaviy tarmoqlarini rivojlantirish masalalari departamenti</li>
                    <li>Xorijda vaqtinchalik mehnat faoliyatini amalga oshirayotgan O'zbekiston Respublikasi fuqarolari huquqlarini himoya qilish va xalqaro iqtisodiy hamkorlik masalalari departamenti</li>
                </ul> */}
            </div>
        </div>
    )
} 
export default AboutPortalPage5;