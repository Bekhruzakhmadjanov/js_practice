import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, Route, Switch } from "react-router-dom";
import Question_answer_pagw from "../inner_components/question_answer_page";
import Inner_footer from "../inner_components/footer_in";
import Mitc_header from "../inner_components/mitc_header";
import Header_fixed from "../components/header_fixed";

const Question_answer =() =>{
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
                                    <Link to="/ministry/page1">So`rovnomalar</Link>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xxl="9" xl="9" lg={{ order: 'first' }} className="lg_width_9">
                        <Switch>
                            <Route exact path="/question_answer/page1" component={Question_answer_pagw} />
                        </Switch>
                    </Col>
                </Row>
            </Container>
            <Inner_footer />
        </div>
    )
}

export default Question_answer;