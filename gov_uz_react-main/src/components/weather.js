import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Rain_icon from "../assets/img/rain.png";
import Year_img from "../assets/img/year_news.jpg";

const Weather =() =>{
    return(
        <Container className="change_width">
            <Row className="left_right_p">
                <Col md="4">
                    <div className="panel panel-classic">
                        <div className="panel-body">
                            <div className="weather">
                                <p>
                                    <select className="weatherSelect" id="select">
                                        <option value="andijan">Andijon</option>
                                        <option value="bukhara">Buxoro</option>
                                        <option value="gulistan">Guliston</option>
                                        <option value="jizzakh">Jizzax</option>
                                        <option value="qarshi">Qarshi</option>
                                        <option value="navoiy">Navoiy</option>
                                        <option value="namangan">Namangan</option>
                                        <option value="nukus">Nukus</option>
                                        <option value="samarkand">samarkand</option>
                                        <option selected="selected" value="tashkent">Toshkent</option>
                                        <option value="termez">Termiz</option>
                                        <option value="urgench">Urganch</option>
                                        <option value="fergana">Farg'ona</option>
                                    </select>
                                </p>
                                <span>28/03/2021</span>
                            </div>
                            <div id="rez">
                                <div className="weather_num">+11.4 °C
                                    <img className="weather_img" src={Rain_icon} />
                                </div>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col md="4">
                    <a href="https://gov.uz/uz/pages/state_programs" className="year_news_b" target="_blank">
                        <img src={Year_img} />
                    </a>
                </Col>
                <Col md="4">
                    <div className="panel panel-classic">
                        <div className="panel-body">
                            <a target="_blank" href="https://cbu.uz/oz/" className="rates">
                                <span>
                                    <ul className="rates_list">
                                        <li>1 USD = 10510.00</li>
                                        <li>1 EUR = 12394.44</li>
                                        <li>1 RUB = 138.53</li>
                                    </ul>
                                    <h1>24.10.2022 dan <br></br>MB valyuta kurslari</h1>
                                </span>
                                <span className="cbu_link">www.cbu.uz</span>
                            </a>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Weather;