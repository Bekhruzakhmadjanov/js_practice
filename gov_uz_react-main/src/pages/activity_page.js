import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Switch, Route } from "react-router-dom";
import Footer from "../components/footer";
import Education from "./education_page";
import Finance from "./finance_page";
import { Link } from "react-router-dom";
import Header from "../components/header";

const Activity =() =>{
    return(
        <div>
            <Header />
            <Container className="change_width">
                <Row>
                    <Col xxl="3" xl="3" lg={{ order: 'last' }} className="lg_width_3">
                        <div className="right_menu_b">
                            <ul className="right_menu_list">
                                <li className="active">
                                    <Link to="/activity_page/page1">Iqtisodiyot va moliya</Link>
                                </li>
                                <li>
                                    <Link to="/activity_page/page2">Ta'lim</Link>
                                </li>
                                <li><a>Sog'liqni saqlash</a></li>
                                <li><a>Sport</a></li>
                                <li><a>Ekologiya</a></li>
                                <li><a>Xavfsizlik</a></li>
                                <li><a>Transport va aloqa</a></li>
                                <li><a>Uy-joy va shaharlar</a></li>
                                <li><a>Bandlik va mehnat</a></li>
                                <li><a>Qishloq xo`jaligi</a></li>
                                <li><a>Investitsiyalar va innovatsiyalar</a></li>
                                <li><a>Hududiy rivojlanish</a></li>
                                <li><a>Turizm va madaniyat</a></li>
                                <li><a>Energetika</a></li>
                                <li><a>Huquq va qonunchilik</a></li>
                            </ul>   
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <div className="white_bg">
                            <Switch>
                                <Route exact path="/activity_page/page1" component={Finance} />
                                <Route path="/activity_page/page2" component={Education} />
                            </Switch>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Activity;