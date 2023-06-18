import React from "react";
import { Breadcrumb } from "react-bootstrap";
import Kabmin from "../assets/img/kabmin_img.jpg";

const AboutPortalPage1 =() =>{
    return(
        <div className="white_bg">
            <div className="breadcrumb_b">
                <Breadcrumb>
                    <Breadcrumb.Item href="/">Bosh sahifa</Breadcrumb.Item>
                    <Breadcrumb.Item active>Hukumat</Breadcrumb.Item>
                    <Breadcrumb.Item active>Umumiy ma'lumot</Breadcrumb.Item>
                </Breadcrumb>
            </div>
            <span className="inner_title">Umumiy ma'lumot</span>
            <div className="ab_portal_text">
                <img src={Kabmin} />
                <p>
                    O'zbekiston Respublikasi Vazirlar Mahkamasi – O'zbekiston Respublikasi Hukumati ijro etuvchi hokimiyatning oliy organi bo'lib, iqtisodiyot, ijtimoiy va
                    ma'naviy sohalarning samarali faoliyat ko'rsatishiga rahbarlik qilishni, O'zbekiston Respublikasi qonunlari, O'zbekiston Respublikasi Oliy Majlisi qarorlari,
                    O'zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlari ijrosini ta'minlaydi.
                </p>
                <p>Vazirlar Mahkamasi O'zbekiston Respublikasida ijro etuvchi hokimiyatning yagona tizimiga rahbarlik qiladigan kollegial organdir.</p>
                <p>
                    Vazirlar Mahkamasi O'zbekiston Respublikasi Hukumatining a'zolari – O'zbekiston Respublikasi Bosh vaziridan (bundan buyon matnda Bosh vazir deb yuritiladi),
                    uning o'rinbosarlaridan, vazirlardan, davlat qo'mitalari raislaridan iboratdir. Qoraqalpog'iston Respublikasi Vazirlar Kengashi raisi Vazirlar Mahkamasi
                    tarkibiga o'z lavozimi bo'yicha kiradi.
                </p>
                <span className="pres_cab_min">Vazirlar Mahkamasi:</span>
                <ul className="cab_min_list">
                    <li>samarali iqtisodiy, ijtimoiy, moliyaviy, pul-kredit siyosati yuritilishi, ilm-fan, madaniyat, ta'lim, sog'liqni saqlashni hamda iqtisodiyotning va ijtimoiy sohaning boshqa tarmoqlarini rivojlantirish bo'yicha dasturlarning ishlab chiqilishi hamda amalga oshirilishi uchun javobgar bo'ladi;</li>
                    <li>fuqarolarning iqtisodiy, ijtimoiy va boshqa huquqlari hamda qonuniy manfaatlarini himoya qilishga doir choralarni amalga oshiradi;</li>
                    <li>vazirliklar, davlat qo'mitalari va boshqa davlat boshqaruvi organlari ishini muvofiqlashtiradi hamda yo'naltiradi, ularning faoliyati ustidan nazoratni ta'minlaydi;</li>
                    <li>O'zbekiston Respublikasining qonunlari, O'zbekiston Respublikasi Oliy Majlisining qarorlari, O'zbekiston Respublikasi Prezidentining farmonlari, qarorlari va farmoyishlari ijrosini ta'minlaydi</li>
                    <li>O'zbekiston Respublikasi Oliy Majlisiga mamlakat ijtimoiy-iqtisodiy hayotining eng muhim masalalari yuzasidan har yilgi ma'ruzalarni taqdim etadi;</li>
                    <li>davlat boshqaruvi tuzilmasini takomillashtirish to'g'risida, vazirliklarni, davlat qo'mitalarini, idoralarni va boshqa davlat boshqaruvi organlarini tuzish, qayta tashkil etish hamda tugatish haqida takliflar ishlab chiqadi;</li>
                    <li>strategik rejalashtirishning zamonaviy shakllari davlat boshqaruvi tizimiga joriy etilishini ta'minlaydi;</li>
                    <li>mamlakatni iqtisodiy va ijtimoiy rivojlantirishning eng muhim hamda ustuvor yo'nalishlari bo'yicha yaqin, o'rta va uzoq muddatli istiqbolga mo'ljallangan strategiyalar, konsepsiyalar, dasturlar hamda «yo'l xaritalari»ni amalga oshirish yuzasidan choralar ko'radi.</li>
                </ul>
            </div>
        </div>
    )
} 
export default AboutPortalPage1;