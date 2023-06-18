import React from "react";
import { Container } from "react-bootstrap";

const Activities =() =>{
    return(
        <Container className="change_width">
            <span className="title">Faoliyatlar yo'nalishi</span>
            <ul className="state_bodies_list activities_list">
                <li><a href="#">Telekommunikatsiya</a></li>
                <li><a href="#">Harakatlar strategiyasi</a></li>
                <li><a href="#">Axborot texnologiyalar</a></li>
                <li><a href="#">Pochta</a></li>
                <li><a href="#">AKTda ta'lim</a></li>
                <li><a href="#">Xalqaro munosabat</a></li>
                <li><a href="#">Jamoatchilik maslahat kengashi</a></li>
                <li><a href="#">Davlat xizmatlari reestri</a></li>
                <li><a href="#">AKTni rivojlantirish jamg`armasi</a></li>
            </ul>
        </Container>
    )
}

export default Activities; 