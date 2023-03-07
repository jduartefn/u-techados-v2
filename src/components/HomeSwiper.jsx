import { Swiper, SwiperSlide } from 'swiper/react';
import swiper from '../breadcumbs/css/swiper.css'
import {  Pagination, EffectFade } from 'swiper';


//Swiper CSS
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css';
// Icons
import { FaWhatsapp } from 'react-icons/fa';

const HomeSwiper = () => {
  return (
    <div className="principal-swiper">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        modules={[Pagination,EffectFade]}
        pagination
        effect="fade"
        

      >
        <SwiperSlide><div class="principal-banner">
          <div className="principal-first">
            <div className="info">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa ratione, dolores quasi sapiente id.</h4>
              <a className="btn-banner" href="">lorem arreder</a>
            </div>
            <div className="screw"></div>
          </div>
          <img className="img-contianer" src="https://i.ibb.co/J544gzP/techo-1.png" alt="" /> </div></SwiperSlide>
          <SwiperSlide><div class="principal-banner">
          <div className="principal-first">
            <div className="info">
              <h1>Lorem ipsum dolor sit amet.</h1>
              <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ipsa ratione, dolores quasi sapiente id.</h4>
              <a className="btn-banner" href="">lorem arreder</a>
            </div>
            <div className="screw"></div>
          </div>
          <img className="img-contianer" src="https://i.ibb.co/J544gzP/techo-1.png" alt="" /> </div></SwiperSlide>
      </Swiper>
      <div className="sub-swiper">
        <div className="sub-info">
          <h3 clasName="presupuestos"> Consultá presupuestos al </h3> <b><FaWhatsapp/> 099206715</b>
        </div>
      </div>
    </div>
  );
};

export default HomeSwiper;