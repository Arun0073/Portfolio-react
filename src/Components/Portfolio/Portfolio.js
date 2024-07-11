import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Gym from "../../img/gym.png";
import Youtube from "../../img/youtube.png";
import Beauty from "../../img/beauty.png";
import Tomato from "../../img/tomato.png";
import { themeContext } from "../../Context";
import { Autoplay } from "swiper/modules";
import "swiper/css";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkmode = theme.state.darkmode;
  return (
    <div className="portfolio" id="Portfolio">
      <span style={{ color: darkmode ? "white" : "" }}>Recent Projects</span>
      <span>Portfolio</span>

      <Swiper
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        speed={800}
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://gymwebsitereact.netlify.app">
            {" "}
            <img src={Gym} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://beautyproductwebsite.netlify.app">
            <img src={Beauty} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://tomato-frontend-nvhd.onrender.com">
            <img src={Tomato} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://arunyoutubeclone.netlify.app">
            <img src={Youtube} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
