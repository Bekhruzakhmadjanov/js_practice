import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Switch, Route, Link } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import Area_info from "./area_info";
import Authority from "./authority";
import Geog_location from "./geog_location";
import Nat_holidays from "./nat_holidays";
import Population from "./population";
import State_symbols from "./state_symbols";
import Weather_map from "./weather_map";
// import building from "../assets/img/cabmin_building.png"
 
const Info_uzb =() =>{

    return(
        <div>
            <Header />
            <Container className="change_width">
                <Row>
                    <Col xxl="3" xl="3" lg={{ order: 'last' }} className="lg_width_3">
                        <div className="right_menu_b">
                            <ul className="right_menu_list">
                                <li className="active">
                                    <Link to="/info_uzb/pages7">Davlat hokimiyati</Link>
                                </li>
                                <li>
                                    <Link to="/info_uzb/pages1">Davlat ramzlari</Link>
                                </li>
                                <li>
                                    <Link to="/info_uzb/pages2">Geografik joylashuvi</Link>
                                </li>
                                <li>
                                    <Link to="/info_uzb/pages3">Hudud</Link>
                                </li>
                                <li>
                                    <Link to="/info_uzb/pages4">Aholi</Link>
                                </li>
                                <li>
                                    <Link to="/info_uzb/pages5">Milliy bayramlar</Link>
                                </li>
                                <li>
                                    <Link to="/usefulllinks_all">Foydali havolalar</Link>
                                </li>
                                <li>
                                    <Link to="/info_uzb/pages6">Ob-havo</Link>
                                </li>
                            </ul>
                            {/* <img src={building} /> */}
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <Switch>
                            <Route exact path="/info_uzb/pages1" component={State_symbols}></Route>
                            <Route path="/info_uzb/pages2" component={Geog_location} />
                            <Route path="/info_uzb/pages3" component={Area_info} />
                            <Route path="/info_uzb/pages4" component={Population} />
                            <Route path="/info_uzb/pages5" component={Nat_holidays} />
                            <Route path="/info_uzb/pages6" component={Weather_map} />
                            <Route path="/info_uzb/pages7" component={Authority} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default Info_uzb;