import React, { useEffect, useState, useRef } from 'react';
import Gerb_icon from '../assets/img/gerb.png';
import Flag_icon from '../assets/img/flagLine.png';
import Building from '../assets/img/govuz_building.png';
import { Row, Col, Dropdown, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Masonry from 'react-masonry-css';
import { format } from 'date-fns';
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip as ReactTooltip } from "react-tooltip";

const Header_fixed = () => {
  const header = useRef(null);
  const [step, setStep] = useState(0);
  const [special, setSpecial] = useState(false);
  const [active, setActive] = useState(false);
  const [before, setBefore] = useState(false);
  const [line, setLine] = useState(false);
  const breakpointColumnsObj = {
    default: 5,
    1100: 3,
    700: 2,
    500: 1,
  };

  const [date, setDate] = useState(Date.now());

  useEffect(() => {
    const clear = setInterval(() => {
      setDate((prevState) => prevState + 1000);
    }, 1000);
    return () => clearInterval(clear);
  }, []);

  const resultDate = format(date, 'HH:mm:ss (OOO) dd.MM.yyyy');
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", checkScroll);
    return () => document.removeEventListener("scroll", checkScroll);
  }, []);

  const checkScroll = (e) => {
    
    if (window.scrollY >= header.current.offsetTop + header.current.offsetHeight) {
      console.log(header.current.offsetTop + header.current.offsetHeight)

      setShadow(true);
    } else {
      setShadow(false);
    }

  };

  return (
    <div className={before ? 'change_map_site_active' : 'change_map_site'}>
      <h1 className="marquee">
        <span>test test test test</span>
      </h1>
        <div className="header" ref={header}>
          <Row className="flex_b">
            <Col md="2" className="width_ch_media">
              <a href="#" onClick={() => setStep(1)} className="left_sidebar">
                <span>Davlat tashkilotlari</span>
              </a>
            </Col>
            <Col md="4" className="media_ch_width">
              <Link to="/" className="logo">
                <span>
                  <img src={Gerb_icon} className="left_gerb" />
                  <img src={Flag_icon} className="left_flag" />
                </span>
                <p className="bigtitle sizeuz">
                  O'zbekiston Respublikasi<br></br>
                  <span>Hukumat portali</span>
                </p>
              </Link>
            </Col>
            <Col md="3" className="media_width_ch">
              <Link to="/404_page" className="img_center">
                <img src={Building} />
              </Link>
            </Col>
            <Col md="3" className="ch_media_width">
              <div className="timeCountainer hideable">
                <span id="timecontainer">{resultDate}</span>
              </div>
              <div className="lang">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                    O'z
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1" className='dropdown_item'>Ўзбекча</Dropdown.Item>
                    <Dropdown.Item href="#/action-2" className='dropdown_item'>Русский</Dropdown.Item>
                    <Dropdown.Item href="#/action-3" className='dropdown_item'>English</Dropdown.Item>
                    <Dropdown.Item href="#/action-4" className='dropdown_item'>Қарақалпақша</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="special_box">
                <a href="#" className="special_view" onClick={() => setSpecial(!special)}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="31.744" height="18.339" viewBox="0 0 31.744 18.339">
                    <g id="Сгруппировать_11290" data-name="Сгруппировать 11290" transform="translate(0.581 -110.395)">
                      <path
                        id="Контур_1355"
                        data-name="Контур 1355"
                        d="M30.087,118.125a18.93,18.93,0,0,0-6.43-5.264,18.55,18.55,0,0,0-8.13-1.962c-.079,0-.394,0-.473,0a18.55,18.55,0,0,0-8.13,1.962,18.93,18.93,0,0,0-6.43,5.264,2.338,2.338,0,0,0,0,2.88,18.93,18.93,0,0,0,6.43,5.264,18.549,18.549,0,0,0,8.13,1.962c.079,0,.394,0,.473,0a18.55,18.55,0,0,0,8.13-1.962A18.93,18.93,0,0,0,30.087,121,2.338,2.338,0,0,0,30.087,118.125ZM7.48,125.156a17.679,17.679,0,0,1-6-4.916,1.1,1.1,0,0,1,0-1.349A17.55,17.55,0,0,1,9.5,113.118a8.656,8.656,0,0,0,0,12.894A17.55,17.55,0,0,1,7.48,125.156Zm7.811,1.834a7.425,7.425,0,1,1,7.425-7.425A7.434,7.434,0,0,1,15.291,126.99Zm13.815-6.75a17.52,17.52,0,0,1-8.024,5.77,8.656,8.656,0,0,0,0-12.893,17.559,17.559,0,0,1,8.026,5.773A1.1,1.1,0,0,1,29.106,120.239Z"
                        transform="translate(0 0)"
                        fill="#7d7d7d"
                        stroke="#707070"
                      />
                      <g id="Сгруппировать_458" data-name="Сгруппировать 458" transform="translate(12.113 116.387)">
                        <g id="Сгруппировать_457" data-name="Сгруппировать 457">
                          <path
                            id="Контур_1356"
                            data-name="Контур 1356"
                            d="M205.983,202.8a3.178,3.178,0,1,0,3.178,3.178A3.181,3.181,0,0,0,205.983,202.8Zm0,5.111a1.933,1.933,0,1,1,1.933-1.933A1.936,1.936,0,0,1,205.983,207.915Z"
                            transform="translate(-202.805 -202.804)"
                            fill="#7d7d7d"
                            stroke="#707070"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </a>
                <div className={special ? 'special_view_box special_view_box_active' : 'special_view_box'}>
                  <span className="circle_box spcNormal">
                    <svg
                      className="svg-inline--fa fa-sun fa-w-16"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="sun"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M274.835 12.646l25.516 62.393c4.213 10.301 16.671 14.349 26.134 8.492l57.316-35.479c15.49-9.588 34.808 4.447 30.475 22.142l-16.03 65.475c-2.647 10.81 5.053 21.408 16.152 22.231l67.224 4.987c18.167 1.348 25.546 24.057 11.641 35.826L441.81 242.26c-8.495 7.19-8.495 20.289 0 27.479l51.454 43.548c13.906 11.769 6.527 34.478-11.641 35.826l-67.224 4.987c-11.099.823-18.799 11.421-16.152 22.231l16.03 65.475c4.332 17.695-14.986 31.73-30.475 22.142l-57.316-35.479c-9.463-5.858-21.922-1.81-26.134 8.492l-25.516 62.393c-6.896 16.862-30.774 16.862-37.67 0l-25.516-62.393c-4.213-10.301-16.671-14.349-26.134-8.492l-57.317 35.479c-15.49 9.588-34.808-4.447-30.475-22.142l16.03-65.475c2.647-10.81-5.053-21.408-16.152-22.231l-67.224-4.987c-18.167-1.348-25.546-24.057-11.641-35.826L70.19 269.74c8.495-7.19 8.495-20.289 0-27.479l-51.454-43.548c-13.906-11.769-6.527-34.478 11.641-35.826l67.224-4.987c11.099-.823 18.799-11.421 16.152-22.231l-16.03-65.475c-4.332-17.695 14.986-31.73 30.475-22.142l57.317 35.479c9.463 5.858 21.921 1.81 26.134-8.492l25.516-62.393c6.896-16.861 30.774-16.861 37.67 0zM392 256c0-74.991-61.01-136-136-136-74.991 0-136 61.009-136 136s61.009 136 136 136c74.99 0 136-61.009 136-136zm-32 0c0 57.346-46.654 104-104 104s-104-46.654-104-104 46.654-104 104-104 104 46.654 104 104z"></path>
                    </svg>
                  </span>
                  <span className="circle_box spcWhiteAndBlack">
                    <svg
                      className="svg-inline--fa fa-adjust fa-w-16"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="adjust"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M8 256c0 136.966 111.033 248 248 248s248-111.034 248-248S392.966 8 256 8 8 119.033 8 256zm248 184V72c101.705 0 184 82.311 184 184 0 101.705-82.311 184-184 184z"></path>
                    </svg>
                  </span>
                  <span className="circle_box spcDark">
                    <svg
                      className="svg-inline--fa fa-moon fa-w-16"
                      aria-hidden="true"
                      data-prefix="fas"
                      data-icon="moon"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      data-fa-i2svg="">
                      <path
                        fill="currentColor"
                        d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z"></path>
                    </svg>
                  </span>
                </div>
              </div>
              <div className="right_map" onClick={() => setLine(!line)}>
                <div className={line ? 'change_line change_line_active' : 'change_line'} onClick={() => setActive(!active)}>
                  <span className="first_line"></span>
                  <span className="second_line"></span>
                  <span className="third_line"></span>
                </div>
              </div>
            </Col>
          </Row>
        </div>
        <div className={`header_fixed_left ${shadow && "header_fixed_left_in"}`} id="bar">
          <ul className='fixed_left_list'>
            <li>
                <a href='#' id="tooltip-title-1" data-tooltip-content="O'zbekiston Respublikasi hukumat portali"><img src={Gerb_icon} /></a>
            </li>
            <li>
                <a href='#' onClick={() => setStep(1)} id="tooltip-title-2" data-tooltip-content="Davlat tashkilotlari">
                  <svg viewBox="0 -31 512 512" xmlns="http://www.w3.org/2000/svg">
                      <path d="m497.09375 60.003906c-.03125 0-.0625-.003906-.09375-.003906h-136v-15c0-24.8125-20.1875-45-45-45h-120c-24.8125 0-45 20.1875-45 45v15h-136c-8.351562 0-15 6.84375-15 15v330c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-329.683594c0-.019531 0-.039062 0-.058594-.574219-9.851562-6.632812-15.199218-14.90625-15.253906zm-316.09375-15.003906c0-8.269531 6.730469-15 15-15h120c8.269531 0 15 6.730469 15 15v15h-150zm295.1875 45-46.582031 139.742188c-2.042969 6.136718-7.761719 10.257812-14.226563 10.257812h-84.378906v-15c0-8.285156-6.714844-15-15-15h-120c-8.285156 0-15 6.714844-15 15v15h-84.378906c-6.464844 0-12.183594-4.121094-14.226563-10.257812l-46.582031-139.742188zm-175.1875 150v30h-90v-30zm181 165c0 8.269531-6.730469 15-15 15h-422c-8.269531 0-15-6.730469-15-15v-237.566406l23.933594 71.796875c6.132812 18.40625 23.289062 30.769531 42.6875 30.769531h84.378906v15c0 8.285156 6.714844 15 15 15h120c8.285156 0 15-6.714844 15-15v-15h84.378906c19.398438 0 36.554688-12.363281 42.6875-30.769531l23.933594-71.796875zm0 0"/>
                  </svg>
                </a>
            </li>
            <li>
                <div className="lang" id="tooltip-title-3" data-tooltip-content="Tilni tanlang">
                  <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                      O'z
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1" className='dropdown_item'>Ўз</Dropdown.Item>
                      <Dropdown.Item href="#/action-2" className='dropdown_item'>Ру</Dropdown.Item>
                      <Dropdown.Item href="#/action-3" className='dropdown_item'>En</Dropdown.Item>
                      <Dropdown.Item href="#/action-4" className='dropdown_item'>Қр</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </div>
            </li>
            <li>
                <div onClick={() => setBefore(!before)} id="tooltip-title-4" data-tooltip-content="Sayt xaritasi">
                  <div onClick={() => setActive(!active)} className={active ? 'fixed_right_map fixed_right_map_active' : 'fixed_right_map'}>
                    <span className="first_line"></span>
                    <span className="second_line"></span>
                    <span className="third_line"></span>
                  </div>
                </div>
            </li>
          </ul>
          <ReactTooltip anchorId="tooltip-title-1" place="right" />
          <ReactTooltip anchorId="tooltip-title-2" place="right" />
          <ReactTooltip anchorId="tooltip-title-3" place="right" />
          <ReactTooltip anchorId="tooltip-title-4" place="right" />
        </div>
        <div className={active ? 'map_site map_site_active' : 'map_site'}>
          <span className="map_site_title">Bosh sahifa bo'limlarining tuzilishi</span>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column">
            <ul className="map_site_list">
              <li>― Davlat tashkilotlari:</li>
              <li>
                <Link to="/all_ministry" target="_blank">
                  Vazirliklar
                </Link>
              </li>
              <li>
                <a href="#">Davlat qo'mitalari</a>
              </li>
              <li>
                <a href="#">Davlat inspеksiyalari</a>
              </li>
              <li>
                <a href="#">Agentliklar</a>
              </li>
              <li>
                <a href="#">Qo'mitalar</a>
              </li>
              <li>
                <a href="#">Markazlar</a>
              </li>
              <li>
                <a href="#">Hokimiyatlar</a>
              </li>
              <li>
                <a href="#">Uyushmalar</a>
              </li>
              <li>
                <a href="#">Fondlar</a>
              </li>
              <li>
                <a href="#">Boshqalar</a>
              </li>
              <li>
                <a href="#">Markazlar</a>
              </li>
              <li>
                <a href="#">Hokimiyatlar</a>
              </li>
              <li>
                <a href="#">Uyushmalar</a>
              </li>
              <li>
                <a href="#">Fondlar</a>
              </li>
              <li>
                <a href="#">Boshqalar</a>
              </li>
              <li>
                <a href="#">Markazlar</a>
              </li>
              <li>
                <a href="#">Hokimiyatlar</a>
              </li>
              <li>
                <a href="#">Uyushmalar</a>
              </li>
              <li>
                <a href="#">Fondlar</a>
              </li>
              <li>
                <a href="#">Boshqalar</a>
              </li>
            </ul>
            <ul className="map_site_list">
              <li>― Hayotiy vaziyatlar:</li>
              <li>
                <a href="https://advice.uz/oz/document/516" target="_blank">
                  Farzand tug'ilishi
                </a>
              </li>
              <li>
                <a href="https://advice.uz/oz/category/554" target="_blank">
                  Mehnat munosabatlari
                </a>
              </li>
              <li>
                <a href="https://advice.uz/oz/category/58" target="_blank">
                  Oila qurish va oilani tugatish
                </a>
              </li>
              <li>
                <a href="https://advice.uz/oz/category/65" target="_blank">
                  Ta'lim
                </a>
              </li>
              <li>
                <a href="https://advice.uz/oz/category/84" target="_blank">
                  Yashash joyida propiska qilish va ro'yxatdan o'tish
                </a>
              </li>
              <li>
                <a href="https://advice.uz/oz/category/590" target="_blank">
                  Nogironlarning ijtimoiy himoyasi
                </a>
              </li>
            </ul>
            <ul className="map_site_list">
              <li>― Hukumat:</li>
              <li>
                <Link to="/portal/page1" target="_blank">
                  Umumiy ma'lumot
                </Link>
              </li>
              <li>
                <Link to="/portal/page2" target="_blank">
                  Vаzirlаr Mаhkаmаsining tаrkibi
                </Link>
              </li>
              <li>
                <Link to="/portal/page3" target="_blank">
                  Rayosat
                </Link>
              </li>
              <li>
                <Link to="/portal/page4" target="_blank">
                  Apparat
                </Link>
              </li>
              <li>
                <Link to="/portal/page5" target="_blank">
                  Departamentlar
                </Link>
              </li>
              <li>
                <a href="#">Kotibiyatlar</a>
              </li>
              <li>
                <a href="#">Inspeksiyalar</a>
              </li>
            </ul>
            <ul className="map_site_list">
              <li>― Faoliyat:</li>
              <li>
                <Link to="/activity_page/page1" target="_blank">
                  Iqtisodiyot va moliya
                </Link>
              </li>
              <li>
                <Link to="/activity_page/page2" target="_blank">
                  Ta'lim
                </Link>
              </li>
              <li>
                <a href="#">Sog'liqni saqlash</a>
              </li>
              <li>
                <a href="#">Sport</a>
              </li>
              <li>
                <a href="#">Ekologiya</a>
              </li>
              <li>
                <a href="#">Xavfsizlik</a>
              </li>
              <li>
                <a href="#">Transport va aloqa</a>
              </li>
              <li>
                <a href="#">Uy-joy va shaharlar</a>
              </li>
              <li>
                <a href="#">Bandlik va mehnat</a>
              </li>
              <li>
                <a href="#">Qishloq xo'jaligi</a>
              </li>
              <li>
                <a href="#">Investitsiyalar va innovatsiyalar</a>
              </li>
              <li>
                <a href="#">Hududiy rivojlanish</a>
              </li>
              <li>
                <a href="#">Turizm va madaniyat</a>
              </li>
              <li>
                <a href="#">Energetika</a>
              </li>
              <li>
                <a href="#">Huquq va qonunchilik</a>
              </li>
            </ul>
            <ul className="map_site_list">
              <li>― Davlat xizmatlari:</li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=16" target="_blank">
                  Adliya
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=4" target="_blank">
                  Oila va bolalar
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=5" target="_blank">
                  Ijtimoiy ta'minot
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=6" target="_blank">
                  Soliqlar
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=1" target="_blank">
                  UJKX
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=5" target="_blank">
                  Sog'liqni saqlash va ijtimoiy himioya
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=9" target="_blank">
                  Axborot va aloqa
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=8" target="_blank">
                  Ta'lim va yoshlar
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=2" target="_blank">
                  Ko'chmas mulk
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=18" target="_blank">
                  Ma'lumotlar
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=10" target="_blank">
                  Madaniyat va sport
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=11&page=1&per-page=15" target="_blank">
                  Litsenziyalash
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=3" target="_blank">
                  Transport
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=6" target="_blank">
                  Moliya va to'lovlar
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=12" target="_blank">
                  Investitsiya va savdo
                </a>
              </li>
              <li>
                <a href="https://my.gov.uz/oz/all-services?id=12" target="_blank">
                  Tadbirkorlik
                </a>
              </li>
            </ul>
            <ul className="map_site_list">
              <li>― O'zbekiston:</li>
              <li>
                <Link to="/info_uzb/pages1" target="_blank">
                  Davlat ramzlari
                </Link>
              </li>
              <li>
                <Link to="/info_uzb/pages2" target="_blank">
                  Geografik joylashuvi
                </Link>
              </li>
              <li>
                <Link to="/info_uzb/pages3" target="_blank">
                  Hudud
                </Link>
              </li>
              <li>
                <Link to="/info_uzb/pages4" target="_blank">
                  Aholi
                </Link>
              </li>
              <li>
                <Link to="/info_uzb/pages5" target="_blank">
                  Milliy bayramlar
                </Link>
              </li>
            </ul>
            <ul className="map_site_list">
              <li>― Yangiliklar:</li>
              <li>
                <Link to="/all_news_page" target="_blank">
                  Yangiliklar
                </Link>
              </li>
              <li>
                <a href="#">Majlislar</a>
              </li>
              <li>
                <a href="#">Nutqlar</a>
              </li>
              <li>
                <a href="#">So'rovlar</a>
              </li>
              <li>
                <a href="#">Taqdimotlar</a>
              </li>
              <li>
                <Link to="/events_info" target="_blank">
                  Voqealar
                </Link>
              </li>
            </ul>
            <ul className="map_site_list">
              <li>― Foydali havolalar:</li>
              <li>
                <a href="https://openbudget.uz/" target="_blank">
                  Ochiq budjet
                </a>
              </li>
              <li>
                <a href="https://data.gov.uz/rus" target="_blank">
                  Ochiq hukumat
                </a>
              </li>
              <li>
                <a href="https://davaktiv.uz/oz/" target="_blank">
                  Xususiylashtirish
                </a>
              </li>
              <li>
                <a href="https://www.stat.uz/uz/" target="_blank">
                  Gender statistika
                </a>
              </li>
              <li>
                <a href="https://anticorruption.uz/uz" target="_blank">
                  Korrupsiyaga qarshi kurash
                </a>
              </li>
            </ul>
          </Masonry>
        </div>
        <div className={step > 0 ? 'all_sidebar all_sidebar_active' : 'all_sidebar'}>
          <div className={step > 0 ? 'sidebar menu sidebar menu_active' : 'sidebar menu'}>
            <ul className="sidebar_list">
              <li>
                <a href="#" onClick={() => setStep(2)}>
                  Vazirliklar
                </a>
              </li>
              <li>
                <a href="#">Davlat qo'mitalari</a>
              </li>
              <li>
                <a href="#">Davlat inspeksiyalari</a>
              </li>
              <li>
                <a href="#">Agentliklar</a>
              </li>
              <li>
                <a href="#">Qo'mitalar</a>
              </li>
              <li>
                <a href="#">Markazlar</a>
              </li>
              <li>
                <a href="#">Hokimiyatlar</a>
              </li>
              <li>
                <a href="#">Uyushmalar</a>
              </li>
              <li>
                <a href="#">Fondlar</a>
              </li>
              <li>
                <a href="#">Boshqalar</a>
              </li>
            </ul>
            <button
              type="button"
              onClick={() => setStep((prevState) => (prevState === 1 ? setStep(0) : setStep(prevState - 1)))}
              className="btn x_close close_btn"></button>
          </div>
          <div className={step > 1 ? 'sidebar sub_menu sidebar sub_menu_active' : 'sidebar sub_menu'}>
            <ul className="sidebar_list">
              <li>
                <a href="#" onClick={() => setStep(3)}>
                  <span>O'zbekiston Respublikasi Raqamli texnologiyalar vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://mineconomy.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Iqtisodiy taraqqiyot va kambag'allikni qisqartirish vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://www.mf.uz/" target="_blank">
                  <span>O'zbеkistоn Rеspublikаsi Mоliya vаzirligi</span>{' '}
                </a>
              </li>
              <li>
                <a href="https://www.mintrans.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Transport vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://mehnat.uz/oz" target="_blank">
                  <span>O'zbekiston Respublikasi Bandlik va mehnat munosabatlari vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://www.edu.uz/uz" target="_blank">
                  <span>O'zbеkistоn Rеspublikаsi Оliy vа o'rtа mахsus tа'lim vаzirligi</span>{' '}
                </a>
              </li>
              <li>
                <a href="https://www.uzedu.uz/y3" target="_blank">
                  <span>O'zbekistоn Respublikаsi Хаlq ta'limi vаzirligi</span>{' '}
                </a>
              </li>
              <li>
                <a href="https://ssv.uz/" target="_blank">
                  <span>O'zbеkistоn Rеspublikаsi Sоg'liqni sаqlаsh vаzirligi</span>{' '}
                </a>
              </li>
              <li>
                <a href="https://iiv.uz/" target="_blank">
                  <span>O'zbеkiston Rеspublikаsi Ichki ishlаr vаzirligi</span>
                </a>
              </li>
              <li>
                <a href="http://www.mudofaa.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Mudofaa vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://www.fvv.uz/" target="_blank">
                  <span>O'zbеkistоn Rеspublikаsi Fаvqulоddа vаziyatlаr vаzirligi</span>
                </a>
              </li>
              <li>
                <a href="http://www.mc.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Qurilish vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://mfa.uz/uz" target="_blank">
                  <span>O'zbеkistоn Rеspublikаsi Tаshqi ishlаr vаzirligi</span>
                </a>
              </li>
              <li>
                <a href="http://www.mift.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi investitsiyalar va tashqi savdo vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://www.minjust.uz/uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Adliya vazirligi</span>{' '}
                </a>
              </li>
              <li>
                <a href="https://madaniyat.uz/uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Madaniyat vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://uzbektourism.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Turizm va madaniy meros vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://minsport.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Sportni rivojlantirish vazirligi</span>
                </a>
              </li>
              <li>
                <a href="http://https//kommunal.uz/uz" target="_blank">
                  <span>O'zbekiston Respublikasi Uy-joy kommunal xizmat ko'rsatish vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://www.mpe.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Maktabgacha ta'lim vazirligi</span>
                </a>
              </li>
              <li>
                <a href="https://mininnovation.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Innovatsion rivojlanish vazirligi</span>
                </a>
              </li>
              <li>
                <a href="http://www.agro.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Qishlоq хo'jаligi vаzirligi</span>
                </a>
              </li>
              <li>
                <a href="http://www.water.gov.uz/" target="_blank">
                  <span>O'zbekiston Respublikasi Suv хo'jаligi vаzirligi</span>
                </a>
              </li>
              <li>
                <a href="https://minenergy.uz/uz" target="_blank">
                  <span>O'zbekiston Respublikasi Energetika vazirligi</span>
                </a>
              </li>
              <li>
                <a href="http://moqqv.uz/">
                  <span>O'zbekiston Respublikasi mahalla va nuroniylarni qo'llab-quvvatlash vazirligi</span>
                </a>
              </li>
            </ul>
            {/* <button type="button" onClick={() => setStep(prevState => prevState === 1 ? setStep(0) : setStep(prevState - 1))} className="btn x_close"></button> */}
          </div>
          <div className={step > 2 ? 'sidebar sub_sub_menu sidebar sub_sub_menu_active' : 'sidebar sub_sub_menu'}>
            <span className="sub_sub_menu_title">
              O'zbekiston Respublikasi Raqamli texnologiyalar vazirligi
            </span>
            <Table striped hover className="sidebar_table">
              <tbody>
                <tr>
                  <td>Manzil:</td>
                  <td>100000, Toshkent, Amir Temur shox ko'chasi, 4</td>
                </tr>
                <tr>
                  <td>Ish vaqti:</td>
                  <td>9:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Telefon:</td>
                  <td>11-99</td>
                </tr>
                <tr>
                  <td>Faks:</td>
                  <td>+99871 239-8782</td>
                </tr>
                <tr>
                  <td>Veb-sayt:</td>
                  <td>
                    mitc.gov.uz
                    <Link to="/miniistry_com_page" className="link_website" target="_blank">
                      Veb-saytga o'tish
                    </Link>
                  </td>
                </tr>
                <tr>
                  <td>Elektron pochta:</td>
                  <td>info@mitc.uz</td>
                </tr>
                <tr>
                  <td>Ijtimoiy tarmoq</td>
                  <td>
                    <a href="https://www.youtube.com/c/MinistryofICTofUzbekistan" className="social_link" target="_blank">
                      <svg
                        id="youtube"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.42"
                        height="28.42"
                        viewBox="0 0 28.42 28.42">
                        <path
                          id="Контур_19"
                          data-name="Контур 19"
                          d="M224.113,213.714l4.926-2.837-4.926-2.837Zm0,0"
                          transform="translate(-211.832 -196.666)"
                          fill="#013d8c"
                        />
                        <path
                          id="Контур_20"
                          data-name="Контур 20"
                          d="M14.21,0A14.21,14.21,0,1,0,28.42,14.21,14.212,14.212,0,0,0,14.21,0Zm8.879,14.225a23.454,23.454,0,0,1-.366,4.272,2.225,2.225,0,0,1-1.565,1.565,54.01,54.01,0,0,1-6.948.366,52.077,52.077,0,0,1-6.948-.38A2.225,2.225,0,0,1,5.7,18.481a23.35,23.35,0,0,1-.366-4.271A23.438,23.438,0,0,1,5.7,9.939a2.27,2.27,0,0,1,1.565-1.58,54.009,54.009,0,0,1,6.948-.366,51.966,51.966,0,0,1,6.948.38,2.225,2.225,0,0,1,1.565,1.565A22.257,22.257,0,0,1,23.089,14.225Zm0,0"
                          fill="#013d8c"
                        />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/mininfocom" className="social_link" target="_blank">
                      <svg
                        id="Facebook"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.42"
                        height="28.578"
                        viewBox="0 0 28.42 28.578">
                        <g id="Vector_Smart_Object" data-name="Vector Smart Object" transform="translate(0 0)">
                          <g id="Vector_Smart_Object-2" data-name="Vector Smart Object" transform="translate(0.076 0)">
                            <path
                              id="Контур_7"
                              data-name="Контур 7"
                              d="M67.891,79.92A14.135,14.135,0,1,0,82.025,94.055,14.134,14.134,0,0,0,67.891,79.92Zm4.151,8.575H70.078c-.694,0-.838.284-.838,1v1.732h2.8l-.27,3.042H69.24v9.085H65.612V94.308H63.725v-3.08h1.887V88.8c0-2.276,1.217-3.465,3.917-3.465h2.512Z"
                              transform="translate(-53.756 -79.92)"
                              fill="#013d8c"
                            />
                          </g>
                          <path
                            id="Color_Overlay"
                            data-name="Color Overlay"
                            d="M0,14.21A14.21,14.21,0,1,1,14.21,28.42,14.21,14.21,0,0,1,0,14.21Zm10.022.255h1.9v9.1h3.647V14.426h2.545l.271-3.058H15.567V9.626c0-.721.145-1.006.842-1.006h1.974V5.446H15.857c-2.714,0-3.938,1.2-3.938,3.484v2.438h-1.9Z"
                            transform="translate(0 0.157)"
                            fill="#013d8c"
                          />
                        </g>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/mitc.uz/" className="social_link" target="_blank">
                      <svg
                        id="Instagram"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.933"
                        height="28.689"
                        viewBox="0 0 28.933 28.689">
                        <g id="Delete_this_layer" data-name="Delete this layer" transform="translate(0 0)">
                          <g id="Delete_this_layer-2" data-name="Delete this layer" transform="translate(0.663 0.42)">
                            <g id="Сгруппировать_3" data-name="Сгруппировать 3" transform="translate(0 0)">
                              <path
                                id="Контур_9"
                                data-name="Контур 9"
                                d="M235.087,95.063a2.718,2.718,0,0,0-.643-1.008,2.662,2.662,0,0,0-.988-.655,4.682,4.682,0,0,0-1.6-.3c-.906-.042-1.178-.051-3.473-.051s-2.566.009-3.473.051a4.679,4.679,0,0,0-1.6.3,2.659,2.659,0,0,0-.988.655,2.723,2.723,0,0,0-.643,1.008,4.932,4.932,0,0,0-.3,1.627c-.041.924-.05,1.2-.05,3.541s.009,2.617.05,3.541a4.935,4.935,0,0,0,.3,1.627,2.723,2.723,0,0,0,.643,1.008,2.659,2.659,0,0,0,.988.655,4.679,4.679,0,0,0,1.6.3c.906.042,1.178.051,3.473.051s2.566-.009,3.473-.051a4.682,4.682,0,0,0,1.6-.3,2.662,2.662,0,0,0,.988-.655,2.718,2.718,0,0,0,.643-1.008,4.925,4.925,0,0,0,.3-1.627c.041-.924.05-1.2.05-3.541s-.009-2.617-.05-3.541A4.923,4.923,0,0,0,235.087,95.063Zm-6.7,9.668a4.5,4.5,0,1,1,4.413-4.5A4.457,4.457,0,0,1,228.388,104.731Zm4.587-8.126a1.052,1.052,0,1,1,1.031-1.051A1.041,1.041,0,0,1,232.975,96.6Z"
                                transform="translate(-214.239 -85.82)"
                                fill="#013d8c"
                              />
                              <path
                                id="Контур_10"
                                data-name="Контур 10"
                                d="M230.827,99.8a2.921,2.921,0,1,0,2.865,2.921A2.893,2.893,0,0,0,230.827,99.8Z"
                                transform="translate(-216.678 -88.293)"
                                fill="#013d8c"
                              />
                              <path
                                id="Контур_11"
                                data-name="Контур 11"
                                d="M223.072,79.92a14.135,14.135,0,1,0,14.135,14.135A14.135,14.135,0,0,0,223.072,79.92Zm8.138,17.8a6,6,0,0,1-.38,1.984,4.177,4.177,0,0,1-2.39,2.39,6,6,0,0,1-1.984.38c-.872.04-1.15.049-3.37.049s-2.5-.009-3.369-.049a6,6,0,0,1-1.984-.38,4.179,4.179,0,0,1-2.39-2.39,6,6,0,0,1-.38-1.984c-.04-.871-.049-1.15-.049-3.369s.009-2.5.049-3.369a6,6,0,0,1,.38-1.984,4.179,4.179,0,0,1,2.39-2.39,6,6,0,0,1,1.984-.38c.872-.04,1.15-.049,3.369-.049s2.5.009,3.37.049a6,6,0,0,1,1.984.38,4.177,4.177,0,0,1,2.39,2.39,6,6,0,0,1,.38,1.984c.04.872.049,1.15.049,3.369S231.249,96.848,231.21,97.72Z"
                                transform="translate(-208.937 -79.92)"
                                fill="#013d8c"
                              />
                            </g>
                          </g>
                          <path
                            id="Color_Overlay"
                            data-name="Color Overlay"
                            d="M0,14.287A14.287,14.287,0,1,1,14.287,28.573,14.287,14.287,0,0,1,0,14.287ZM10.9,6.376a6.065,6.065,0,0,0-2,.384A4.224,4.224,0,0,0,6.475,9.175a6.063,6.063,0,0,0-.384,2c-.04.881-.049,1.162-.049,3.405s.009,2.525.049,3.405a6.065,6.065,0,0,0,.384,2,4.224,4.224,0,0,0,2.416,2.416,6.064,6.064,0,0,0,2,.384c.881.04,1.162.05,3.405.05s2.525-.009,3.406-.05a6.064,6.064,0,0,0,2-.384A4.222,4.222,0,0,0,22.127,20a6.064,6.064,0,0,0,.384-2c.04-.881.05-1.162.05-3.405s-.009-2.524-.05-3.405a6.062,6.062,0,0,0-.384-2A4.222,4.222,0,0,0,19.712,6.76a6.065,6.065,0,0,0-2-.384c-.881-.04-1.162-.05-3.406-.05S11.777,6.335,10.9,6.376Zm.068,14.933a4.574,4.574,0,0,1-1.534-.284,2.736,2.736,0,0,1-1.568-1.568,4.574,4.574,0,0,1-.284-1.534c-.04-.871-.048-1.132-.048-3.338s.008-2.467.048-3.338a4.572,4.572,0,0,1,.284-1.534A2.736,2.736,0,0,1,9.43,8.147a4.574,4.574,0,0,1,1.534-.284c.871-.04,1.132-.048,3.338-.048s2.467.008,3.338.048a4.577,4.577,0,0,1,1.534.284A2.734,2.734,0,0,1,20.74,9.714a4.562,4.562,0,0,1,.284,1.534c.04.871.048,1.132.048,3.338s-.008,2.467-.048,3.338a4.564,4.564,0,0,1-.284,1.534,2.734,2.734,0,0,1-1.567,1.568,4.577,4.577,0,0,1-1.534.284c-.871.04-1.132.048-3.338.048S11.835,21.349,10.964,21.309Zm-.9-6.723A4.241,4.241,0,1,0,14.3,10.344,4.242,4.242,0,0,0,10.06,14.586Zm7.659-4.409a.991.991,0,1,0,.991-.991A.991.991,0,0,0,17.719,10.177Zm-6.171,4.409A2.753,2.753,0,1,1,14.3,17.339,2.753,2.753,0,0,1,11.548,14.586Z"
                            transform="translate(0)"
                            fill="#013d8c"
                          />
                        </g>
                      </svg>
                    </a>
                    <a href="https://twitter.com/uz_mitc" className="social_link" target="_blank">
                      <svg
                        id="Twitter"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.573"
                        height="28.964"
                        viewBox="0 0 28.573 28.964">
                        <g id="Vector_Smart_Object" data-name="Vector Smart Object" transform="translate(0 0)">
                          <g
                            id="Vector_Smart_Object-2"
                            data-name="Vector Smart Object"
                            transform="translate(0.142 0.695)">
                            <path
                              id="Контур_5"
                              data-name="Контур 5"
                              d="M144.56,79.92a14.135,14.135,0,1,0,14.135,14.135A14.135,14.135,0,0,0,144.56,79.92Zm7.37,11.59a9.267,9.267,0,0,1-14.256,8.229A6.549,6.549,0,0,0,142.5,98.39a3.26,3.26,0,0,1-3.043-2.263,3.259,3.259,0,0,0,1.471-.056,3.262,3.262,0,0,1-2.614-3.236,3.244,3.244,0,0,0,1.476.408,3.262,3.262,0,0,1-1.008-4.35,9.246,9.246,0,0,0,6.716,3.4,3.26,3.26,0,0,1,5.553-2.972,6.528,6.528,0,0,0,2.069-.791,3.263,3.263,0,0,1-1.432,1.8,6.509,6.509,0,0,0,1.871-.513A6.6,6.6,0,0,1,151.931,91.51Z"
                              transform="translate(-130.425 -79.92)"
                              fill="#013d8c"
                            />
                          </g>
                          <path
                            id="Color_Overlay"
                            data-name="Color Overlay"
                            d="M0,14.287A14.287,14.287,0,1,1,14.287,28.573,14.287,14.287,0,0,1,0,14.287Zm12.375,7.225a9.315,9.315,0,0,0,9.361-9.8,6.671,6.671,0,0,0,1.643-1.7,6.58,6.58,0,0,1-1.891.518,3.3,3.3,0,0,0,1.448-1.822,6.6,6.6,0,0,1-2.091.8,3.3,3.3,0,0,0-5.612,3A9.345,9.345,0,0,1,8.445,9.068a3.3,3.3,0,0,0,1.019,4.4,3.278,3.278,0,0,1-1.492-.412,3.3,3.3,0,0,0,2.642,3.271,3.294,3.294,0,0,1-1.487.056A3.3,3.3,0,0,0,12.2,18.668a6.619,6.619,0,0,1-4.876,1.363A9.321,9.321,0,0,0,12.375,21.511Z"
                            fill="#013d8c"
                          />
                        </g>
                      </svg>
                    </a>
                    <a href="https://t.me/mitcuz" className="social_link" target="_blank">
                      <svg
                        id="Artboard"
                        xmlns="http://www.w3.org/2000/svg"
                        width="28.42"
                        height="28.42"
                        viewBox="0 0 28.42 28.42">
                        <path
                          id="Контур_18"
                          data-name="Контур 18"
                          d="M14.21,0A14.21,14.21,0,1,0,28.42,14.21,14.211,14.211,0,0,0,14.21,0ZM20.8,9.664c-.213,2.246-1.139,7.7-1.609,10.216-.2,1.066-.592,1.422-.971,1.457-.825.076-1.452-.546-2.251-1.069-1.25-.819-1.957-1.33-3.171-2.13-1.4-.925-.494-1.433.306-2.263.21-.218,3.845-3.525,3.916-3.825a.288.288,0,0,0-.066-.251.328.328,0,0,0-.294-.028q-.188.043-5.994,3.961a2.7,2.7,0,0,1-1.542.57,10.082,10.082,0,0,1-2.208-.523c-.889-.289-1.6-.443-1.536-.933q.048-.384,1.056-.785,6.213-2.707,8.287-3.57c3.947-1.641,4.766-1.927,5.3-1.936C20.69,8.543,20.851,9.1,20.8,9.664Z"
                          fill="#013d8c"
                          fill-rule="evenodd"
                        />
                      </svg>
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Transport</td>
                  <td>Metro: Amir Temur bekati, Avtobuslar: № 38,51,58,67,71,85 (Respublika Xalq banki bekati)</td>
                </tr>
                <tr>
                  <td>Yo'l xaritasi:</td>
                  <td>
                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1YnrH1jv12GHA9H6ye6uQ665_6D4&ehbc=2E312F"
                      width="100%"
                      height="480"></iframe>
                  </td>
                </tr>
              </tbody>
            </Table>
            <a href="https://murojaat.gov.uz/oz?organization_id=3454" className="send_appeal_link" target="_blank">
              Murojaat yuborish
            </a>
            <a
              href="https://my.gov.uz/oz/all-services?ServiceFilterForm%5Bauthority_id%5D=15"
              className="serv_link"
              target="_blank">
              Interaktiv xizmatlar
            </a>
            {/* <button type="button" onClick={() => setStep(prevState => prevState === 1 ? setStep(0) : setStep(prevState - 1))} className="btn x_close"></button> */}
          </div>
        </div>
    </div>
    
  );
};

export default Header_fixed;