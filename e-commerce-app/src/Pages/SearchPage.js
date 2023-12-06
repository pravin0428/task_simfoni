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
import CardContent from "../Components/Common/CardContent";
import { Link } from "react-router-dom";
import FilterSortComponent from "../Components/Common/FilterSortComponent";

const SearchPage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [matchingProducts, setMatchingProducts] = useState([]);
  const [filterOption, setFilterOption] = useState("");
  const [sortOption, setSortOption] = useState("");
  const toast = useToast();

  // Fetch the default data from local storage when the component mounts
  useEffect(() => {
    const storedProductData =
      JSON.parse(localStorage.getItem("matchProducts")) || [];
    setMatchingProducts(storedProductData);
  }, []);

  const handleInputChange = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchInput(input);

    if (input.trim() === "") {
      // If the search input is empty, show the default data
      const storedProductData =
        JSON.parse(localStorage.getItem("matchProducts")) || [];
      setMatchingProducts(storedProductData);
      return;
    }

    const filteredProducts = matchingProducts.filter((product) =>
      product.name.toLowerCase().includes(input)
    );

    setMatchingProducts(filteredProducts);

    // Displaying toast if no profuct found
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

  const handleFilterChange = (event) => {
    const selectedFilter = event.target.value;
    setFilterOption(selectedFilter);

    const storedProductData =
      JSON.parse(localStorage.getItem("matchProducts")) || [];

    if (selectedFilter === "") {
      setMatchingProducts(storedProductData);
    } else {
      const filteredProducts = storedProductData.filter(
        (product) =>
          product.manufacturer.name.toLowerCase() ===
          selectedFilter.toLowerCase()
      );
      setMatchingProducts(filteredProducts);
    }
  };

  const handleSortChange = (event) => {
    const selectedSort = event.target.value;
    setSortOption(selectedSort);

    if (selectedSort === "") {
      //showig all products when sort not selected
      const storedProductData =
        JSON.parse(localStorage.getItem("matchProducts")) || [];
      setMatchingProducts(storedProductData);
      return;
    }

    // Sorting the products
    const sortedProducts = [...matchingProducts];

    sortedProducts.sort((a, b) => {
      const priceA = a?.pricing?.clearancePrice?.unitPrice?.value || 0;
      const priceB = b?.pricing?.clearancePrice?.unitPrice?.value || 0;

      return selectedSort === "priceAsc" ? priceA - priceB : priceB - priceA;
    });

    setMatchingProducts(sortedProducts);
  };

  return (
    <>
      <Flex align="center">
        <Input
          type="text"
          value={searchInput}
          onChange={handleInputChange}
          ml="2"
          flex="1"
          placeholder="Search"
          width={{ base: "80%", md: "55%" }}
        />
        <Button ml="2" colorScheme="teal" onClick={handleInputChange}>
          <FaSearch />
        </Button>

        <Box
          display="flex"
          justifyContent="space-between"
          p={2}
          background="rgb(243, 240, 240)"
        >
          <FilterSortComponent
            filterOption={filterOption}
            sortOption={sortOption}
            handleFilterChange={handleFilterChange}
            handleSortChange={handleSortChange}
          />
        </Box>
      </Flex>

      {matchingProducts.length > 0 && (
        <Box
          display="grid"
          gridTemplateColumns="repeat(auto-fill, minmax(200px, 1fr))"
          gap={4}
        >
          {matchingProducts.map((item, index) => (
            <Box
              key={index}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              height="100%"
              width="100%"
              // border="2px solid teal"
            >
              <Link to={`/productlist/${item?.leadImage?.id}`}>
                <Image
                  src={item.imageUrl}
                  alt="img"
                  height="150px"
                  width="100%"
                  mb={4}
                  borderRadius="lg"
                />
              </Link>
              <Box textAlign="start" marginLeft="15px">
                <Text
                  fontSize="sm"
                  fontWeight="500"
                  color="black"
                  mb={item.name.length < 20 ? 7 : 2}
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
          ))}
        </Box>
      )}
    </>
  );
};

export default SearchPage;
