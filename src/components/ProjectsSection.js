import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from './Card';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; // Required CSS
import "slick-carousel/slick/slick-theme.css"; // Optional theme (adjust styling)


const projects = [
  {
    title: "React Cart Management",
    description:
      "In this project, I leverage the Redux state management library to seamlessly handle cart functionality, ensuring a smooth and efficient shopping experience.Additionally, I integrate an example API to fetch product data dynamically, enabling the dynamic display of items and enhancing the overall user experience.",
    getImageSrc: () => require("../images/cart-management.png"),
    url: "https://asad-product-cart-management.vercel.app/",
    stack:"ReactJS",
  },
  {
    title: "Investment calculator",
    description:
      "This React web project allows users to input their expected interest rate, desired investment duration, current savings, and yearly savings. It then calculates and displays both annual savings and annual investment based on the provided information, offering a comprehensive financial overview for users.",
    getImageSrc: () => require("../images/investment-calc.png"),
    url:"https://react-js-investment-calc.vercel.app/",
    stack:"ReactJS",
  },
  {
    title: "Jewllery Shop",
    description:"The Landing page was designed for one of my clients to boost his business by making their business presence online.",
    getImageSrc: () => require("../images/mangata-and-gallo.png"),
    url:"https://bajwa-jewellery-shop-landing-page.vercel.app/",
    stack:"ReactJS",
  },
  {
    title: "Event planner",
    description:
      "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
    getImageSrc: () => require("../images/photo4.jpg"),
    url:"",
  },
];

const settings = {
  dots: true, // Enable navigation dots (optional)
  infinite: true, // Enable infinite loop
  speed: 500, // Slide transition speed
  slidesToShow: 3, // Show one card at a time
  slidesToScroll: 1, // Scroll one card at a time
  arrows: true, // Enable navigation arrows
  // padding: "10px",
  responsive: [
    { // Responsive adjustments (optional)
      breakpoint: 768, // Adjust for smaller screens
      settings: {
        slidesToShow: 1, // Show 2 cards on smaller screens
      },
    },
  ],
};


const ProjectsSection = () => {
  return (
    <FullScreenSection
      backgroundColor="#ced3d4"
      isDarkBackground
      p={8}
      alignItems="flex-start"
      spacing={8}
    >
      <Heading as="h1" id="projects-section">
        Featured Projects
      </Heading>
      <Box
        display="grid"
        gridTemplateColumns={["repeat(1, minmax(0, 1fr))", "repeat(1, minmax(0, 1fr))"]}
        gridGap={8}
      >
        {/* <div className="slider-container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}> */}
          <Slider {...settings}>
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                description={project.description}
                imageSrc={project.getImageSrc()}
                url={project.url}
              />
            ))}
          </Slider>
        {/* </div> */}
        
      </Box>
    </FullScreenSection>
  );
};

export default ProjectsSection;
