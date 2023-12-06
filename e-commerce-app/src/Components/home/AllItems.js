import React, { useState, useEffect } from "react";
import { Box, Button, Image, Text } from "@chakra-ui/react";

import CardContent from "../Common/CardContent";
import { Link } from "react-router-dom";

const baseImageUrl = "https://assets.wfcdn.com/im/";

function AllItems({ data }) {
  const [visibleItems, setVisibleItems] = useState(10);
  const [allItems, setAllItems] = useState([]);

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

    setAllItems(productImageUrls);
  }, [data]);

  const handleShowMore = () => {
    setVisibleItems((prev) => prev + 10);
  };

  return (
    <>
      <Box display="flex" alignItems="flex-end" justifyContent="end">
        {visibleItems < allItems.length && (
          <Button
            colorScheme="teal"
            variant="outline"
            mt="2"
            mb="2"
            onClick={handleShowMore}
          >
            Show More
          </Button>
        )}
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={4}
      >
        {allItems.slice(0, visibleItems).map((item, index) => (
          <Link to={`/productlist/${item?.leadImage?.id}`}>
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              p={2}
              height="100%"
              width="100%"
              boxShadow="lg"
              // border="2px solid teal"
            >
              <Image
                src={item.imageUrl}
                alt="img"
                height="150px"
                width="100%"
                mb={4}
              />

              <Box textAlign="start" marginLeft="15px">
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  color="black"
                  mb={item.name.length < 30 ? 7 : 2}
                  noOfLines={2}
                >
                  {item.name}
                </Text>
                <Text fontSize="md" mb={2} color="grey">
                  {item.manufacturer.name}
                </Text>
                <Text fontSize="md" color="black">
                  {item?.pricing?.clearancePrice?.unitPrice?.value > 0
                    ? `$${item?.pricing?.clearancePrice?.unitPrice?.value}/each`
                    : `$85.27/each`}
                </Text>
                <CardContent />
              </Box>
            </Box>
          </Link>
        ))}
      </Box>
    </>
  );
}

export default AllItems;
