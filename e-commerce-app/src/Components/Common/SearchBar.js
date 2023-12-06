import React, { useState, useEffect } from "react";
import {
  Input,
  Flex,
  Button,
  Box,
  Text,
  useToast,
  Image,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductSearch = ({ isNav, buttonHide, isNavRadious }) => {
  const storedProductData =
    JSON.parse(localStorage.getItem("dataWithImage")) || [];
  const [productData, setProductData] = useState(storedProductData);
  const [searchInput, setSearchInput] = useState("");
  const [matchingProducts, setMatchingProducts] = useState([]);
  const toast = useToast();

  const handleInputChange = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchInput(input);

    if (!productData) {
      setMatchingProducts([]);
      return;
    }

    if (input.trim() === "") {
      setMatchingProducts([]);
      return;
    }

    const filteredProducts = productData.filter((product) =>
      product.name.toLowerCase().includes(input)
    );

    setMatchingProducts((prevMatchingProducts) => {
      localStorage.setItem("matchProducts", JSON.stringify(filteredProducts));
      return filteredProducts;
    });

    if (filteredProducts.length === 0) {
      toast({
        title: "No products found",
        description: `No products found for "${input}"`,
        status: "info",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Flex direction="column" position="relative" width="100%">
      <Flex align="center">
        <Input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          ml="2"
          flex="1"
          placeholder="Search"
          border={isNav === true ? "none" : "1px solid grey"}
          borderLeft={isNav === true ? "1px solid black" : true}
          borderRadius={isNavRadious === true ? "none" : "lg"}
        />
        <Button
          ml="2"
          colorScheme="teal"
          onClick={handleInputChange}
          display={buttonHide === true ? "none" : true}
        >
          <FaSearch />
        </Button>
      </Flex>
      {searchInput.trim() !== "" && (
        <Box
          position="absolute"
          top="100%"
          left="0"
          width="100%"
          zIndex="10"
          background="white"
        >
          {matchingProducts?.slice(0, 5).map((item, index) => (
            <Link to="/searchpage">
              <Box
                key={index}
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                width="100%"
                // border="2px solid teal"
                textAlign="start"
                display="flex"
              >
                <Image
                  src={item.imageUrl}
                  alt="img"
                  height="30px"
                  width="30px"
                  borderRadius="lg"
                />
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  color="black"
                  mb={item.name.length < 20 ? 7 : 2}
                  noOfLines={2}
                >
                  {item.name}
                </Text>
              </Box>
            </Link>
          ))}
        </Box>
      )}
    </Flex>
  );
};

export default ProductSearch;
