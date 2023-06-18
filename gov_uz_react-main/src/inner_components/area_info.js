import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Icon_print from "../assets/img/print_icon.png";

const Area_info =() =>{
    return(
        <div className="white_bg">
            <div className="breadcrumb_b">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Hudud</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <span className="inner_title">Hudud</span>
            <button type="button" className="btn print_btn"><img src={Icon_print} /></button>
            <div className="simple_portal_text">
                <p><b>O'zbekiston Respublikasi Amudaryo va Sirdaryo oralig'ida joylashgan bo'lib, umumiy maydoni 448,9 ming km.kv.ni tashkil etadi. Respublika hududi sharqdan g'arbgacha 1 425 km ni, shimoldan janubgacha esa 930 km ni tashkil etadi.</b></p>
                <p>
                    Respublika shimolda va shimoliy-sharqda Qozog'iston, sharqda va janubiy-sharqda Qirg'iziston va Tojikiston, g'arbda Turkmaniston, janubda esa Afg'oniston bilan chegaradoshdir. Davlat chegarasining umumiy uzunligi — 7 090,12 kilometrni tashkil etadi. Davlat chegarasining Afg'oniston bilan uzunligi — 143 km., Qozog'iston — 2.356,31 km., Qirg'iziston — 1.476,12 km., Tojikiston — 1.283,2 km. va Turkmaniston bilan — 1.831,49 km.
                </p>
            </div>
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
    )
}

export default Area_info;