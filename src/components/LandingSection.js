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
  Text,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import FullScreenSection from "./FullScreenSection";
import profilePic from "../images/ai pp (2).jpg";

const greeting = "Hello, I am Asadullah !";
const bio1 = "A full-stack developer";
const bio2 = "Specialised in ReactJs & Django";
const about =
  "I am a seasoned full-stack software engineer with extensive experience across multiple technology stacks. I have worked on various enterprise-level projects, collaborating with international clients to deliver exceptional solutions. My specialties include MVC frameworks and transforming visionary ideas into reality.";

const bio1Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const wordVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
    },
  }),
};

const LandingSection = () => {
  const aboutWords = about.split(" ");

  return (
    <FullScreenSection
      justifyContent="center"
      alignItems="center"
      isDarkBackground
      backgroundColor="#ced3d4"
    >
      <Stack
        direction={["column-reverse", "row"]}
        spacing={[8, 32]}
        align={"center"}
        marginTop={["25%", "10%"]}
        textAlign={["center","left"]}
      >
        <VStack align={["center","start"]} spacing={4}>
          <Heading as="h3" size={["lg", "xl"]} color="#1f1313">
            {greeting}
          </Heading>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={bio1Variants}
          >
            <Heading as="h3" size={["lg", "2xl"]} color="black.300">
              {bio1}
            </Heading>
          </motion.div>
          <Heading as="h3" size={["md", "xl"]} color="black.300">
            {bio2}
          </Heading>
          <Text
            fontSize="lg"
            fontWeight="medium"
            color="black.900"
            textAlign="justify"
            lineHeight="tall"
          >
            {about}
          </Text>
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
};

export default LandingSection;
