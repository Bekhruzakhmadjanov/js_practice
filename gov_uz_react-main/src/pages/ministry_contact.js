import React from "react";
import Ministry_contact_page from "./min_contact_page";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Inner_footer from "../inner_components/footer_in";
import Mitc_header from "../inner_components/mitc_header";
import Header_fixed from "../components/header_fixed";

const Ministry_contact =() =>{

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
                                    <Link to="/ministry/page1">Bog`lanish</Link>
                                </li>
                                <li>
                                    <Link to="/ministry/page2">Fuqarolar murojaati</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <Switch>
                            <Route exact path="/ministry_contact/page1" component={Ministry_contact_page} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Inner_footer />
        </div>
    )
}

export default Ministry_contact;