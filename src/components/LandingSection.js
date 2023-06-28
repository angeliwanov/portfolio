import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile from "../images/profile.jpg";

const greeting = "Hello, I am Angel!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack>
      <Avatar size="2xl" name="Angel Ivanov" src={profile} />
      <Heading size="md" color="white">
        {greeting}
      </Heading>
      <Heading size="xl" color="white">
        {bio1}
      </Heading>
      <Heading size="xl" color="white">
        {bio2}
      </Heading>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
