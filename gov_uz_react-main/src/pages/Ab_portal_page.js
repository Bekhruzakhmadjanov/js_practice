import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import AboutPortalPage1 from "./aboutPortalPage1";
import AboutPortalPage2 from "./aboutPortalPage2";
import AboutPortalPage3 from "./aboutPortalPage3";
import AboutPortalPage4 from "./aboutPortalPage4";
import AboutPortalPage5 from "./aboutPortalPage5";
import AboutPortalPage6 from "./aboutPortalPage6";
import AboutPortalPage7 from "./aboutPortalPage7";

const About_portal =() =>{

    return(
        <div>
            <Header />
            <Container className="change_width">
                <Row>
                    <Col xxl="3" xl="3" lg={{ order: 'last' }} className="lg_width_3">
                        <div className="right_menu_b">
                            <ul className="right_menu_list">
                                <li className="active">
                                    <Link to="/portal/page1">Umumiy ma'lumot</Link>
                                </li>
                                <li>
                                    <Link to="/portal/page2">Vаzirlаr Mаhkаmаsining tаrkibi</Link>
                                </li>
                                <li>
                                    <Link to="/portal/page3">Vazirlar mahkamasining rayosati</Link>
                                </li>
                                <li>
                                    <Link to="/portal/page4">Vazirlar Mahkamasining apparati</Link>
                                </li>
                                <li>
                                    <Link to="/portal/page5">Departamentlar</Link>
                                </li>
                                <li>
                                    <Link to="/portal/page6">Kotibiyatlar</Link>
                                </li>
                                <li>
                                    <Link to="/portal/page7">Inspeksiyalar</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <Switch>
                            <Route exact path="/portal/page1" component={AboutPortalPage1} />
                            <Route path="/portal/page2" component={AboutPortalPage2} />
                            <Route path="/portal/page3" component={AboutPortalPage3} />
                            <Route path="/portal/page4" component={AboutPortalPage4} />
                            <Route path="/portal/page5" component={AboutPortalPage5} />
                            <Route path="/portal/page6" component={AboutPortalPage6} />
                            <Route path="/portal/page7" component={AboutPortalPage7} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    )
}

export default About_portal;