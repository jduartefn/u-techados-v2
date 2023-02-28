import { Swiper, SwiperSlide } from 'swiper/react';
import Sillas from './../img/categorias/sillas.svg';
import Techos from './../img/categorias/techos.svg';
import Mesas from './../img/categorias/mesas.svg';

import 'swiper/css';

const CategorySwiper = () => {
    return (
        <Swiper  spaceBetween={25} 
        breakpoints={{
            1920: {
                slidesPerView: 6
            },
            640: {
              width: 640,
              slidesPerView: 3,
            },
            768: {
              width: 768,
              slidesPerView: 4,
            },
          }}
          >
            <SwiperSlide>
                <div className="category-container">
                <img src={Sillas} alt="" />
                <b>Techos</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Techos} alt="" />
                <b>Sillas</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Mesas} alt="" />
                <b>Mesas</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Sillas} alt="" />
                <b>Techos</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Techos} alt="" />
                <b>Sillas</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Mesas} alt="" />
                <b>Mesas</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Sillas} alt="" />
                <b>Techos</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Techos} alt="" />
                <b>Sillas</b>
            </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="category-container">
                <img src={Mesas} alt="" />
                <b>Mesas</b>
            </div>
            </SwiperSlide>
            
        </Swiper>
    );
};

export default CategorySwiper;  