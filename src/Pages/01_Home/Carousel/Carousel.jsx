import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.scss";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./customswiper.scss";
export default function CarouselCard() {
  return (
    <>
      <div className="swiper_controller ">
        <Swiper
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img
              src="https://live.staticflickr.com/65535/53430993796_e31499eb52_b.jpg"
              alt=""
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://live.staticflickr.com/65535/53430993796_e31499eb52_b.jpg"
              alt=""
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://live.staticflickr.com/65535/53430993796_e31499eb52_b.jpg"
              alt=""
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://live.staticflickr.com/65535/53430993796_e31499eb52_b.jpg"
              alt=""
              width={100}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://live.staticflickr.com/65535/53430993796_e31499eb52_b.jpg"
              alt=""
              width={100}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
