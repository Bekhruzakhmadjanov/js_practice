import React from "react";
import About_govenment from "../components/about_government";
import Doc_cal_link from "../components/calen_doc_link";
import Contacts from "../components/contact";
// import Function from "../components/function";
import Life_situation from "../components/life_situations";
import Main_slider from "../components/main_slider";
import News from "../components/news";
import Service from "../components/services";
import State_tab from "../components/tab_state";
import Usefull_links from "../components/usefull_links";
import Weather from "../components/weather";
import Footer from '../components/footer';
import Header from "../components/header";

const  Main_page =() =>{
    return(
        <div>
            <Header />
            <Main_slider />
            {/* <Function /> */}
            <About_govenment />
            <State_tab />
            <Life_situation />
            <Service />
            <Doc_cal_link />
            <News />
            <Usefull_links />
            <Contacts />
            <Weather />
            <Footer />
        </div>
    )
}

export default Main_page;
