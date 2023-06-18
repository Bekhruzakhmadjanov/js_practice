import React from "react";
import { Button, Form, Col, Row, ProgressBar } from "react-bootstrap";

const Question_answer_pagw =() =>{
    return(
        <div className="all_question_answer">
            <Form className="questions_form">
                <Form.Label>Yagona interaktiv davlat xizmatlari portali (my.gov.uz)dan foydalanasizmi?</Form.Label>
                <div className="full_height flex-row">
                    <div>
                        <Form.Check
                        type="radio"
                        label="Yo'q foydalanmayman"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        />
                        <hr></hr>
                        <Form.Check
                        type="radio"
                        label="Ha foydalanaman"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        />
                        <hr></hr>
                        <Form.Check
                        type="radio"
                        label="Bir marta foydalanganman"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        />
                        <hr></hr>
                        <Form.Check
                        type="radio"
                        label="Birinchi bor eshitishim"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios4"
                        />
                        <hr></hr>
                        <Form.Check
                        type="radio"
                        label="Foydalanishni bilmayman"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios5"
                        />
                    </div>
                </div>
                <Form.Group className="has_marg_top">
                    <Button type="button" className="vote_btn">Ovoz berish</Button>
                    <a href="#" className="results_link">Natijalar</a>
                </Form.Group>
            </Form>
            <hr></hr>
            <div className="progress_all">
            <Form.Label>Yagona interaktiv davlat xizmatlari portali (my.gov.uz)dan foydalanasizmi?</Form.Label>
                <div className="progress_b">
                    <span>Yo'q foydalanmayman <i>12</i></span>
                    <ProgressBar striped animated now={15} label="15%" />
                </div>
                <div className="progress_b">
                    <span>
                        Ha foydalanaman <i>25</i>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20.722" height="19.789" viewBox="0 0 20.722 19.789">
                            <g id="Icon_feather-check-square" data-name="Icon feather-check-square" transform="translate(-3 -3)">
                                <path id="Контур_1" data-name="Контур 1" d="M16.3,16.827a1.5,1.5,0,0,1-1.061-.439l-2.8-2.8a1.5,1.5,0,1,1,2.121-2.121L16.3,13.206l8.267-8.267a1.5,1.5,0,0,1,2.121,2.121l-9.327,9.327A1.5,1.5,0,0,1,16.3,16.827Z" transform="translate(-3.404 -0.567)" fill="#53b36c"/>
                                <path id="Контур_2" data-name="Контур 2" d="M19.424,22.789H6.365A3.369,3.369,0,0,1,3,19.424V6.365A3.369,3.369,0,0,1,6.365,3h10.26a1.5,1.5,0,0,1,0,3H6.365A.366.366,0,0,0,6,6.365V19.424a.366.366,0,0,0,.365.365H19.424a.366.366,0,0,0,.365-.365V12.895a1.5,1.5,0,1,1,3,0v6.529A3.369,3.369,0,0,1,19.424,22.789Z" fill="#53b36c"/>
                            </g>
                        </svg>
                    </span>
                    <ProgressBar variant="success" striped animated now={55} label="55%" />
                </div>
                <div className="progress_b">
                    <span>Bir marta foydalanganman</span>
                    <ProgressBar striped animated now={12} label="12%" />
                </div>
                <div className="progress_b">
                    <span>Birinchi bor eshitishim</span>
                    <ProgressBar striped animated now={11} label="11%" />
                </div>
                <div className="progress_b">
                    <span>Foydalanishni bilmayman</span>
                    <ProgressBar className="red_prog" striped animated now={7} label="7%" />
                </div>
                <ul className="vote_list">
                    <li>Barcha ovozlar: <i>3079</i></li>
                    <li>Sizning ovozingiz: <span>Yo'q</span></li>
                </ul>
            </div>            
        </div>
    )
}

export default Question_answer_pagw;