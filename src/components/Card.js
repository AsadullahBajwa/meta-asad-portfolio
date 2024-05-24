import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Card = ({ title, description, imageSrc, url }) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <a href={url} target="_blank" style={{ textDecoration: "none" }}>
      <VStack
        color="black"
        backgroundColor="white"
        cursor="pointer"
        borderRadius="xl"
        width="90%"
        height="auto"
        boxShadow="md"
        justifyContent="space-between"
        p={2}
        data-aos="flip-left"
        _hover={{ transform: "translateY(-5px)", transition: "transform 0.3s" }}
      >
        <Image
          borderRadius="xl"
          src={imageSrc}
          alt={title}
          width="100%"
          height="200px"
          // objectFit="cover"
        />
        <VStack spacing={2} alignItems="flex-start" width="100%">
          <Heading as="h3" size="md" textAlign="center">
            {title}
          </Heading>
          <Text color="#64748b" fontSize="md" noOfLines={[3, 2, 2]} textAlign="start">
            {description}
          </Text>
          <HStack justifyContent="center" alignItems="center" width="100%">
            <Text fontSize="md" color="blue" textDecoration="underline">
              See More
            </Text>
            {/* <FontAwesomeIcon icon={faArrowRight} size="1x" /> */}
          </HStack>
        </VStack>
      </VStack>
    </a>
  );
};

export default Card;
