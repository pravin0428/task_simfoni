import React, { useEffect, useState } from "react";
import Navbar from "../Components/Common/Navbar";
import BestSellingCategories from "../Components/home/BestSellingCategories";
import BestSellingItems from "../Components/home/BestSellingItems";
import { Box, Heading, Select } from "@chakra-ui/react";
import AllItems from "../Components/home/AllItems";
import TopSupplier from "../Components/home/TopSuppliers";
import ProductSearch from "../Components/Common/SearchBar";
import HomeSlides from "../Components/home/HomeSlides";
import TrendingSearches from "../Components/home/TrendingSearches";
import LoadingSpinner from "../Components/Common/LoadingSpinner";

function HomePage() {
  const [bestSelling, setBestSelling] = useState([]);
  const [bestItems, setBestItems] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const RapidAPI_Key = "d9ad70c688msh5271c1a897e7890p1adbedjsn73981b63a0e5";
  const RapidAPI_Host = "wayfair.p.rapidapi.com";

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const storedData = localStorage.getItem("bestSellingCategoriesData");

        if (storedData) {
          setBestSelling(JSON.parse(storedData));
        } else {
          const url =
            "https://wayfair.p.rapidapi.com/categories/list?caid=214970";
          const options = {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": RapidAPI_Key,
              "X-RapidAPI-Host": RapidAPI_Host,
            },
          };

          const response = await fetch(url, options);
          const result = await response.json();

          localStorage.setItem(
            "bestSellingCategoriesData",
            JSON.stringify(result.response.categoryAppData.departmentCategories)
          );

          setBestSelling(result.response.categoryAppData.departmentCategories);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false); // Set loading to false whether it succeeds or fails
      }
    };

    fetchCategories();
  }, []);

  const fetchBestItems = async () => {
    try {
      const storedData = localStorage.getItem("bestSellingItemsData");

      if (storedData) {
        setBestItems(JSON.parse(storedData));
      } else {
        const url =
          "https://wayfair.p.rapidapi.com/products/list?categoryId=45974&itemsPerPage=48&page=1";
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key": RapidAPI_Key,
            "X-RapidAPI-Host": RapidAPI_Host,
          },
        };

        const response = await fetch(url, options);
        const result = await response.json();

        localStorage.setItem(
          "bestSellingItemsData",
          JSON.stringify(result.response.data.category.browse.products)
        );

        setBestItems(result.response.data.category.browse.products);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBestItems();
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div>
      <Box
        display="flex"
        justifyContent="space-between"
        p={2}
        background="rgb(243, 240, 240)"
      >
        <Box width={{ base: "80%", md: "55%" }}>
          <ProductSearch />
        </Box>
        <Box display={{ base: "none", md: "flex" }} gap="20px">
          <Select placeholder="Filter" size="md" width="200px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>

          <Select placeholder="Sort by" size="md" width="200px">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>
      </Box>
      <HomeSlides />

      {/* Best Selling Categories */}
      <Box
        padding="10px 50px 10px 50px"
        margin="20px 10px 0px 10px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Heading as="h2" mb={4} fontSize="xl" textAlign="start">
          BEST SELLING CATEGORIES
        </Heading>

        {/* Check if bestSelling is not empty before rendering */}
        {bestSelling.length > 0 && (
          <BestSellingCategories categories={bestSelling} />
        )}
      </Box>

      {/* Best Selling Items */}
      <Box
        padding="10px 50px 10px 50px"
        margin="20px 10px 0px 10px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Heading as="h2" mb={4} fontSize="xl" textAlign="start">
          BEST SELLING ITEMS
        </Heading>

        {/* Check if bestItems is not empty before rendering */}
        {bestItems.length > 0 && <BestSellingItems data={bestItems} />}
      </Box>

      {/* All Items */}
      <Box
        padding="10px 50px 10px 50px"
        margin="20px 10px 0px 10px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Heading as="h2" mb={4} fontSize="xl" textAlign="start">
          All ITEMS
        </Heading>

        {/* Check if bestItems is not empty before rendering */}
        {bestItems.length > 0 && <AllItems data={bestItems} />}
      </Box>

      {/* Top Supplier */}
      <Box
        padding="10px 50px 10px 50px"
        margin="20px 10px 0px 10px"
        boxShadow="rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
      >
        <Heading as="h2" mb={4} fontSize="xl" textAlign="start">
          TOP SUPPLIER
        </Heading>

        {/* Check if bestSelling is not empty before rendering */}
        {bestSelling.length > 0 && <TopSupplier categories={bestSelling} />}
      </Box>

      <TrendingSearches />
    </div>
  );
}

export default HomePage;
