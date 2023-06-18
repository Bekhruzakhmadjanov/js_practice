import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/footer";
import Lottie from 'react-lottie';
import * as animationData from "../assets/img/404.json";

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Error_page =() =>{
    return(
        <div>
            <Container>
                <div className="error_page_b">
                    <div>
                        <div className="animation_search">
                            <Lottie options={defaultOptions} />
                        </div>
                        <span>Sahifa topilmadi</span>
                        <p>Sahifa mavjud emas yoki topilmadi. Adreslar satridagi havolani tekshiring yoki texnik bo'lim bilan bog'laning.</p>
                    </div>
                </div>
            </Container>
            <Footer />
        </div>
    )
}

export default Error_page;