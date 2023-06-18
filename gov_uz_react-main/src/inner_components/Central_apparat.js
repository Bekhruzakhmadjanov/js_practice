import React, { useState } from 'react';
import {Accordion, Breadcrumb } from "react-bootstrap";

const Central_apparat =() =>{

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
            <span className="inner_title">Markaziy apparat</span>
            <div className="presidium_text">
                <Accordion className="accordion_uodate">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Strategik rivojlantirish boshqarmasi</Accordion.Header>
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
                                                                <i>
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="19.633" height="16.361"><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 1" d="M12.27 3.681a.818.818 0 0 1-.818-.818V1.636H8.18v1.227a.818.818 0 0 1-1.636 0V1.636A1.638 1.638 0 0 1 8.18 0h3.272a1.638 1.638 0 0 1 1.636 1.636v1.227a.818.818 0 0 1-.818.818Z"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 2" d="M10.4 10.95a1.685 1.685 0 0 1-.581.1 1.793 1.793 0 0 1-.63-.115L0 7.87v6.242a2.248 2.248 0 0 0 2.25 2.25h15.134a2.248 2.248 0 0 0 2.25-2.25V7.87Z"></path><path data-name="\u041A\u043E\u043D\u0442\u0443\u0440 3" d="M19.633 4.704v1.873l-9.62 3.207a.605.605 0 0 1-.393 0L0 6.577V4.704a2.248 2.248 0 0 1 2.25-2.25h15.134a2.248 2.248 0 0 1 2.249 2.25Z"></path></svg>
                                                                    </span>
                                                                    Bosh vazir kotibiyati rahbari
                                                                </i>
                                                                <i>
                                                                    <span>
                                                                        <svg data-name="483947" xmlns="http://www.w3.org/2000/svg" width="17.2" height="17.2"><path data-name="telephone" d="M15.82 11.29a9.766 9.766 0 0 1-3.067-.488 1.4 1.4 0 0 0-1.363.287l-1.934 1.46a10.688 10.688 0 0 1-4.805-4.8l1.416-1.888a1.39 1.39 0 0 0 .342-1.409 9.78 9.78 0 0 1-.49-3.072A1.382 1.382 0 0 0 4.539 0H1.38A1.382 1.382 0 0 0 0 1.38 15.838 15.838 0 0 0 15.82 17.2a1.382 1.382 0 0 0 1.38-1.38v-3.15a1.382 1.382 0 0 0-1.38-1.38Z"></path></svg>
                                                                    </span>
                                                                    <a target="_blank" href="tel:+99871 238-41-36">+99871 238-41-36</a>
                                                                </i>
                                                                <i>
                                                                    <span>
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="23.154" height="16.28"><path data-name="message" d="M2.036 16.28a2 2 0 0 1-.872-.2l7.023-6.977.993.994a3.4 3.4 0 0 0 4.795 0l.994-.994 7.023 6.977a2.014 2.014 0 0 1-.872.2Zm13.892-8.139 7.023-6.977a2.008 2.008 0 0 1 .2.872v12.211a2.017 2.017 0 0 1-.2.872ZM0 14.246V2.035a2.01 2.01 0 0 1 .206-.872L7.227 8.14.206 15.117a2.019 2.019 0 0 1-.204-.87Zm10.14-5.112L1.164.202a2.043 2.043 0 0 1 .872-.2h19.085a2.053 2.053 0 0 1 .872.2l-8.976 8.932a2.029 2.029 0 0 1-1.439.595 2.028 2.028 0 0 1-1.438-.594Z"></path></svg>
                                                                    </span>
                                                                    <a target="_blank" href="mailto:d.alikhodjaev@mitc.uz">d.alikhodjaev@mitc.uz</a>
                                                                </i>
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
                        <Accordion.Header>Inson resurslarini boshqarish va rivojlantirish bo'limi</Accordion.Header>
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
                        <Accordion.Header>Ichki audit, moliyaviy va komplayens nazorat bo'limi</Accordion.Header>
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
                        <Accordion.Header>Axborot xizmati</Accordion.Header>
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
                    <Accordion.Item eventKey="4">
                        <Accordion.Header>Birinchi bo'lim</Accordion.Header>
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
                    <Accordion.Item eventKey="5">
                        <Accordion.Header>Vazir yordamchisi</Accordion.Header>
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
                    <Accordion.Item eventKey="6">
                        <Accordion.Header>Vazir maslahatchilari</Accordion.Header>
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
                    <Accordion.Item eventKey="7">
                        <Accordion.Header>Iqtisodiyot boshqarmasi</Accordion.Header>
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
                    <Accordion.Item eventKey="8">
                        <Accordion.Header>Buxgalteriya hisobi bo'limi</Accordion.Header>
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
                    <Accordion.Item eventKey="9">
                        <Accordion.Header>Vazir kotibiyati boshlig'i</Accordion.Header>
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
                    <Accordion.Item eventKey="10">
                        <Accordion.Header>Axborot-tahlil va ijro intizomi boshqarmasi</Accordion.Header>
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
            </div>
        </div>
    )
}

export default Central_apparat;