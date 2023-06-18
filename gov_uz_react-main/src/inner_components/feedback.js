import React from "react";
import { Breadcrumb, Button, Container, Form, FormControl, FormGroup, FormLabel } from "react-bootstrap";
import Captcha from "../assets/img/captcha.png";

const Feedback_com =() =>{
    return(
        <Container className="change_width">
            <div className="feedbac_b">
                <div className="breadcrumb_b">
                    <Breadcrumb>
                        <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                        <Breadcrumb.Item active>Qayta aloqa</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
                <span className="inner_title">Qayta aloqa</span>
                <Form className="feedback_form">
                    <FormGroup>
                        <FormLabel>F.I.Sh *</FormLabel>
                        <FormControl type="text" placeholder=""></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Elektron pochta *</FormLabel>
                        <FormControl type="text" placeholder=""></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Telefon</FormLabel>
                        <FormControl type="text" placeholder="+998 97 000-00-00"></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Manzil</FormLabel>
                        <FormControl type="text" placeholder=""></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Ish joyi</FormLabel>
                        <FormControl type="text" placeholder=""></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Lavozim</FormLabel>
                        <FormControl type="text" placeholder=""></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Savol mavzusi *</FormLabel>
                        <FormControl type="text" placeholder=""></FormControl>
                    </FormGroup>
                    <FormGroup>
                        <FormLabel>Savol matni (3000 belgigacha) *</FormLabel>
                        <FormControl as="textarea" placeholder="Matn kiriting"></FormControl>
                    </FormGroup>
                    <FormGroup className="form_width">
                        <FormLabel>Spamdan himoya *</FormLabel>
                        <span className="captcha_img"><img src={Captcha} /></span>
                        <FormControl type="text"></FormControl>
                    </FormGroup>
                    <FormGroup className="btn_box">
                        <Button type="button" className="btn send_btn">Yuborish</Button>
                    </FormGroup>
                </Form>
            </div>
        </Container>
    )
}

export default Feedback_com;