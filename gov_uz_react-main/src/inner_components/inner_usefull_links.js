import React from "react";
import { Container } from "react-bootstrap";
import Icon_1 from "../assets/img/ic_1.png";
import Icon_2 from "../assets/img/ic_2.png";
import Icon_3 from "../assets/img/ic_3.png";
import Icon_4 from "../assets/img/ic_4.png";
import Icon_5 from "../assets/img/ic_5.png";

const Inner_usefull =() =>{
    return(
        <div className="in_usefull_links">
            <Container className="change_width">
                <ul className="useful_list">
                    <li>
                        <a href="https://president.uz/oz"><span><img src={Icon_1} /></span>O'zbekiston Respublikasi Prezidentining rasmiy veb-sayti</a>
                    </li>
                    <li>
                        <a href="https://parliament.gov.uz/uz/"><span><img src={Icon_2} /></span>O'zbekiston Respublikasi Oliy majlisi qonunchilik palatasi</a>
                    </li>
                    <li>
                        <a href="#"><span><img src={Icon_3} /></span>O'zbekiston Respublikasi Oliy Majlisining Senati</a>
                    </li>
                    <li>
                        <a href="https://gov.uz/oz"><span><img src={Icon_4} /></span>O'zbekiston Respublikasi hukumat portali </a>
                    </li>
                    <li>
                        <a href="https://huquqiyportal.uz/"><span><img src={Icon_5} /></span>O'zbekiston Respublikasi Milliy huquqiy internet portali </a>
                    </li>
                </ul>
            </Container>
        </div>
    )
}

export default Inner_usefull;