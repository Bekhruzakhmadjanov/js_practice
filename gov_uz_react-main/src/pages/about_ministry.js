import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Header_fixed from "../components/header_fixed";
import Inner_footer from "../inner_components/footer_in";
import Mitc_header from "../inner_components/mitc_header";
import Reg_office from "./regional_office";

const About_ministry =() =>{

    return(
        <div>
            <Header_fixed />
            <Mitc_header />
            <Container className="change_width"> 
                <Row>
                    <Col xxl="3" xl="3" lg={{ order: 'last' }} className="lg_width_3">
                        <div className="right_menu_b right_menu_b_ministry">
                            <ul className="right_menu_list">
                                <li className="active">
                                    <Link to="/ministry/page1">Vazirlik haqida</Link>
                                </li>
                                <li>
                                    <Link to="/ministry/page2">Hay'at</Link>
                                </li>
                                <li>
                                    <Link to="/ministry/page3">Rahbariyat</Link>
                                </li>
                                <li>
                                    <Link to="/ministry/page4">Vazirlik tuzilmasi</Link>
                                </li>
                                <li>
                                    <Link to="/ministry/page5">Markaziy apparat</Link>
                                </li>
                                <li>
                                    <Link to="/ministry/page6">Hududiy boshqarmalar</Link>
                                </li>
                                <li>
                                    <Link to="/ministry/page7">Vazirlikka murojaat</Link>
                                </li>
                                <li>
                                    <Link to="/ministry/page8">Tizimdagi tashkilotlar</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <Switch>
                            <Route exact path="/about_ministry/page6" component={Reg_office} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Inner_footer />
        </div>
    )
}

export default About_ministry;