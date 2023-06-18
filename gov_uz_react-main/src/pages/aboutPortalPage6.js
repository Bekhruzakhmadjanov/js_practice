import React, { useState } from 'react';
import { Breadcrumb, Accordion } from "react-bootstrap";
import image1 from "../assets/img/user_image_1.jpg";
import image2 from "../assets/img/user_image_2.jpg";
import image3 from "../assets/img/user_image_3.jpg";
import image4 from "../assets/img/user_image_4.jpg";

const AboutPortalPage6=() =>{

    const [active, setActive] = useState(false);

    return(
        <div className="white_bg">
            <div className="breadcrumb_b">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Hukumat</Breadcrumb.Item>
                    <Breadcrumb.Item active>Kotibiyatlar</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <span className="inner_title">Kotibiyatlar</span>
            <div className="presidium_text">
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Bosh vazir kotibiyati</Accordion.Header>
                        <Accordion.Body>
                            <div className="ministry_box">
                                <div className="d_flex">
                                    <span className="ministry_img"><img src={image1} alt="" /></span>
                                    <span className="min_full_name">
                                        Djurabaev Abdurashid Abduvoxidovich
                                        <i>Bosh vazir kotibiyati rahbari </i>
                                    </span>
                                </div>
                                <span className={active ? 'deputy_in_b deputy_in_b_active' : 'deputy_in_b'} onClick={() => setActive(!active)}>O'rinbosarlari</span>
                                <div className={active ? 'collapse_deputy_box collapse_deputy_box_active' : 'collapse_deputy_box'}>
                                    <div className="d_flex">
                                        <span className="ministry_img"><img src={image2} alt="" /></span>
                                        <span className="min_full_name">
                                            Toychiyev Nusratbek Davrankulovich
                                            <i>Bosh vazir kotibiyati rahbarining birinchi o'rinbosari</i>
                                        </span>
                                    </div>
                                    <div className="d_flex">
                                        <span className="ministry_img"><img src={image3} alt="" /></span>
                                        <span className="min_full_name">
                                            Kalandarov Davron Narimovich
                                            <i>Bosh vazir kotibiyati rahbarining o'rinbosari</i>
                                        </span>
                                    </div>
                                    <div className="d_flex">
                                        <span className="ministry_img"><img src={image4} alt="" /></span>
                                        <span className="min_full_name">
                                            Sadikov Shuxrat Muxamadjanovich
                                            <i>Bosh vazir kotibiyati rahbarining o'rinbosari</i>
                                        </span>
                                    </div>
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
                    <Accordion.Item eventKey="2">
                        <Accordion.Header> Bosh vazir o'rinbosari D.A.Kuchkarovning kotibiyati</Accordion.Header>
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
                        <Accordion.Header>Bosh vazir o'rinbosari J.A.Xodjayevning kotibiyati</Accordion.Header>
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
                        <Accordion.Header>Bosh vazir o'rinbosari Z.B.Maxkamovaning kotibiyati</Accordion.Header>
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
export default AboutPortalPage6;