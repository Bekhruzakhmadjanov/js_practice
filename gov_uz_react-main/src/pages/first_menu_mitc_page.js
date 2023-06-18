import React from "react";
import Header_fixed from "../components/header_fixed";
import Mitc_header from "../inner_components/mitc_header";
import Inner_footer from "../inner_components/footer_in";
import { Col, Container, Row } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Central_apparat from "../inner_components/Central_apparat";

const First_menu_mitc =() =>{
    return(
        <div>
            <Header_fixed />
            <Mitc_header />
            <Container className="change_width">
                <Row>
                    <Col xxl="3" xl="3" lg={{ order: 'last' }} className="lg_width_3">
                        <div className="right_menu_b">
                            <ul className="right_menu_list">
                                <li>
                                    <a href="#">Vazirlik haqida</a>
                                </li>
                                <li>
                                    <a href="#">Vazirlik tuzilmasi</a>
                                </li>
                                <li>
                                    <a href="#">Rahbariyat</a>
                                </li>
                                <li className="active">
                                    <a href="#">Markaziy apparat</a>
                                </li>
                                <li>
                                    <a href="#">Hay'at</a>
                                </li>
                                <li>
                                    <a href="#">Hududiy boshqarmalar</a>
                                </li>
                                <li>
                                    <a href="#">Tizimdagi tashkilotlar</a>
                                </li>
                                <li>
                                    <a href="#">Jamoatchilik kengashi</a>
                                </li>
                                <li>
                                    <a href="#">Kuzatuv kengashi</a>
                                </li>
                                <li>
                                    <a href="#">Xodimlarning odob-axloq qoidalariga amal qilishi</a>
                                </li>
                                <li>
                                    <a href="#">Bo'sh ish o'rinlari</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <Switch>
                            <Route exact path="/first_menu_mitc/page1" component={Central_apparat} />
                            {/* <Route path="/portal/page2" component={AboutPortalPage2} />
                            <Route path="/portal/page3" component={AboutPortalPage3} />
                            <Route path="/portal/page4" component={AboutPortalPage4} />
                            <Route path="/portal/page5" component={AboutPortalPage5} />
                            <Route path="/portal/page6" component={AboutPortalPage6} />
                            <Route path="/portal/page7" component={AboutPortalPage7} /> */}
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Inner_footer />
        </div>
    )
}

export default First_menu_mitc;