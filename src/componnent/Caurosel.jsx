import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// Import Required Modules
import { Pagination ,Autoplay} from 'swiper/modules';

export default function AutoCarousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}

        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className="">
          <img className="h-96 w-full  border-x-2 border-orange-400" src="https://img.freepik.com/free-photo/morning-lake-with-boat_1232-1642.jpg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="">
        <img className="h-96 w-full border-r-2 border-orange-400" src="https://images.unsplash.com/photo-1577624060070-ca1afe89ddad?q=80&w=1626&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img className="h-96 w-full border-r-2 border-orange-400" src="https://img.freepik.com/free-photo/landmark-pagoda-doi-inthanon-national-park-chiang-mai-thailand_335224-779.jpg?size=626&ext=jpg&ga=GA1.1.553209589.1714348800&semt=sph" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img className="h-96 w-full border-r-2 border-orange-400" src="https://thumbs.dreamstime.com/b/kuala-lumpur-malaysia-skyline-night-68640121.jpg" alt="" />
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
        <img className="h-96 w-full border-r-2 border-orange-400" src="https://i.natgeofe.com/n/a50f7239-ff6d-4874-9448-25d94d8d1c80/sundarbans-bangladesh_16x9.jpg?w=1200" alt="" />
        </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
