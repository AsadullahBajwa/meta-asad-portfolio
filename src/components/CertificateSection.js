import React from "react";
import FullScreenSection from "./FullScreenSection";
import { Box, Heading } from "@chakra-ui/react";
import CertificateCard from "./CertificateCard";
// import { faToolbox } from "@fortawesome/free-solid-svg-icons";

const certificates = [
  {
    title: "Advance React By Meta ( This Portfolio website was the project of this course )",
    description:
      "I completed the Advanced React course on Coursera, which is part of the Meta Front-End Developer Professional Certificate1. In this course, I learned how to use more advanced React concepts and features, such as Creating robust and reusable components with hooks, forms, and composition techniques Fetching and posting data from a remote server using an API Testing React applications with React Testing Library Integrating commonly used React libraries and tools",
    getImageSrc: () => require("../images/reactjs-adv-meta.png"),
  },
  {
    title: "JavaScript By Meta",
    description:
      "I learned JavaScript from Meta's experts, who made famous web apps with it. This course taught me the basics and advanced topics of JavaScript, the most common web language. I can now make dynamic and interactive web pages with JavaScript.",
    getImageSrc: () => require("../images/JS-meta.png"),
  },
  {
    title: "Foundation Of Project Management by Google",
    description:
      "I learned project management basics and applications from Google's experts. This course showed me how to lead and deliver projects using different methods and tools. I learned the project lifecycle, the project manager's role, and the skills to manage projects well.",
    getImageSrc: () => require("../images/pm-google.png"),
  },
  {
    title: "CSS3 by University Of Michigan",
    description:
      "I learned CSS3 from University of Michigan's instructors, who have made many web apps with it. This course taught me how to write CSS rules, test code, and style web pages. I learned how to use CSS3 to create layouts, fonts, colors, and animations.",
    getImageSrc: () => require("../images/css-michigan.png"),
  },
  {
    title: "Docker For Beginners",
    description:
      "I completed the Docker for Beginners guided project on Coursera, where I learned how to use Docker to create and run applications in containers. I practiced using basic Docker commands, deploying a web application, connecting containers with networks, and storing data with volumes.",
    getImageSrc: () => require("../images/Docker-certi.png"),
  },
  {
    title: "Node.js & Express",
    description: "This course taught me how to use Node.js and Express to create web applications. I learned about the basics of Node.js, such as modules, events, and streams, and how to use Express to handle routing, middleware, and templating. I also learned how to use MongoDB and Mongoose to store and manipulate data, and how to deploy my web applications to the cloud using IBM Cloud Foundry.",
    getImageSrc: () => require("../images/NodeJs.png"),
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