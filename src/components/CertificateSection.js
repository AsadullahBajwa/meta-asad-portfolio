import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";

const projects = [
  {
    title: "React Cart Management",
    description:
      "In this project, I leverage the Redux state management library to seamlessly handle cart functionality, ensuring a smooth and efficient shopping experience.Additionally, I integrate an example API to fetch product data dynamically, enabling the dynamic display of items and enhancing the overall user experience.",
    getImageSrc: () => require("../images/cart-management.png"),
    url: "https://asad-product-cart-management.vercel.app/"
  },
  {
    title: "Investment calculator",
    description:
      "This React web project allows users to input their expected interest rate, desired investment duration, current savings, and yearly savings. It then calculates and displays both annual savings and annual investment based on the provided information, offering a comprehensive financial overview for users.",
    getImageSrc: () => require("../images/investment-calc.png"),
    url:"https://react-js-investment-calc.vercel.app/",
  },
  {
    title: "Photo Gallery",
    description:
      "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
    getImageSrc: () => require("../images/photo3.jpg"),
    url:"",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    url:"",
  },
];

const CertificateSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#d896ff"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="certifications-section">
        Certifications
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={["repeat(1, minmax(0, 1fr))", "repeat(2, minmax(0, 1fr))"]}
        gridGap={8}
      >
        {projects.map((project) => (
          <Card
            key={project.title}
            title={project.title}
            description={project.description}
            imageSrc={project.getImageSrc()}
            url={project.url}
          />
        ))}
      </Box>
    </FullScreenSection>
  );
};

export default CertificateSection;