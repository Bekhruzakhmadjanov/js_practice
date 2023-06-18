import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import News from "../components/news";
import Weather from "../components/weather";
import Activities from "../inner_components/activities";
import Banner_slider from "../inner_components/banner_slider";
import Calendar_service from "../inner_components/cal_ser";
import Inner_footer from "../inner_components/footer_in";
import Inner_usefull from "../inner_components/inner_usefull_links";
import Project from "../inner_components/projects";
import Vac_doc_link from "../inner_components/vac_doc_link";

import { VectorMap } from "@south-paw/react-vector-maps";
import UzbMap from "../assets/img/uzbekistan.svg.json";

import Mitc_header from "../inner_components/mitc_header";
import Header_fixed from "../components/header_fixed";

const Ministry_communication = () => {
  const style = { margin: "1rem auto", width: "300px" };
  const [hovered, setHovered] = React.useState("None");
  const [focused, setFocused] = React.useState("None");
  const [clicked, setClicked] = React.useState("None");

  const layerProps = {
    onMouseEnter: ({ target }) => setHovered(target.attributes.name.value),
    // onMouseLeave: ({ target }) => setHovered('None'),
    onFocus: ({ target }) => setFocused(target.attributes.name.value),
    // onBlur: ({ target }) => setFocused('None'),
    onClick: ({ target }) => setClicked(target.attributes.name.value),
  };

  return (
    <div className="fix_content">
      <Header_fixed />
      <Mitc_header />
      <News />
      <Banner_slider />
      <Activities />
      <Calendar_service />
      <Vac_doc_link />
      <Project />
      <Container className="change_width">
        <div className="map_box">
          <Row>
            <Col lg="7">
              <div className="map_before">
                <VectorMap {...UzbMap} layerProps={layerProps} />
                <div className="hover_box">
                  {hovered && <code>{hovered}</code>}
                </div>
              </div>
            </Col>
            <Col lg="5">
              <div className="map_labels">
                <span className="map_title">
                  Hududiy boshqarmalar
                  <i>{clicked && <code>{clicked}</code>}</i>
                </span>
                <span className="user_name">Qurbonov G'ulom Karimovich</span>
                <ul className="map_info_list">
                  <li className="">
                    <span>Должность:</span>
                    <i>и.о.Начальник</i>
                  </li>
                  <li className="">
                    <span>Телефон:</span>
                    <i>+998 (0) 372 226-21-84</i>
                  </li>
                  <li className="">
                    <span>Faks:</span>
                    <i>226-62-81</i>
                  </li>
                  <li className="">
                    <span>Дни приема:</span>
                    <i>понедельник –пятница с 09:00 до 12:00</i>
                  </li>
                </ul>
                <span className="map_veb_site">depnavoi@mitc.uz</span>
                <a href="#" className="map_all_news">
                  все новости региона
                </a>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
      <Weather />
      <Inner_usefull />
      <Inner_footer />
    </div>
  );
};

export default Ministry_communication;
