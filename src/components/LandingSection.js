import React from "react";
import { Avatar, Heading, VStack,Image } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
// import pp from '../images/pp.jpeg';
import profilePic from '../images/pp.jpeg'

const greeting = "Hello, I am Asadullah !";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
  >
    <VStack spacing={6}>
      <Avatar size='2xl' src={profilePic} />
      {/* <Image boxSize='200px' src={profilePic}/> */}
      {/* <Image borderRadius='full' boxSize='200px' src={profilePic}/> */}
      <Heading as='h4' size='md'>{greeting}</Heading><br/>
      <Heading as='h2' size='2xl'>{bio1}</Heading>
      <Heading as='h2' size='2xl'>{bio2}</Heading>
    </VStack>

  </FullScreenSection>
);

export default LandingSection;
