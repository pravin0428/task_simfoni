import { Text, Box, Button } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";

function CardContent() {
  const [count, setCount] = useState(0);
  return (
    <div width="100%">
      <Text fontSize="sm" fontWeight="500" mb={2} color="teal">
        saving % 4.60
      </Text>
      <Text fontSize="sm" fontWeight="500" mb={2} color="black" display="flex">
        Supplier: <p style={{ color: "grey", marginLeft: "2px" }}>Supplier</p>
      </Text>
      <Text fontSize="sm" fontWeight="500" mb={2} color="black" display="flex">
        Delivery by:{" "}
        <p style={{ color: "grey", marginLeft: "2px" }}>24 Jan 2024</p>
      </Text>
      <Box
        textAlign="center"
        display="flex"
        //   marginLeft="15px"
        gap="22px"
      >
        <Box border="1px solid #ccc" display="flex" borderRadius="5px">
          <Button
            onClick={() => setCount(count - 1)}
            border="none"
            background="none"
            disabled={{ sm: "hidden", md: "none" }}
          >
            -
          </Button>
          <Box as="span" mx={2} margin="auto">
            {count}
          </Box>
          <Button
            onClick={() => setCount(count + 1)}
            border="none"
            background="none"
          >
            +
          </Button>
        </Box>
        <Button colorScheme="teal" variant="outline">
          <FaHeart />
        </Button>
      </Box>
      <Button colorScheme="teal" mt="4" width="98%">
        Add To Cart
      </Button>
    </div>
  );
}

export default CardContent;
