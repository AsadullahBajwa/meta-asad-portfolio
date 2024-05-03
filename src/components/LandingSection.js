import React from "react";
import {
  Avatar,
  Heading,
  HStack,
  VStack,
  Image,
  Center,
  useBreakpointValue,
  Stack,
} from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
// import pp from '../images/pp.jpeg';
import profilePic from "../images/ai pp (2).jpg";
// import { useBreakpointValue } from "@chakra-ui/react";

const greeting = "Hello, I am Asadullah !";
const bio1 = "A full-stack developer";
const bio2 = "Specialised in ReactJs & Django";
const about =
  "I am a seasoned full-stack software engineer with extensive experience across multiple technology stacks. I have worked on various enterprise-level projects, collaborating with international clients to deliver exceptional solutions. My specialties include MVC frameworks and transforming visionary ideas into reality.";
const breakpoints = {
  base: "0em", // 0px
  sm: "30em", // ~480px. em is a relative unit and is dependant on the font size.
  md: "48em", // ~768px
  lg: "62em", // ~992px
  xl: "80em", // ~1280px
  "2xl": "96em", // ~1536px
};

// const Stack = useBreakpointValue({ base: VStack, md: HStack });
// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#d896ff"
  >
    <Stack
      direction={["column-reverse", "row"]}
      spacing={[8, 32]}
      align={"center"}
    >
      <VStack>
        <Heading as="h3" size="xl" color='white'>
          {greeting}
        </Heading>
        <br />
        <Heading as="h3" size="2xl">
          {bio1}
        </Heading>
        <Heading as="h3" size="xl">
          {bio2}
        </Heading>
        <p>{about}</p>
      </VStack>
      <Image
        boxSize={[290, 450]}
        objectFit="cover"
        borderRadius="full"
        src={profilePic}
        mt="50px"
      />
    </Stack>
  </FullScreenSection>
);

export default LandingSection;
