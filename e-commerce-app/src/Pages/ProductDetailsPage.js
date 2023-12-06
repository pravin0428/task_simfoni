import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import CardContent from "../Components/Common/CardContent";
import LoadingSpinner from "../Components/Common/LoadingSpinner";

export default function ProductDetailsPage() {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  console.log(product, "UUUUUU");
  const toast = useToast();

  const allData = JSON.parse(localStorage.getItem("dataWithImage")) || [];

  useEffect(() => {
    const foundProduct = allData.find((item) => item?.leadImage?.id === +id);

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      console.error(`Product with id ${id} not found.`);
      toast({
        title: `Product with id ${id} not found.`,
        status: "error",
        isClosable: true,
      });
    }
  }, [id]);

  if (!product) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <Card
        direction={{ base: "column", sm: "row" }}
        overflow="hidden"
        variant="outline"
        display="flex"
        justifyContent="center"
        marginTop="20px"
      >
        <Image
          objectFit="cover"
          maxW={{ base: "100%", sm: "500px" }}
          height="80%"
          src={product.imageUrl}
          alt="product image"
          borderRadius="lg"
        />

        <Stack>
          <CardBody textAlign="start">
            <Heading size="md">{product.name}</Heading>

            <Text py="2" style={{ color: "grey", marginLeft: "2px" }}>
              Sku Number: {product?.sku}
            </Text>

            <Text
              fontSize="sm"
              fontWeight="500"
              mb={2}
              color="black"
              display="flex"
            >
              {product.name}
            </Text>

            <Text fontSize="md" color="black">
              {product?.pricing?.clearancePrice?.unitPrice?.value > 0
                ? `$${product?.pricing?.clearancePrice?.unitPrice?.value}/each`
                : `$85.27/each`}
            </Text>

            <CardContent />

            <Text py="2" fontWeight="bold">
              Additional information
            </Text>

            <Text
              fontSize="sm"
              fontWeight="500"
              mb={2}
              color="black"
              display="flex"
            >
              Vender Name:{" "}
              <p style={{ color: "grey", marginLeft: "2px" }}>"None"</p>
            </Text>

            <Text
              fontSize="sm"
              fontWeight="500"
              mb={2}
              color="black"
              display="flex"
            >
              Manufacturer Name :{" "}
              <p style={{ color: "grey", marginLeft: "2px" }}>
                {product?.manufacturer?.name}
              </p>
            </Text>

            <Text
              fontSize="sm"
              fontWeight="500"
              mb={2}
              color="black"
              display="flex"
            >
              Brand Name :{" "}
              <p style={{ color: "grey", marginLeft: "2px" }}>
                {product?.manufacturer?.shortName}
              </p>
            </Text>

            <Text
              fontSize="sm"
              fontWeight="500"
              mb={2}
              color="black"
              display="flex"
            >
              Days To Delever :{" "}
              <p style={{ color: "grey", marginLeft: "2px" }}>3</p>
            </Text>

            <Text
              fontSize="sm"
              fontWeight="500"
              mb={2}
              color="black"
              display="flex"
            >
              Country Of Origin :
              <p style={{ color: "grey", marginLeft: "2px" }}>India</p>
            </Text>

            <Text
              fontSize="sm"
              fontWeight="500"
              mb={2}
              color="black"
              display="flex"
            >
              Color Options :{" "}
              <p style={{ color: "grey", marginLeft: "2px" }}>
                {product?.options?.optionConnectionMetadata?.color_option_count}
              </p>
            </Text>

            <Text
              fontSize="sm"
              fontWeight="500"
              mb={2}
              color="black"
              display="flex"
            >
              Package Size :{" "}
              <p style={{ color: "grey", marginLeft: "2px" }}>
                {product?.options?.optionConnectionMetadata?.size_option_count}
              </p>
            </Text>

            <Text py="2" fontWeight="bold">
              Long Discription
            </Text>
            <Text>
              Explore more details on{" "}
              <Link
                to={product.url}
                style={{ color: "blue", textDecoration: "underline" }}
                rel="noopener noreferrer"
              >
                Wayfair
              </Link>
              .
            </Text>
          </CardBody>
        </Stack>
      </Card>
    </>
  );
}
