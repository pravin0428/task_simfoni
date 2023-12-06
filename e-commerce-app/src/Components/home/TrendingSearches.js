import React from "react";
import { Box, Button, Heading, Flex } from "@chakra-ui/react";

const searchItems = [
  "Construction Helmet",
  "Saws",
  "Apple Juice",
  "Cider",
  "Construction Costume blue",
  "Tapes",
  "Construction suit",
  "Pullers",
  "Matteress",
  "Bed",
  "Construction Costume blue",
  "Tapes",
  "Bed",
  "Construction suit",
];

const TrendingSearches = () => {
  return (
    <Box
      padding={{ base: "10px", md: "20px 50px" }}
      margin="20px 10px 0px 10px"
      boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
    >
      <Heading as="h2" mb={4} fontSize="xl" textAlign="start">
        PEOPLE SEARCHING FOR
      </Heading>

      <Flex gap={3} whiteSpace="normal" flexWrap="wrap" overflowX="auto">
        {searchItems.map((item, index) => (
          <Button
            key={index}
            width="min-content"
            h={{ base: "12", md: "10" }}
            textAlign="center"
            border="1px solid grey"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {item}
          </Button>
        ))}
      </Flex>
    </Box>
  );
};

export default TrendingSearches;
