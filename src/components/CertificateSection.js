import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import Card from "./Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faToolbox } from "@fortawesome/free-solid-svg-icons";
import CertificateCard from "./CertificateCard";
// import { faToolbox } from "@fortawesome/free-solid-svg-icons";

const certificates = [
  {
    title: "JavaScript By Meta",
    description:
      "In This course I learned the JS from basic to advance level from the top notch devlopers of Meta known as Facebook",
    getImageSrc: () => require("../images/JS-meta.png"),
  },
  {
    title: "Foundation Of Project Management by Google",
    description:
      "Course by Google",
    getImageSrc: () => require("../images/pm-google.png"),
  },
  {
    title: "Css3 by University Of Michigan",
    description:
      "Core Concepts of CSS3",
    getImageSrc: () => require("../images/css-michigan.png"),
  },
  {
    title: "Docker For Beginners",
    description:
      "A guided project by Coursera",
    getImageSrc: () => require("../images/Docker-certi.png"),
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
      {certificates.map((project) => (
        <CertificateCard
          key={project.title}
          title={project.title}
          description={project.description}
          imageSrc={project.getImageSrc()}
          // url={project.url}
        />
      ))}
    </FullScreenSection>
  );
};

export default CertificateSection;