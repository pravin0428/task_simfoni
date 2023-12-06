import React, { useState, useEffect } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Box, Button, Image, Text } from "@chakra-ui/react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import CardContent from "../Common/CardContent";

const baseImageUrl = "https://assets.wfcdn.com/im/";

function BestSellingItems({ data }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const [slides, setSlides] = useState([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const productImageUrls = data.map((product) => {
      const image = product.leadImage;
      if (
        image &&
        typeof image.id === "number" &&
        product.manufacturer &&
        product.name
      ) {
        const idFirstFourDigits = image.id.toString().substring(0, 4);
        const idFirstNumber = image.id.toString()[0];
        const manufacturerName = encodeURIComponent(product.manufacturer.name);
        const productName = encodeURIComponent(product.name);

        const imageUrl = `${baseImageUrl}${idFirstNumber}/resize-h800-w800%5Ecompr-r85/${idFirstFourDigits}/${image.id}/${productName}.jpg`;

        return {
          ...product,
          imageUrl: imageUrl,
        };
      }
      return product;
    });
    localStorage.setItem("dataWithImage", JSON.stringify(productImageUrls));
    setSlides(productImageUrls);
  }, [data]);

  return (
    <Swiper
      modules={[Virtual, Navigation, Pagination]}
      onSwiper={setSwiperRef}
      slidesPerView={5}
      centeredSlides={false}
      spaceBetween={20}
      initialSlide={0}
      // pagination={{ clickable: true }}
      navigation={true}
      breakpoints={{
        320: { slidesPerView: 1, spaceBetween: 10 },
        425: { slidesPerView: 1, spaceBetween: 20 },
        640: { slidesPerView: 2, spaceBetween: 20 },
        768: { slidesPerView: 3, spaceBetween: 20 },
        1024: { slidesPerView: 5, spaceBetween: 20 },
        1440: { slidesPerView: 4, spaceBetween: 20 },
      }}
    >
      {slides &&
        slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            <Link to={`/productlist/${slideContent?.leadImage?.id}`}>
              <Box
                borderWidth="1px"
                borderRadius="lg"
                // p={4}
                height="auto"
                width="100%"
                mb={2}
                // border="2px solid teal"
              >
                <Image
                  src={slideContent.imageUrl}
                  alt="img"
                  height="100%"
                  width="100%"
                  borderRadius="lg"
                />
              </Box>
            </Link>
            <Link to={`/productlist/${slideContent?.leadImage?.id}`}>
              <Box textAlign="start" marginLeft="5px">
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  color="black"
                  mb={slideContent.name.length < 20 ? 7 : 2}
                  noOfLines={2}
                >
                  {slideContent.name}
                </Text>
                <Text fontSize="md" mb={2} color="grey">
                  {slideContent.manufacturer.name}
                </Text>
                <Text fontSize="md" color="black">
                  {slideContent?.pricing?.clearancePrice?.unitPrice?.value > 0
                    ? `$${slideContent?.pricing?.clearancePrice?.unitPrice?.value}/each`
                    : `$85.27/each`}
                </Text>

                <CardContent />
              </Box>
            </Link>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default BestSellingItems;
