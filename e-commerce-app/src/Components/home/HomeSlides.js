import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Image } from "@chakra-ui/react";
import "swiper/swiper-bundle.css";

export default function HomeSlides() {
  const imageStyle = {
    maxHeight: "400px",
    width: "100%",
    objectFit: "cover",
    objectPosition: "top",
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{ delay: 2000 }}
        autoHeight={true}
      >
        <SwiperSlide>
          <Image
            src="https://thumbs.dreamstime.com/z/hard-work-concept-tired-man-holding-many-boxes-hands-over-brick-wall-hard-work-concept-tired-man-holding-many-boxes-hands-212290434.jpg"
            alt="banner2"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://th.bing.com/th/id/R.76fc452da5c43dfd56d5ecb16d2bfaee?rik=O3qywCkjVryi5Q&riu=http%3a%2f%2fcitywestshoppingcentre.com%2fapp%2fuploads%2f2017%2f04%2fWoman-Shopping-Banner.jpg&ehk=f51KA0DgiwyUWBfb1HSSlawurrqZaQVx%2fMpZlmiBwy8%3d&risl=&pid=ImgRaw&r=0"
            alt="banner3"
            style={imageStyle}
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="https://th.bing.com/th/id/R.0ab6e848a8395fe4e95572437a644b0a?rik=AJSrU%2fNrEmp1Tw&riu=http%3a%2f%2fwww.istmagazine.com%2fwp-content%2fuploads%2f2017%2f07%2froadnotes-01-082017.jpg&ehk=XOQkxoF%2fZla97zYzRWsTGP9xZXDKf1ZYnTILxdKActc%3d&risl=&pid=ImgRaw&r=0"
            alt="banner3"
            style={imageStyle}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
