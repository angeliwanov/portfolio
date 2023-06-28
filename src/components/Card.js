import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <VStack
      backgroundColor="white"
      borderRadius="5%"
      spacing={4}
      align="start"
      boxShadow="md"
      width="100%"
    >
      <Image borderRadius="5%" src={imageSrc} alt={title} />
      <Heading pl={4} pt={4} size="md" color="black">
        {title}
      </Heading>
      <Text pl={4} color="grey">
        {description}
      </Text>
      <HStack pl={4} pb={4}>
        <Text color="black">See more</Text>
        <FontAwesomeIcon color="black" icon={faArrowRight} size="1x" />
      </HStack>
    </VStack>
  );
};

export default Card;
