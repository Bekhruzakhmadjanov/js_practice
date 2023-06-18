import React from "react";
import { Breadcrumb } from "react-bootstrap";

const AboutPortalPage7=() =>{
    return(
        <div className="white_bg">
            <div className="breadcrumb_b">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Hukumat</Breadcrumb.Item>
                    <Breadcrumb.Item active>Inspeksiyalar</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <span className="inner_title">Inspeksiyalar</span>
            <div className="presidium_text">
                <p>​Investitsiya loyihalarining amalga oshirilishi va tashqi savdoni monitoring qilish inspeksiyasi</p>
                <p>Madaniy merosni himoya qilish inspeksiyasi</p>
            </div>
        </div>
    )
} 
export default AboutPortalPage7;