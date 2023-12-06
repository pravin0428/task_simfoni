import React from "react";
import { Box, Select } from "@chakra-ui/react";

const FilterSortComponent = ({
  filterOption,
  sortOption,
  handleFilterChange,
  handleSortChange,
}) => {
  return (
    <Box display={{ base: "none", md: "flex" }} gap="20px">
      <Select
        placeholder="Filter"
        size="md"
        width="200px"
        value={filterOption}
        onChange={handleFilterChange}
      >
        <option value="">All Brands</option>
        <option value="Mercury Row®">Mercury Row®</option>
        <option value="Mercer41">Mercer41</option>
        <option value="Everly Quinn">Everly Quinn</option>
      </Select>

      <Select
        placeholder="Sort by"
        size="md"
        width="200px"
        value={sortOption}
        onChange={handleSortChange}
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Asc</option>
        <option value="priceDesc">Price: Desc</option>
      </Select>
    </Box>
  );
};

export default FilterSortComponent;
