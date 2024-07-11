import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Your seamless integration of user-friendly features into our website has significantly enhanced our customer experience: thank you!",
    },
    {
      img: profilePic2,
      review:
        "The sleek design and functionality of our new site are incredible: your skills as a web developer truly shine!",
    },
    {
      img: profilePic3,
      review:
        "We are thrilled with the fast load times and intuitive navigation you implemented: outstanding work!",
    },
    {
      img: profilePic4,
      review:
        "Your attention to detail and innovative solutions have taken our web presence to the next level: much appreciated!",
    },
  ];

  return (
    <div className="t-wrapper" id="Testimonials">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination,Autoplay]}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{delay:2500,disableOnInteraction:false}}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;