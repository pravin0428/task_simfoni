import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Box, Heading, Image } from "@chakra-ui/react";

function TopSupplier({ categories }) {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      pagination={{ clickable: true }}
      breakpoints={{
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 4, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 20 },
      }}
      //   modules={[Pagination]}
      className="mySwiper"
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index} border="2px solid red">
          <Box maxW="md" borderWidth="1px" borderRadius="lg">
            <Image
              src={
                category.imageUrl
                  ? category.imageUrl
                  : "https://i.pinimg.com/736x/88/61/1a/88611ad94746475bbdb970092f5814b8.jpg"
              }
              alt="img"
              w="100%"
              h="200px"
              objectFit="cover"
              borderTopRadius="lg"
            />
            <Box p={4}>
              <Heading fontSize="sm" fontWeight="bold" mb={2}>
                {category.displayName}
              </Heading>
            </Box>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default TopSupplier;
