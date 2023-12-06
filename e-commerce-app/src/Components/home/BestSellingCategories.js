import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Box, Heading, Image } from "@chakra-ui/react";

export default function BestSellingCategories({ categories }) {
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
      className="mySwiper"
    >
      {categories.map((category, index) => (
        <SwiperSlide key={index} border="2px solid red">
          <Box
            maxW="md"
            borderWidth="1px"
            borderRadius="lg"
            // border="2px solid teal"
          >
            <Image
              src={
                category.imageUrl
                  ? categories.imageUrl
                  : "https://th.bing.com/th/id/R.212b5bfae981a5bad05eb3c1548b388e?rik=QBeJMitMinTrhg&riu=http%3a%2f%2fevafurniture.com%2fwp-content%2fuploads%2f2016%2f08%2fMetal-Patio-Furniture-Sets-for-Outdoor-Small-Spaces.jpg&ehk=iwdCsT1ZrJhZGWm6z3i%2bcodespP%2fhyDu%2bbvLbvozNXc%3d&risl=&pid=ImgRaw&r=0"
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
