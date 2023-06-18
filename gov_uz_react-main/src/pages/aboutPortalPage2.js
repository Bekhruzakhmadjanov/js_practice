import React, { useState } from "react";
import { Breadcrumb, Modal, Button } from "react-bootstrap";
import min_img1 from "../assets/img/image_min.jpg";
import min_img2 from "../assets/img/image_min2.jpg";
import min_img3 from "../assets/img/image_min3.jpg";

const AboutPortalPage2=() =>{
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return(
        <div className="white_bg">
            <div className="breadcrumb_b">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Hukumat</Breadcrumb.Item>
                    <Breadcrumb.Item active>Vаzirlаr Mаhkаmаsining tаrkibi</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <span className="inner_title">Vаzirlаr Mаhkаmаsining tаrkibi</span>
            <div className="ministry_box">
                <div className="d_flex">
                    <span className="ministry_img"><img src={min_img1} /></span>
                    <span className="min_full_name">
                        Aripov Abdulla Nig'matovich
                        <i>O'zbekiston Respublikasi bosh vaziri </i>
                    </span>
                    <ul className="min_list">
                        <li>
                            <a href="#" onClick={handleShow}>
                                <span>
                                    <svg id="bold" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.25 24h-12.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-1.517 1.233-2.75 2.75-2.75h12.5c1.517 0 2.75 1.233 2.75 2.75v18.5c0 1.517-1.233 2.75-2.75 2.75zm-12.5-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h12.5c.689 0 1.25-.561 1.25-1.25v-18.5c0-.689-.561-1.25-1.25-1.25z"/><path d="m16.25 16h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m16.25 20h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><circle cx="12" cy="5" r="2"/><path d="m15.25 12h-6.5c-.414 0-.75-.336-.75-.75v-.5c0-1.517 1.233-2.75 2.75-2.75h2.5c1.517 0 2.75 1.233 2.75 2.75v.5c0 .414-.336.75-.75.75z"/></svg>
                                </span>
                                Biografiya
                            </a>
                        </li>
                        <li>
                            <span>
                                <svg version="1.1" id="Слой_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path class="st0" d="M3.6,20.4C1.3,18.2,0,15.2,0.1,12c0-3.2,1.3-6.2,3.5-8.4C5.8,1.3,8.8,0,12,0.1c3.2,0,6.2,1.3,8.4,3.5
                                        c2.2,2.2,3.5,5.3,3.5,8.4c0,3.2-1.3,6.2-3.5,8.4c-2.2,2.2-5.3,3.5-8.4,3.5C8.8,24,5.8,22.7,3.6,20.4z M2.4,12L2.4,12
                                        c0,5.3,4.3,9.6,9.6,9.6c5.3,0,9.6-4.3,9.6-9.6c0-5.3-4.3-9.6-9.6-9.6h-0.1C6.6,2.5,2.4,6.7,2.4,12L2.4,12z M12.7,19.3
                                        c0-0.4-0.3-0.7-0.7-0.7c-0.4,0-0.7,0.3-0.7,0.7v0.9c-4-0.3-7.1-3.5-7.4-7.5h0.8c0.4,0,0.7-0.3,0.7-0.7c0-0.4-0.3-0.7-0.7-0.7H3.9
                                        c0.4-3.9,3.4-7,7.3-7.4v0.7c0,0.4,0.3,0.7,0.7,0.7c0,0,0,0,0,0c0.4,0,0.7-0.3,0.7-0.7V3.8c4,0.3,7.1,3.4,7.5,7.3h-0.8
                                        c-0.4,0-0.7,0.3-0.7,0.7c0,0,0,0,0,0c0,0.4,0.3,0.7,0.7,0.7c0,0,0,0,0,0h0.9c-0.3,4-3.4,7.2-7.5,7.6V19.3z M7.4,7.4
                                        c-0.3,0.3-0.3,0.7,0,1c0,0,0,0,0,0l4.1,4.1c0.1,0.1,0.3,0.2,0.5,0.2c0.2,0,0.4-0.1,0.5-0.2l2.4-2.4c0.3-0.3,0.3-0.7,0-1c0,0,0,0,0,0
                                        c-0.3-0.3-0.7-0.3-1,0L12,11L8.4,7.4C8.3,7.2,8.1,7.2,7.9,7.2C7.7,7.2,7.5,7.3,7.4,7.4L7.4,7.4z"/>
                                </svg>
                            </span>
                            Juma, 15:00 - 17:00  
                        </li>
                        <li>
                            <span>
                                <svg id="telephone" data-name="483947" xmlns="http://www.w3.org/2000/svg" width="17.2" height="17.2" viewBox="0 0 17.2 17.2">
                                    <g id="telephone" data-name="telephone">
                                        <path id="telephone" data-name="telephone" d="M15.82,11.29a9.766,9.766,0,0,1-3.067-.488,1.4,1.4,0,0,0-1.363.287l-1.934,1.46a10.688,10.688,0,0,1-4.805-4.8L6.067,5.861a1.39,1.39,0,0,0,.342-1.409,9.78,9.78,0,0,1-.49-3.072A1.382,1.382,0,0,0,4.539,0H1.38A1.382,1.382,0,0,0,0,1.38,15.838,15.838,0,0,0,15.82,17.2a1.382,1.382,0,0,0,1.38-1.38V12.67A1.382,1.382,0,0,0,15.82,11.29Z"></path>
                                    </g>
                                </svg>
                            </span>
                            +998 71 239-81-14
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.154" height="16.28" viewBox="0 0 23.154 16.28">
                                    <path id="message" data-name="message" d="M-10785.966-168.44a2,2,0,0,1-.872-.2l7.023-6.977.993.994a3.4,3.4,0,0,0,4.795,0l.994-.994,7.023,6.977a2.014,2.014,0,0,1-.872.2Zm13.892-8.139,7.023-6.977a2.008,2.008,0,0,1,.2.872v12.211a2.017,2.017,0,0,1-.2.872Zm-15.928,6.105v-12.211a2.01,2.01,0,0,1,.206-.872l7.021,6.977-7.021,6.977A2.019,2.019,0,0,1-10788-170.473Zm10.14-5.112-8.976-8.932a2.043,2.043,0,0,1,.872-.2h19.085a2.053,2.053,0,0,1,.872.2l-8.976,8.932a2.029,2.029,0,0,1-1.439.595A2.028,2.028,0,0,1-10777.862-175.585Z" transform="translate(10788.002 184.72)"></path>
                                </svg>
                            </span>
                            master@gmail.com
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.89" height="20.734" viewBox="0 0 18.89 20.734">
                                    <path id="network" data-name="network" d="M-10777.981-345.263a2.982,2.982,0,0,1,.044-.515l-8.016-4.57a2.985,2.985,0,0,1-1.935.709,3,3,0,0,1-3-3,3,3,0,0,1,3-3,2.985,2.985,0,0,1,1.935.709l8.016-4.57a2.982,2.982,0,0,1-.044-.515,3,3,0,0,1,2.992-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3,2.981,2.981,0,0,1-2.088-.85l-7.9,4.506a2.97,2.97,0,0,1,.088.72,2.97,2.97,0,0,1-.088.72l7.9,4.506a2.98,2.98,0,0,1,2.087-.85,3,3,0,0,1,3,3,3,3,0,0,1-3,3A2.994,2.994,0,0,1-10777.981-345.263Z" transform="translate(10790.884 363.001)"/>
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path id="web_site" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048a10.211,10.211,0,0,1,.476,3ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17ZM14.6,21.644A19.676,19.676,0,0,0,17.426,17h3.221a10.031,10.031,0,0,1-6.042,4.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z" fill="#013d8c"/>
                                </svg>
                            </span>
                            <a href="#">www.gov.uz</a>
                        </li>
                        <li className="list_veb_site">
                            <a href="#">Ekologiya</a>
                            <a href="#">Hududiy rivojlanish</a>
                        </li>
                    </ul>
                    <Modal show={show} onHide={handleClose} className="modal_b">
                        <Modal.Header closeButton>
                        <Modal.Title></Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <span className="modal_title">
                                <i className="change_color_grey">Tarjimai hol </i>
                                <span className="left_border_style"></span>
                                <span className="right_border_style"></span>
                            </span>
                            <span className="modal_name_title">Aripov Abdulla Nig'matovich</span>
                            <p>Abdulla Nigmatovich Aripov 1961-yil 24-mayda Toshkent shahrida ziyoli oilada tug'ilgan.</p>
                            <p>Millati – o'zbek. Oliy ma'lumotli, 1983-yil Toshkent elektrotexnika aloqa institutini (Toshkent axborot texnologiyalari universiteti) bitirgan. Elektr aloqa muhandisi mutaxassisligiga ega. Iqtisod fanlari nomzodi, dotsent.</p>
                            <p>Mehnat faoliyatini 1983-yilda Toshkent telegraf-telefon stansiyasida boshlagan. O'zbekiston Respublikasi Aloqa vazirligida bosh mutaxassis, bo'lim boshlig'i lavozimlarida ishlagan.</p>
                            <p>1993-yilda “O'zimpeksaloqa” tashqi savdo firmasi direktorining o'rinbosari lavozimiga tayinlandi. 1995-yildan “ToshAfinaAL” qo'shma korxonasi rahbarlik qila boshladi. 1997-yildan 2002-yilga qadar Pochta va kommunikatsiyalarni rivojlantirishni davlat tomonidan qo'llab-quvvatlash jamg'armasi, Axborot faoliyati va ma'lumotlar uzatishni takomillashtirish va samaradorligini oshirish bo'yicha Idoralararo muvofiqlashtirish komissiyasi ishchi guruhi, O'zbekiston pochta va telekommunikatsiyalar agentligiga yetakchilik qildi.</p>
                            <p>A.N. Aripov 2002-yilda O'zbekiston Respublikasi Bosh vazirining o'rinbosari lavozimiga tayinlandi va ushbu lavozimda 2012-yilga qadar faoliyat olib bordi. Mazkur davr mobaynida mamlakatimizda aloqa va axborot-telekommunikatsiya texnologiyalarini izchil rivojlantirish, ta'lim, tibbiyot va boshqa ijtimoiy sohalar taraqqiy etishiga ulkan hissa qo'shdi.</p>
                            <p>2012-yilda Toshkent axborot texnologiyalari universiteti menejment va marketing kafedrasida o'z faoliyatini davom ettirdi.</p>
                            <p>A.N. Aripov 2016-yilda O'zbekiston Respublikasining Bosh vaziri etib tasdiqlandi va ushbu lavozimga 2020-yilda Oliy Majlis palatalari tomonidan qayta tasdiqlandi.</p>
                            <p>A.N. Aripov oilali, besh nafar farzandi bor.</p>
                            <p>A.N. Aripov davlat va boshqaruv organlaridagi ko'p yillik samarali mehnati, yurtimiz ravnaqi, xalqimiz farovonligini yuksaltirish ishiga ulkan hissa qo'shgani uchun “Mehnat shuhrati”, “Do'stlik”, “Fidokorona xizmatlari uchun” ordenlari bilan taqdirlangan.</p>
                        </Modal.Body>
                    </Modal>
                </div>
            </div>
            <div className="ministry_box">
                <div className="d_flex">
                    <span className="ministry_img"><img src={min_img2} /></span>
                    <span className="min_full_name">
                        Ramatov Achilbay Jumaniyazovich
                        <i>O'zbekiston Respublikasi Bosh Vazirining o'rinbosari </i>
                    </span>
                    <ul className="min_list">
                        <li>
                            <a href="#">
                                <span>
                                    <svg id="bold" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.25 24h-12.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-1.517 1.233-2.75 2.75-2.75h12.5c1.517 0 2.75 1.233 2.75 2.75v18.5c0 1.517-1.233 2.75-2.75 2.75zm-12.5-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h12.5c.689 0 1.25-.561 1.25-1.25v-18.5c0-.689-.561-1.25-1.25-1.25z"/><path d="m16.25 16h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m16.25 20h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><circle cx="12" cy="5" r="2"/><path d="m15.25 12h-6.5c-.414 0-.75-.336-.75-.75v-.5c0-1.517 1.233-2.75 2.75-2.75h2.5c1.517 0 2.75 1.233 2.75 2.75v.5c0 .414-.336.75-.75.75z"/></svg>
                                </span>
                                Biografiya
                            </a>
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path id="clock" data-name="clock" d="M-11474.534-715.414a8.943,8.943,0,0,1-2.636-6.363,8.95,8.95,0,0,1,2.636-6.366,8.949,8.949,0,0,1,6.366-2.636,8.94,8.94,0,0,1,6.362,2.636,8.95,8.95,0,0,1,2.636,6.366,8.943,8.943,0,0,1-2.636,6.363,8.94,8.94,0,0,1-6.362,2.636A8.949,8.949,0,0,1-11474.534-715.414Zm-.867-6.4v.035a7.24,7.24,0,0,0,7.233,7.233,7.241,7.241,0,0,0,7.232-7.233,7.241,7.241,0,0,0-7.232-7.233h-.1A7.238,7.238,0,0,0-11475.4-721.811Zm7.766,5.5a.533.533,0,0,0-.532-.533.534.534,0,0,0-.533.533v.674a6.178,6.178,0,0,1-5.614-5.637h.579a.534.534,0,0,0,.533-.533.534.534,0,0,0-.533-.533h-.576a6.176,6.176,0,0,1,5.539-5.579v.544a.531.531,0,0,0,.53.533.534.534,0,0,0,.533-.533v-.559a6.178,6.178,0,0,1,5.677,5.522h-.64a.534.534,0,0,0-.535.533.534.534,0,0,0,.535.533h.657a6.178,6.178,0,0,1-5.62,5.709Zm-4.006-8.944a.531.531,0,0,0,0,.752l3.1,3.1a.544.544,0,0,0,.378.156.544.544,0,0,0,.377-.156l1.777-1.78a.531.531,0,0,0,0-.755.532.532,0,0,0-.752,0l-1.4,1.4-2.72-2.719a.535.535,0,0,0-.378-.156A.529.529,0,0,0-11471.642-725.25Z" transform="translate(11477.17 730.778)"></path>
                                </svg>
                            </span>
                            Juma, 15:00 - 17:00  
                        </li>
                        <li>
                            <span>
                                <svg id="telephone" data-name="483947" xmlns="http://www.w3.org/2000/svg" width="17.2" height="17.2" viewBox="0 0 17.2 17.2">
                                    <g id="telephone" data-name="telephone">
                                        <path id="telephone" data-name="telephone" d="M15.82,11.29a9.766,9.766,0,0,1-3.067-.488,1.4,1.4,0,0,0-1.363.287l-1.934,1.46a10.688,10.688,0,0,1-4.805-4.8L6.067,5.861a1.39,1.39,0,0,0,.342-1.409,9.78,9.78,0,0,1-.49-3.072A1.382,1.382,0,0,0,4.539,0H1.38A1.382,1.382,0,0,0,0,1.38,15.838,15.838,0,0,0,15.82,17.2a1.382,1.382,0,0,0,1.38-1.38V12.67A1.382,1.382,0,0,0,15.82,11.29Z"></path>
                                    </g>
                                </svg>
                            </span>
                            +998 71 239-81-14
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.154" height="16.28" viewBox="0 0 23.154 16.28">
                                    <path id="message" data-name="message" d="M-10785.966-168.44a2,2,0,0,1-.872-.2l7.023-6.977.993.994a3.4,3.4,0,0,0,4.795,0l.994-.994,7.023,6.977a2.014,2.014,0,0,1-.872.2Zm13.892-8.139,7.023-6.977a2.008,2.008,0,0,1,.2.872v12.211a2.017,2.017,0,0,1-.2.872Zm-15.928,6.105v-12.211a2.01,2.01,0,0,1,.206-.872l7.021,6.977-7.021,6.977A2.019,2.019,0,0,1-10788-170.473Zm10.14-5.112-8.976-8.932a2.043,2.043,0,0,1,.872-.2h19.085a2.053,2.053,0,0,1,.872.2l-8.976,8.932a2.029,2.029,0,0,1-1.439.595A2.028,2.028,0,0,1-10777.862-175.585Z" transform="translate(10788.002 184.72)"></path>
                                </svg>
                            </span>
                            master@gmail.com
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.89" height="20.734" viewBox="0 0 18.89 20.734">
                                    <path id="network" data-name="network" d="M-10777.981-345.263a2.982,2.982,0,0,1,.044-.515l-8.016-4.57a2.985,2.985,0,0,1-1.935.709,3,3,0,0,1-3-3,3,3,0,0,1,3-3,2.985,2.985,0,0,1,1.935.709l8.016-4.57a2.982,2.982,0,0,1-.044-.515,3,3,0,0,1,2.992-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3,2.981,2.981,0,0,1-2.088-.85l-7.9,4.506a2.97,2.97,0,0,1,.088.72,2.97,2.97,0,0,1-.088.72l7.9,4.506a2.98,2.98,0,0,1,2.087-.85,3,3,0,0,1,3,3,3,3,0,0,1-3,3A2.994,2.994,0,0,1-10777.981-345.263Z" transform="translate(10790.884 363.001)"/>
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path id="web_site" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048a10.211,10.211,0,0,1,.476,3ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17ZM14.6,21.644A19.676,19.676,0,0,0,17.426,17h3.221a10.031,10.031,0,0,1-6.042,4.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z" fill="#013d8c"/>
                                </svg>
                            </span>
                            www.railway.uz
                        </li>
                        <li className="list_veb_site">
                            <a href="#">Iqtisodiyot va moliya</a>
                        </li>
                    </ul>
                </div>
                <div className="job_pos">
                    Mutasaddilik qiladigan yo'nalishlari
                    <i>Hududlarni kompleks rivojlantirish, kommunikatsiyalar, qurilish va uy-joy kommunal xo'jaligi masalalari kotibiyati</i>
                </div>
            </div>
            <div className="ministry_box">
                <div className="d_flex">
                    <span className="ministry_img"><img src={min_img3} /></span>
                    <span className="min_full_name">
                        Kuchkarov Djamshid Anvarovich
                        <i>O'zbekiston Respublikasi Bosh vazirining moliya-iqtisodiyot va kambag'allikni qisqartirish masalalari bo'yicha o'rinbosari </i>
                        <i>O'zbekiston Respublikasi Iqtisodiy taraqqiyot va kambag'allikni qisqartirish vaziri</i>
                    </span>
                    <ul className="min_list">
                        <li>
                            <a href="#">
                                <span>
                                    <svg id="bold" enable-background="new 0 0 24 24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m18.25 24h-12.5c-1.517 0-2.75-1.233-2.75-2.75v-18.5c0-1.517 1.233-2.75 2.75-2.75h12.5c1.517 0 2.75 1.233 2.75 2.75v18.5c0 1.517-1.233 2.75-2.75 2.75zm-12.5-22.5c-.689 0-1.25.561-1.25 1.25v18.5c0 .689.561 1.25 1.25 1.25h12.5c.689 0 1.25-.561 1.25-1.25v-18.5c0-.689-.561-1.25-1.25-1.25z"/><path d="m16.25 16h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><path d="m16.25 20h-8.5c-.414 0-.75-.336-.75-.75s.336-.75.75-.75h8.5c.414 0 .75.336.75.75s-.336.75-.75.75z"/><circle cx="12" cy="5" r="2"/><path d="m15.25 12h-6.5c-.414 0-.75-.336-.75-.75v-.5c0-1.517 1.233-2.75 2.75-2.75h2.5c1.517 0 2.75 1.233 2.75 2.75v.5c0 .414-.336.75-.75.75z"/></svg>
                                </span>
                                Biografiya
                                </a>
                            </li>
                        <li>
                            <span>
                                <svg id="telephone" data-name="483947" xmlns="http://www.w3.org/2000/svg" width="17.2" height="17.2" viewBox="0 0 17.2 17.2">
                                    <g id="telephone" data-name="telephone">
                                        <path id="telephone" data-name="telephone" d="M15.82,11.29a9.766,9.766,0,0,1-3.067-.488,1.4,1.4,0,0,0-1.363.287l-1.934,1.46a10.688,10.688,0,0,1-4.805-4.8L6.067,5.861a1.39,1.39,0,0,0,.342-1.409,9.78,9.78,0,0,1-.49-3.072A1.382,1.382,0,0,0,4.539,0H1.38A1.382,1.382,0,0,0,0,1.38,15.838,15.838,0,0,0,15.82,17.2a1.382,1.382,0,0,0,1.38-1.38V12.67A1.382,1.382,0,0,0,15.82,11.29Z"></path>
                                    </g>
                                </svg>
                            </span>
                            Juma, 15:00 - 17:00  
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                                    <path id="clock" data-name="clock" d="M-11474.534-715.414a8.943,8.943,0,0,1-2.636-6.363,8.95,8.95,0,0,1,2.636-6.366,8.949,8.949,0,0,1,6.366-2.636,8.94,8.94,0,0,1,6.362,2.636,8.95,8.95,0,0,1,2.636,6.366,8.943,8.943,0,0,1-2.636,6.363,8.94,8.94,0,0,1-6.362,2.636A8.949,8.949,0,0,1-11474.534-715.414Zm-.867-6.4v.035a7.24,7.24,0,0,0,7.233,7.233,7.241,7.241,0,0,0,7.232-7.233,7.241,7.241,0,0,0-7.232-7.233h-.1A7.238,7.238,0,0,0-11475.4-721.811Zm7.766,5.5a.533.533,0,0,0-.532-.533.534.534,0,0,0-.533.533v.674a6.178,6.178,0,0,1-5.614-5.637h.579a.534.534,0,0,0,.533-.533.534.534,0,0,0-.533-.533h-.576a6.176,6.176,0,0,1,5.539-5.579v.544a.531.531,0,0,0,.53.533.534.534,0,0,0,.533-.533v-.559a6.178,6.178,0,0,1,5.677,5.522h-.64a.534.534,0,0,0-.535.533.534.534,0,0,0,.535.533h.657a6.178,6.178,0,0,1-5.62,5.709Zm-4.006-8.944a.531.531,0,0,0,0,.752l3.1,3.1a.544.544,0,0,0,.378.156.544.544,0,0,0,.377-.156l1.777-1.78a.531.531,0,0,0,0-.755.532.532,0,0,0-.752,0l-1.4,1.4-2.72-2.719a.535.535,0,0,0-.378-.156A.529.529,0,0,0-11471.642-725.25Z" transform="translate(11477.17 730.778)"></path>
                                </svg>
                            </span>
                            +998 71 239-81-14
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="23.154" height="16.28" viewBox="0 0 23.154 16.28">
                                    <path id="message" data-name="message" d="M-10785.966-168.44a2,2,0,0,1-.872-.2l7.023-6.977.993.994a3.4,3.4,0,0,0,4.795,0l.994-.994,7.023,6.977a2.014,2.014,0,0,1-.872.2Zm13.892-8.139,7.023-6.977a2.008,2.008,0,0,1,.2.872v12.211a2.017,2.017,0,0,1-.2.872Zm-15.928,6.105v-12.211a2.01,2.01,0,0,1,.206-.872l7.021,6.977-7.021,6.977A2.019,2.019,0,0,1-10788-170.473Zm10.14-5.112-8.976-8.932a2.043,2.043,0,0,1,.872-.2h19.085a2.053,2.053,0,0,1,.872.2l-8.976,8.932a2.029,2.029,0,0,1-1.439.595A2.028,2.028,0,0,1-10777.862-175.585Z" transform="translate(10788.002 184.72)"></path>
                                </svg>
                            </span>
                            master@gmail.com
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="18.89" height="20.734" viewBox="0 0 18.89 20.734">
                                    <path id="network" data-name="network" d="M-10777.981-345.263a2.982,2.982,0,0,1,.044-.515l-8.016-4.57a2.985,2.985,0,0,1-1.935.709,3,3,0,0,1-3-3,3,3,0,0,1,3-3,2.985,2.985,0,0,1,1.935.709l8.016-4.57a2.982,2.982,0,0,1-.044-.515,3,3,0,0,1,2.992-3,3,3,0,0,1,3,3,3,3,0,0,1-3,3,2.981,2.981,0,0,1-2.088-.85l-7.9,4.506a2.97,2.97,0,0,1,.088.72,2.97,2.97,0,0,1-.088.72l7.9,4.506a2.98,2.98,0,0,1,2.087-.85,3,3,0,0,1,3,3,3,3,0,0,1-3,3A2.994,2.994,0,0,1-10777.981-345.263Z" transform="translate(10790.884 363.001)"/>
                                </svg>
                            </span>
                        </li>
                        <li>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path id="web_site" d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0Zm8.647,7H17.426a19.676,19.676,0,0,0-2.821-4.644A10.031,10.031,0,0,1,20.647,7ZM16.5,12a10.211,10.211,0,0,1-.476,3H7.976A10.211,10.211,0,0,1,7.5,12a10.211,10.211,0,0,1,.476-3h8.048a10.211,10.211,0,0,1,.476,3ZM8.778,17h6.444A19.614,19.614,0,0,1,12,21.588,19.57,19.57,0,0,1,8.778,17Zm0-10A19.614,19.614,0,0,1,12,2.412,19.57,19.57,0,0,1,15.222,7ZM9.4,2.356A19.676,19.676,0,0,0,6.574,7H3.353A10.031,10.031,0,0,1,9.4,2.356ZM2.461,9H5.9a12.016,12.016,0,0,0-.4,3,12.016,12.016,0,0,0,.4,3H2.461a9.992,9.992,0,0,1,0-6Zm.892,8H6.574A19.676,19.676,0,0,0,9.4,21.644,10.031,10.031,0,0,1,3.353,17ZM14.6,21.644A19.676,19.676,0,0,0,17.426,17h3.221a10.031,10.031,0,0,1-6.042,4.644ZM21.539,15H18.1a12.016,12.016,0,0,0,.4-3,12.016,12.016,0,0,0-.4-3h3.437a9.992,9.992,0,0,1,0,6Z"/>
                                </svg>
                            </span>
                            www.mineconomy.uz
                        </li>
                    </ul>
                </div>
                <div className="job_pos">
                    Faoliyat yuritadigan yo'nalishlari
                    <i>Iqtisodiyot va moliya</i>
                </div>
            </div>
        </div>
    )
} 
export default AboutPortalPage2;