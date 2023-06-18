import React from "react";
import { Breadcrumb } from "react-bootstrap";

const AboutPortalPage3=() =>{
    return(
        <div className="white_bg">
            <div className="breadcrumb_b">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Hukumat</Breadcrumb.Item>
                    <Breadcrumb.Item active>Vazirlar Mahkamasining Rayosati</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <span className="inner_title">Vazirlar Mahkamasining Rayosati</span>
            <div className="presidium_text">
                <p><b>Vazirlar Mahkamasining Rayosati Vazirlar Mahkamasining doimiy faoliyat ko'rsatuvchi organidir. Vazirlar Mahkamasining Rayosati tarkibiga Bosh vazir, Bosh vazirning o'rinbosarlari va maslahatchilari, vazirlar, davlat qo'mitalarining raislari, shuningdek Qoraqalpog'iston Respublikasi Vazirlar Kengashi raisi kiradi.</b></p>
                <p>Vazirlar Mahkamasi Rayosatining majlislarida:</p>
                <p>O'zbekiston Respublikasi Prezidenti topshiriqlarining ijrosini tashkil etish masalalari;</p>
                <p>Qonunchilik palatasiga qonunchilik tashabbusi tartibida kiritiladigan qonunlar loyihalari;</p>
                <p>Vazirlar Mahkamasining vakolatiga kiradigan masalalar ko'rib chiqiladi, bundan ushbu Qonunga muvofiq faqat Vazirlar Mahkamasining majlislarida ko'rib chiqiladigan masalalar mustasno.</p>
                <p>Vazirlar Mahkamasi Rayosatining majlisini tashkil etishni va tayyorlashni Vazirlar Mahkamasining apparati amalga oshiradi.</p>
                <p>Vazirlar Mahkamasi Rayosatining majlislari har haftada Bosh vazir tomonidan, u yo'qligida esa uning o'rinbosarlaridan biri tomonidan o'tkaziladi.</p>
                <p>Vazirlar Mahkamasi Rayosatining majlislarida ko'rib chiqish uchun masalalarni tayyorlash tartibi O'zbekiston Respublikasi Vazirlar Mahkamasining Reglamenti bilan belgilanadi.</p>
                <p>Vazirlar Mahkamasi Rayosatining majlislarida qabul qilingan qarorlar bayonnomalar tarzida rasmiylashtiriladi va raislik qiluvchi tomonidan imzolanadi.</p>
            </div>
        </div>
    )
} 
export default AboutPortalPage3;